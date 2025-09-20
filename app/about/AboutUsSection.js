'use client'

export default function AboutUsSection() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-tight">
            About <span className="italic">Us</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
            <p>
              We&apos;re a strategy-first studio that believes branding 
              should feel like a conversation — not a pitch.
            </p>
            
            <p>
              Our work is built on a mix of deep thinking, sharp 
              instincts, and human behaviour. We use brain science, 
              creative strategy, and a little sass to turn scattered 
              ideas into brand clarity.
            </p>
          </div>
        </div>

        {/* Right Brain Visual */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Purple gradient background card */}
            <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-3xl flex items-center justify-center shadow-2xl">
              
              {/* Brain illustration */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                
                {/* Main brain structure */}
                <div className="relative w-56 h-40 transform rotate-12">
                  {/* Brain base */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-full shadow-lg">
                    {/* Brain folds and details */}
                    <div className="absolute inset-2 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full opacity-90"></div>
                    <div className="absolute inset-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-full opacity-80"></div>
                    
                    {/* Brain surface details */}
                    <div className="absolute top-4 left-8 w-16 h-8 bg-gray-400 rounded-full opacity-70 transform -rotate-12"></div>
                    <div className="absolute top-8 right-6 w-12 h-6 bg-gray-400 rounded-full opacity-70 transform rotate-6"></div>
                    <div className="absolute bottom-6 left-12 w-14 h-6 bg-gray-400 rounded-full opacity-70 transform rotate-12"></div>
                  </div>
                </div>

                {/* Neural connections/stems */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  {/* Multiple flowing lines */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 bg-gradient-to-b from-purple-300 to-purple-500 rounded-full opacity-80"
                      style={{
                        height: `${60 + i * 8}px`,
                        left: `${(i - 4) * 8}px`,
                        transform: `rotate(${(i - 4) * 5}deg)`,
                        transformOrigin: 'top center'
                      }}
                    />
                  ))}
                </div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
