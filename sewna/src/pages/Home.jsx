import { Link } from 'react-router-dom'
import image_one from '../assets/images/image_one.jpeg'
import image_two from '../assets/images/image_two.jpeg'
import image_three from '../assets/images/image_three.jpeg'
import image_four from '../assets/images/image_four.jpeg'
import image_five from '../assets/images/image_five.jpeg'
import image_six from '../assets/images/image_six.jpeg'

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

        {/* Right Column - Image Grid */}
        <div className="flex-1 relative lg:min-h-[calc(100vh-120px)] flex items-start justify-end p-6 md:p-8 lg:p-10">
          {/* Image Grid Container - Positioned in top-right corner */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
            {/* Image 1 */}
            <div className="relative overflow-hidden rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10">
              <img 
                src={image_one} 
                alt="Fashion design 1" 
                className="w-[120px] h-[150px] md:w-[150px] md:h-[180px] lg:w-[180px] lg:h-[220px] object-cover"
              />
            </div>
            
            {/* Image 2 */}
            <div className="relative overflow-hidden rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10">
              <img 
                src={image_two} 
                alt="Fashion design 2" 
                className="w-[120px] h-[150px] md:w-[150px] md:h-[180px] lg:w-[180px] lg:h-[220px] object-cover"
              />
            </div>
            
            {/* Image 3 */}
            <div className="relative overflow-hidden rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10">
              <img 
                src={image_three} 
                alt="Fashion design 3" 
                className="w-[120px] h-[150px] md:w-[150px] md:h-[180px] lg:w-[180px] lg:h-[220px] object-cover"
              />
            </div>
            
            {/* Image 4 */}
            <div className="relative overflow-hidden rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10">
              <img 
                src={image_four} 
                alt="Fashion design 4" 
                className="w-[120px] h-[150px] md:w-[150px] md:h-[180px] lg:w-[180px] lg:h-[220px] object-cover"
              />
            </div>
            
            {/* Image 5 */}
            <div className="relative overflow-hidden rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10">
              <img 
                src={image_five} 
                alt="Fashion design 5" 
                className="w-[120px] h-[150px] md:w-[150px] md:h-[180px] lg:w-[180px] lg:h-[220px] object-cover"
              />
            </div>
            
            {/* Image 6 */}
            <div className="relative overflow-hidden rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-10">
              <img 
                src={image_six} 
                alt="Fashion design 6" 
                className="w-[120px] h-[150px] md:w-[150px] md:h-[180px] lg:w-[180px] lg:h-[220px] object-cover"
              />
            </div>
          </div>
          
          {/* Green lighting effect overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 80% 20%, rgba(0, 182, 127, 0.15) 0%, rgba(0, 125, 90, 0.1) 40%, transparent 70%)'
            }}
          />
        </div>
      </main>
    </div>
  )
}

export default Home

