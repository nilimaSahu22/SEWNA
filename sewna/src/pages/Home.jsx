import { Link } from 'react-router-dom'
import image_one from '../assets/images/image_one.jpeg'
import image_two from '../assets/images/image_two.jpeg'
import image_three from '../assets/images/image_three.jpeg'
import image_four from '../assets/images/image_four.jpeg'
import image_five from '../assets/images/image_five.jpeg'
import image_six from '../assets/images/image_six.jpeg'
import image_seven from '../assets/images/image_seven.jpeg'
import image_eight from '../assets/images/image-eight.jpeg'
import image_nine from '../assets/images/image_nine.jpeg'

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
          className="text-2xl md:text-3xl"
          style={{ 
            color: '#00B67F', 
            fontFamily: 'Pacifico, cursive', 
            fontWeight: 100,
            letterSpacing: '-0.02em'
          }}
        >
          se<span className="text-2xl md:text-3xl"
          style={{ fontSize: '1.7rem', fontFamily: 'Poppins, sans-serif', fontStyle: 'italic', letterSpacing: '0em' }}
          >WN</span><span className="text-2xl md:text-3xl"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 410, letterSpacing: '-0.02em', fontSize: '2.2rem' }}
          >a.</span>
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
              to="/am-designer"
              className="px-2 py-2 font-sans text-base md:text-lg rounded-full transition-all hover:opacity-90 flex items-center justify-between gap-4"
              style={{
                backgroundColor: '#03A776',
                color: '#D6C6A8',
                boxShadow: '0 0 20px rgba(3, 167, 118, 0.3)'
              }}
            >
              <span>I am a Designer</span>
              <div 
                className=""
                style={{
                  backgroundColor: 'rgba(214, 198, 168, 0.2)',
                  border: '1px solid rgba(214, 198, 168, 0.3)'
                }}
              />
            </Link>
            <Link
              to="/need-designer"
              className="px-2 py-2 font-sans text-base md:text-lg rounded-full transition-all hover:opacity-90 flex items-center justify-between gap-4"
              style={{
                backgroundColor: '#03A776',
                color: '#D6C6A8',
                boxShadow: '0 0 20px rgba(3, 167, 118, 0.3)'
              }}
            >
              <span>I need a Designer</span>
              <div 
                className=""
                style={{
                  backgroundColor: 'rgba(214, 198, 168, 0.2)',
                  border: '1px solid rgba(214, 198, 168, 0.3)'
                }}
              />
            </Link>
          </div>
        </div>

        {/* Right Column - Scrapbook Photo Cluster */}
        <div className="flex-1 relative lg:min-h-[calc(100vh-120px)] p-4 md:p-6 lg:p-8 xl:p-10">
          {/* Scrapbook Container - Positioned in right corner */}
          <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            
            {/* Photo 1 - Top left with border and rotation */}
            <div 
              className="absolute overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-20"
              style={{
                width: 'clamp(70px, 10vw, 130px)',
                height: 'clamp(90px, 13vw, 170px)',
                top: '5%',
                right: 'clamp(60%, 65%, 70%)',
                transform: 'rotate(-2deg)',
              }}
            >
              <div className="relative w-full h-full scrapbook-border" style={{
                padding: '3px',
              }}>
                <img 
                  src={image_one} 
                  alt="Fashion design 1" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Photo 2 - Top center with slight rotation */}
            <div 
              className="absolute overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-20"
              style={{
                width: 'clamp(75px, 11vw, 140px)',
                height: 'clamp(95px, 14vw, 180px)',
                top: '8%',
                right: 'clamp(35%, 40%, 45%)',
                transform: 'rotate(1.5deg)',
              }}
            >
              <img 
                src={image_two} 
                alt="Fashion design 2" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Photo 3 - Top right with border */}
            <div 
              className="absolute overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-20"
              style={{
                width: 'clamp(80px, 12vw, 150px)',
                height: 'clamp(100px, 15vw, 190px)',
                top: '3%',
                right: 'clamp(10%, 15%, 20%)',
                transform: 'rotate(-1deg)',
              }}
            >
              <div className="relative w-full h-full scrapbook-border" style={{
                padding: '3px',
              }}>
                <img 
                  src={image_three} 
                  alt="Fashion design 3" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Photo 4 - Middle left with rotation */}
            <div 
              className="absolute overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-20"
              style={{
                width: 'clamp(65px, 9vw, 120px)',
                height: 'clamp(85px, 12vw, 160px)',
                top: '35%',
                right: 'clamp(70%, 75%, 80%)',
                transform: 'rotate(2.5deg)',
              }}
            >
              <img 
                src={image_four} 
                alt="Fashion design 4" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Photo 5 - Center with border */}
            <div 
              className="absolute overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-20"
              style={{
                width: 'clamp(85px, 13vw, 160px)',
                height: 'clamp(105px, 16vw, 200px)',
                top: '32%',
                right: 'clamp(38%, 43%, 48%)',
                transform: 'rotate(-1.5deg)',
              }}
            >
              <div className="relative w-full h-full scrapbook-border" style={{
                padding: '3px',
              }}>
                <img 
                  src={image_five} 
                  alt="Fashion design 5" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Photo 6 - Middle right with rotation */}
            <div 
              className="absolute overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-20"
              style={{
                width: 'clamp(70px, 10vw, 135px)',
                height: 'clamp(90px, 13vw, 175px)',
                top: '38%',
                right: 'clamp(22%, 27%, 32%)',
                transform: 'rotate(1deg)',
              }}
            >
              <img 
                src={image_six} 
                alt="Fashion design 6" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Photo 7 - Bottom left with border */}
            <div 
              className="absolute overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-20"
              style={{
                width: 'clamp(75px, 11vw, 145px)',
                height: 'clamp(95px, 14vw, 185px)',
                top: '62%',
                right: 'clamp(62%, 67%, 72%)',
                transform: 'rotate(-2deg)',
              }}
            >
              <div className="relative w-full h-full scrapbook-border" style={{
                padding: '3px',
              }}>
                <img 
                  src={image_seven} 
                  alt="Fashion design 7" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Photo 8 - Bottom center */}
            <div 
              className="absolute overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-20"
              style={{
                width: 'clamp(80px, 12vw, 155px)',
                height: 'clamp(100px, 15vw, 195px)',
                top: '65%',
                right: 'clamp(42%, 47%, 52%)',
                transform: 'rotate(1.5deg)',
              }}
            >
              <img 
                src={image_eight} 
                alt="Fashion design 8" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Photo 9 - Bottom right with border */}
            <div 
              className="absolute overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-20"
              style={{
                width: 'clamp(78px, 11.5vw, 148px)',
                height: 'clamp(98px, 14.5vw, 188px)',
                top: '60%',
                right: 'clamp(18%, 23%, 28%)',
                transform: 'rotate(-1.2deg)',
              }}
            >
              <div className="relative w-full h-full scrapbook-border" style={{
                padding: '3px',
              }}>
                <img 
                  src={image_nine} 
                  alt="Fashion design 9" 
                  className="w-full h-full object-cover"
                />
              </div>
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

