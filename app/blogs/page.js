"use client";

import React, { useState, useEffect } from "react";
import { Search, Calendar, User, Tag, ChevronRight, Heart, Share2, BookOpen, TrendingUp, Target, Zap } from "lucide-react";

// Marketing-focused sample blog data
const marketingBlogs = [
  {
    id: 1,
    title: "AI-Powered Marketing Automation: The Game Changer for 2025",
    excerpt: "Discover how artificial intelligence is revolutionizing marketing automation, from personalized campaigns to predictive analytics that drive unprecedented ROI.",
    content: "Artificial intelligence has become the cornerstone of modern marketing automation. In 2025, AI-powered tools are enabling marketers to create hyper-personalized campaigns that adapt in real-time to customer behavior. From chatbots with natural language processing to predictive analytics that forecast customer lifetime value, AI is transforming how we engage with audiences. This comprehensive guide explores the most impactful AI marketing tools, implementation strategies, and real-world case studies that demonstrate measurable results.",
    author: "Sarah Mitchell",
    date: "2025-10-07",
    category: "AI Marketing",
    tags: ["AI", "Automation", "Personalization"],
    readTime: "8 min read",
    likes: 156,
    featured: true
  },
  {
    id: 2,
    title: "Social Commerce Revolution: Turning Followers into Customers",
    excerpt: "Learn how leading brands are leveraging social media platforms to create seamless shopping experiences that convert engagement into sales.",
    content: "Social commerce is reshaping the customer journey, with platforms like Instagram, TikTok, and Facebook introducing sophisticated shopping features. Brands are no longer just building awareness on social media—they're closing sales directly within these platforms. This article examines successful social commerce strategies, platform-specific best practices, and the psychology behind social selling that drives purchase decisions.",
    author: "Marcus Chen",
    date: "2025-10-05",
    category: "Social Media",
    tags: ["Social Commerce", "E-commerce", "Conversion"],
    readTime: "6 min read",
    likes: 92,
    featured: true
  },
  {
    id: 3,
    title: "Voice Search Optimization: Preparing for the Spoken Web",
    excerpt: "Master the art of optimizing content for voice search as smart speakers and voice assistants reshape how consumers find information.",
    content: "Voice search is fundamentally changing SEO strategies. With over 55% of households expected to own smart speakers by 2025, optimizing for voice queries has become essential. This involves understanding natural language patterns, focusing on long-tail keywords, and creating content that answers specific questions. We'll explore technical implementation, content strategy adjustments, and measurement techniques for voice search success.",
    author: "Jennifer Liu",
    date: "2025-10-03",
    category: "SEO",
    tags: ["Voice Search", "SEO", "Content Strategy"],
    readTime: "7 min read",
    likes: 78,
    featured: false
  },
  {
    id: 4,
    title: "Data-Driven Marketing: Turning Analytics into Actionable Insights",
    excerpt: "Transform raw data into powerful marketing strategies that drive growth, improve customer experience, and maximize campaign performance.",
    content: "Data-driven marketing has evolved beyond basic analytics to sophisticated predictive modeling and real-time optimization. Modern marketers are leveraging customer data platforms, advanced attribution models, and machine learning algorithms to understand the complete customer journey. This guide covers data collection strategies, analysis frameworks, and practical implementation of insights that drive measurable business outcomes.",
    author: "David Rodriguez",
    date: "2025-10-01",
    category: "Analytics",
    tags: ["Data Analytics", "Marketing Strategy", "ROI"],
    readTime: "10 min read",
    likes: 134,
    featured: false
  },
  {
    id: 5,
    title: "Influencer Marketing Evolution: Micro vs. Macro Impact",
    excerpt: "Explore the strategic shift from celebrity endorsements to authentic micro-influencer partnerships that deliver higher engagement and ROI.",
    content: "Influencer marketing has matured from celebrity endorsements to strategic partnerships with micro and nano-influencers who deliver authentic engagement. Brands are discovering that smaller, more targeted audiences often provide better conversion rates and customer trust. This comprehensive analysis examines successful influencer strategies, partnership structures, and measurement frameworks that ensure campaign success.",
    author: "Amanda Foster",
    date: "2025-09-28",
    category: "Influencer Marketing",
    tags: ["Influencer Marketing", "Brand Partnerships", "Engagement"],
    readTime: "8 min read",
    likes: 67,
    featured: false
  },
  {
    id: 6,
    title: "Video Marketing Mastery: Short-Form Content That Converts",
    excerpt: "Harness the power of video content across platforms, from TikTok to LinkedIn, to create compelling narratives that drive customer action.",
    content: "Video content dominates social media engagement, with short-form videos leading the charge. Successful video marketing requires understanding platform-specific audiences, creating thumb-stopping content, and optimizing for mobile consumption. This guide provides practical frameworks for video strategy, production tips for limited budgets, and analytics approaches to measure video performance across multiple platforms.",
    author: "Ryan Kim",
    date: "2025-09-25",
    category: "Video Marketing",
    tags: ["Video Content", "Social Media", "Content Creation"],
    readTime: "9 min read",
    likes: 201,
    featured: false
  }
];

const categories = ["All", "AI Marketing", "Social Media", "SEO", "Analytics", "Influencer Marketing", "Video Marketing"];

const MarketingBlogPage = () => {
  const [blogs, setBlogs] = useState(marketingBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState(marketingBlogs);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [likedBlogs, setLikedBlogs] = useState(new Set());

  // Filter blogs based on category and search term
  useEffect(() => {
    let filtered = blogs;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredBlogs(filtered);
  }, [selectedCategory, searchTerm, blogs]);

  const handleLike = (blogId) => {
    const newLikedBlogs = new Set(likedBlogs);
    if (newLikedBlogs.has(blogId)) {
      newLikedBlogs.delete(blogId);
      setBlogs(blogs.map(blog => 
        blog.id === blogId ? { ...blog, likes: blog.likes - 1 } : blog
      ));
    } else {
      newLikedBlogs.add(blogId);
      setBlogs(blogs.map(blog => 
        blog.id === blogId ? { ...blog, likes: blog.likes + 1 } : blog
      ));
    }
    setLikedBlogs(newLikedBlogs);
  };

  const featuredBlogs = filteredBlogs.filter(blog => blog.featured);
  const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-white">
        {/* Blog Detail View - White Background */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <button
            onClick={() => setSelectedBlog(null)}
            className="flex items-center text-black hover:text-gray-700 mb-8 font-medium transition-colors group"
          >
            <ChevronRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </button>
          
          <article className="bg-black text-white rounded-lg overflow-hidden shadow-2xl">
            <div className="relative h-80 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
              <div className="text-center text-white px-8">
                <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Target className="w-4 h-4 mr-2" />
                  {selectedBlog.category}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  {selectedBlog.title}
                </h1>
                <div className="flex items-center justify-center space-x-6 text-gray-300">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{selectedBlog.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(selectedBlog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>{selectedBlog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-wrap gap-2">
                  {selectedBlog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white bg-opacity-10 text-white"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleLike(selectedBlog.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                      likedBlogs.has(selectedBlog.id)
                        ? 'bg-red-600 text-white'
                        : 'bg-white bg-opacity-10 text-white hover:bg-opacity-20'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedBlogs.has(selectedBlog.id) ? 'fill-current' : ''}`} />
                    <span>{selectedBlog.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white bg-opacity-10 text-white hover:bg-opacity-20 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <div className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
                  {selectedBlog.excerpt}
                </div>
                <div className="text-gray-100 leading-relaxed text-lg">
                  {selectedBlog.content}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header Section - Black Background */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-10 h-10 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">Marketing Insights</h1>
              </div>
              <p className="text-gray-300 text-xl font-light max-w-2xl">
                Strategic intelligence and actionable insights for marketing leaders driving growth in 2025
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="relative md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white text-black border-2 border-white rounded-lg focus:outline-none transition-colors placeholder-gray-500 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section - White Background */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-full font-medium transition-all text-lg ${
                  selectedCategory === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-black hover:bg-gray-200 border-2 border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section - Black Background */}
      {featuredBlogs.length > 0 && (
        <section className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-center mb-12">
              <Zap className="w-8 h-8 mr-4" />
              <h2 className="text-4xl font-bold">Featured Insights</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {featuredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white text-black rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <div className="relative h-72 bg-gradient-to-br from-black to-gray-800 flex items-center justify-center">
                    <div className="absolute top-6 right-6">
                      <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                        FEATURED
                      </span>
                    </div>
                    <div className="text-center text-white px-8">
                      <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Target className="w-4 h-4 mr-2" />
                        {blog.category}
                      </div>
                      <h3 className="text-2xl font-bold">{blog.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{blog.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {blog.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(blog.date).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {blog.readTime}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(blog.id);
                          }}
                          className={`flex items-center space-x-2 ${
                            likedBlogs.has(blog.id) ? 'text-red-600' : 'text-gray-500'
                          } hover:text-red-600 transition-colors`}
                        >
                          <Heart className={`w-5 h-5 ${likedBlogs.has(blog.id) ? 'fill-current' : ''}`} />
                          <span className="font-medium">{blog.likes}</span>
                        </button>
                        <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles Section - White Background */}
      {regularBlogs.length > 0 && (
        <section className="bg-white text-black">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold mb-12">Latest Insights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-black text-white rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group border-2 border-black"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <div className="relative h-56 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                    <div className="text-center text-white px-6">
                      <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        <Target className="w-3 h-3 mr-2" />
                        {blog.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{blog.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {blog.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(blog.date).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="flex items-center">
                        <BookOpen className="w-3 h-3 mr-1" />
                        {blog.readTime}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {blog.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block px-2 py-1 bg-white bg-opacity-10 text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(blog.id);
                          }}
                          className={`flex items-center space-x-1 ${
                            likedBlogs.has(blog.id) ? 'text-red-400' : 'text-gray-500'
                          } hover:text-red-400 transition-colors`}
                        >
                          <Heart className={`w-4 h-4 ${likedBlogs.has(blog.id) ? 'fill-current' : ''}`} />
                          <span className="text-sm">{blog.likes}</span>
                        </button>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results Section - Black Background */}
      {filteredBlogs.length === 0 && (
        <section className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center">
              <div className="text-gray-600 mb-8">
                <Search className="w-24 h-24 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold mb-4">No insights found</h3>
              <p className="text-gray-400 text-lg">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MarketingBlogPage;
