import { Link } from 'react-router-dom'

function Home() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: '#1A1A1A',
        background: 'linear-gradient(to right, #1A1A1A 0%, #1A1A1A 50%, #003d2d 70%, #005a42 100%)'
      }}
    >
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 md:p-8">
        <h1 
          className="font-serif text-2xl md:text-3xl font-normal uppercase tracking-wide"
          style={{ color: '#00B67F' }}
        >
          SEWNA
        </h1>
        <Link 
          to="/login" 
          className="font-sans text-base md:text-lg hover:opacity-80 transition-opacity"
          style={{ color: '#D6C6A8' }}
        >
          Log In
        </Link>
      </header>

      {/* Main Content - Split Layout */}
      <main className="relative z-10 flex flex-col lg:flex-row min-h-[calc(100vh-120px)]">
        {/* Left Column - Text Content */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 xl:px-20 py-12 lg:py-0">
          {/* Headline */}
          <h2 
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight text-left"
            style={{ color: '#D6C6A8' }}
          >
            Where Creativity<br />Meets Craft.
          </h2>

          {/* Sub-headline */}
          <p 
            className="font-sans text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-left max-w-2xl"
            style={{ color: '#D6C6A8' }}
          >
            Connect with designers or share your own creations — SEWNA celebrates individuality and design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link
              to="/need-designer"
              className="px-8 py-4 font-sans text-base md:text-lg rounded-lg transition-all text-center hover:opacity-90"
              style={{
                backgroundColor: '#00B67F',
                color: '#F5F3ED'
              }}
            >
              I need a Designer
            </Link>
            <Link
              to="/am-designer"
              className="px-8 py-4 font-sans text-base md:text-lg rounded-lg transition-all text-center hover:opacity-90"
              style={{
                backgroundColor: '#00B67F',
                color: '#F5F3ED'
              }}
            >
              I am a Designer
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 relative lg:min-h-[calc(100vh-120px)]">
          {/* Image Container with Green Lighting Effect */}
          <div className="w-full h-[400px] lg:h-full relative overflow-hidden">
            {/* Placeholder Background - Replace with actual image */}
            <div 
              className="w-full h-full relative"
              style={{
                background: 'linear-gradient(to bottom right, rgba(0, 125, 90, 0.3) 0%, rgba(0, 90, 66, 0.2) 50%, #000000 100%)'
              }}
            >
              {/* Simulated green lighting effect from right */}
              <div 
                className="absolute inset-0" 
                style={{
                  background: 'radial-gradient(circle at 80% 50%, rgba(0, 182, 127, 0.4) 0%, rgba(0, 125, 90, 0.2) 30%, transparent 60%)'
                }}
              />
              {/* Additional green glow effect */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to left, transparent 0%, rgba(0, 182, 127, 0.3) 50%, transparent 100%)'
                }}
              />
              {/* Placeholder text - Remove when image is added */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-amber-400/40 text-xs md:text-sm text-center px-4">
                  Add portrait image: woman-portrait.jpg to /src/assets/
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

