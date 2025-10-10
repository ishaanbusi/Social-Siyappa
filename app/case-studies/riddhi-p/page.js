"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";

// Custom hooks
const useMedia = (queries, values, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    const get = () => {
      return (
        values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue
      );
    };

    // Set initial value
    setValue(get());

    const handler = () => setValue(get());
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
  }, [queries, values, defaultValue]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current || typeof ResizeObserver === "undefined") return;

    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  // Set initial size on mount
  useLayoutEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, []);

  return [ref, size];
};

// Utility functions
const preloadImages = async (urls) => {
  // Check if we're in browser environment
  if (typeof window === "undefined") return;

  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

// Masonry Component
const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getInitialPosition = (item) => {
    if (typeof window === "undefined") return { x: item.x, y: item.y };

    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === "random") {
      const dirs = ["top", "bottom", "left", "right"];
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    if (isMounted) {
      preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
    }
  }, [items, isMounted]);

  const grid = useMemo(() => {
    if (!width || !isMounted) return [];

    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    return items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width, isMounted]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!isMounted || !grid.length) return;

    // Don't wait for images to be ready to show the grid
    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: "blur(10px)" }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          }
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
  }, [grid, stagger, animateFrom, blurToFocus, duration, ease, isMounted]);

  const handleMouseEnter = (id, element) => {
    if (!isMounted) return;

    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id, element) => {
    if (!isMounted) return;

    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  // Calculate container height based on grid
  const containerHeight = useMemo(() => {
    if (!grid.length) return 0;
    return Math.max(...grid.map((item) => item.y + item.h));
  }, [grid]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white"
      style={{ height: containerHeight || "auto", minHeight: "100px" }}
    >
      {isMounted &&
        grid.map((item) => (
          <div
            key={item.id}
            data-key={item.id}
            className="absolute box-content cursor-pointer"
            style={{
              willChange: "transform, width, height, opacity",
              // Set initial position to prevent layout shift
              transform: `translate3d(${item.x}px, ${item.y}px, 0)`,
              width: item.w,
              height: item.h,
            }}
            onClick={() => window.open(item.url, "_blank", "noopener")}
            onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
          >
            <div
              className="relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {colorShiftOnHover && (
                <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

// Main App Component with sample data
const App = () => {
  const items = [
    {
      id: "1",
      img: "/assets/services/Hydrogen-RNG-Biogas-Top-Banner.jpg",
      url: "",
      height: 400,
    },
    {
      id: "2",
      img: "/assets/services/Texas-Pasadena.webp",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "/assets/services/SiemensIndustry-1.jpg",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: "/assets/gallery/slider-1-2.webp",
      url: "https://example.com/four",
      height: 350,
    },
    {
      id: "5",
      img: "/assets/gallery/slider-1-3.webp",
      url: "https://example.com/five",
      height: 500,
    },
    {
      id: "6",
      img: "/assets/gallery/stall-image.webp",
      url: "https://example.com/six",
      height: 300,
    },
    {
      id: "7",
      img: "/assets/gallery/visit-us-3.jpg",
      url: "https://example.com/seven",
      height: 450,
    },
    {
      id: "8",
      img: "/assets/gallery/start-up.jpg",
      url: "https://example.com/eight",
      height: 400,
    },
    {
      id: "9",
      img: "/assets/gallery/training-facilities.jpg",
      url: "https://example.com/nine",
      height: 350,
    },
    {
      id: "10",
      img: "/assets/gallery/visit-us-1.jpg",
      url: "https://example.com/ten",
      height: 500,
    },
    {
      id: "11",
      img: "/assets/gallery/visit-us-2.jpg",
      url: "https://example.com/eleven",
      height: 400,
    },
    {
      id: "12",
      img: "/assets/gallery/training-facilities-2.jpg",
      url: "https://example.com/twelve",
      height: 300,
    },
  ];

  return (
    <div className="w-full min-h-screen p-4 bg-white">
      <h1 className="relative flex text-3xl justify-center font-bold text-black mb-6">
        Reddhi Benani
      </h1>
      <hr className="w-16 h-1 border-black mb-8 mx-auto" />
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </div>
  );
};

export default App;
