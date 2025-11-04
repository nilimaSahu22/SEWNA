import { useState, useEffect } from 'react'
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

// Mock designer data
const designers = [
  {
    id: 1,
    name: 'Elena Martinez',
    tagline: 'Sustainable Couture',
    bio: 'Elena specializes in eco-friendly luxury fashion, blending traditional craftsmanship with contemporary design. Her pieces are made from ethically sourced materials.',
    portrait: image_one,
    outfits: [image_two, image_three],
  },
  {
    id: 2,
    name: 'James Chen',
    tagline: 'Modern Minimalism',
    bio: 'James creates clean, sophisticated pieces that celebrate minimalism. His designs focus on perfect cuts and timeless elegance.',
    portrait: image_four,
    outfits: [image_five, image_six],
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    tagline: 'Romantic Elegance',
    bio: 'Sophie brings French elegance to contemporary fashion. Her designs feature delicate details and flowing silhouettes.',
    portrait: image_seven,
    outfits: [image_eight, image_nine],
  },
  {
    id: 4,
    name: 'Alessandro Rossi',
    tagline: 'Bold Statements',
    bio: 'Alessandro is known for his avant-garde designs that push boundaries. Each piece tells a story and makes a statement.',
    portrait: image_one,
    outfits: [image_two, image_three],
  },
  {
    id: 5,
    name: 'Maya Patel',
    tagline: 'Cultural Fusion',
    bio: 'Maya blends traditional Indian textiles with modern Western silhouettes, creating unique pieces that celebrate cultural heritage.',
    portrait: image_four,
    outfits: [image_five, image_six],
  },
  {
    id: 6,
    name: 'David Kim',
    tagline: 'Streetwear Luxury',
    bio: 'David merges streetwear aesthetics with high-end materials and construction. His designs are both comfortable and cutting-edge.',
    portrait: image_seven,
    outfits: [image_eight, image_nine],
  },
  {
    id: 7,
    name: 'Isabella Costa',
    tagline: 'Artisanal Craft',
    bio: 'Isabella works with traditional artisans to create one-of-a-kind pieces. Each garment is a work of art.',
    portrait: image_one,
    outfits: [image_two, image_three],
  },
  {
    id: 8,
    name: 'Ryan O\'Connor',
    tagline: 'Tailored Excellence',
    bio: 'Ryan specializes in bespoke tailoring for both men and women. His attention to detail and fit is unmatched.',
    portrait: image_four,
    outfits: [image_five, image_six],
  },
  {
    id: 9,
    name: 'Nina Volkov',
    tagline: 'Avant-Garde Luxury',
    bio: 'Nina creates sculptural pieces that challenge conventional fashion. Her designs are worn by fashion-forward individuals worldwide.',
    portrait: image_seven,
    outfits: [image_eight, image_nine],
  },
]

function NeedDesigner() {
  const [selectedFilters, setSelectedFilters] = useState({
    style: null,
    occasion: null,
    budget: null,
    region: null,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDesigner, setSelectedDesigner] = useState(null)
  const [uploadedFile, setUploadedFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filterOptions = {
    style: ['All Styles', 'Minimalist', 'Bohemian', 'Classic', 'Avant-Garde', 'Streetwear'],
    occasion: ['All Occasions', 'Wedding', 'Casual', 'Formal', 'Business', 'Party'],
    budget: ['All Budgets', 'Under $500', '$500 - $1,500', '$1,500 - $3,000', '$3,000+'],
    region: ['All Regions', 'North America', 'Europe', 'Asia', 'Other'],
  }

  const getAllOptionLabel = (filterType) => {
    const labels = {
      style: 'All Styles',
      occasion: 'All Occasions',
      budget: 'All Budgets',
      region: 'All Regions',
    }
    return labels[filterType]
  }

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value === getAllOptionLabel(filterType) ? null : value,
    }))
  }

  const openModal = (designer) => {
    setSelectedDesigner(designer)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedDesigner(null)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      setUploadedFile(file)
    }
  }

  const handleFileInput = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      setUploadedFile(file)
    }
  }

  return (
    <div 
      className="min-h-screen"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      {/* Header */}
      <header 
        className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-8 lg:px-12 py-2"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <Link to="/wel">
        <h1 
          className="text-xl md:text-2xl"
          style={{ 
            color: '#00B67F', 
            fontSize: '1.8rem',
            fontFamily: 'Pacifico, cursive', 
            fontWeight: 410,
            letterSpacing: '-0.02em'
          }}
        >
          se<span className="text-xl md:text-2xl"
          style={{ fontSize: '1.3rem', fontFamily: 'Poppins, sans-serif',fontWeight: 410, fontStyle: 'italic', letterSpacing: '0em' }}
          >WN</span><span className="text-xl md:text-2xl"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 410, letterSpacing: '-0.02em', fontSize: '1.8rem' }}
          >a.</span>
        </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link 
            to="#" 
            className="text-base hover:opacity-80 transition-opacity"
            style={{ color: '#F5F3ED' }}
          >
            Discover
          </Link>
          <Link 
            to="#" 
            className="text-base hover:opacity-80 transition-opacity"
            style={{ color: '#F5F3ED' }}
          >
            About
          </Link>
          <Link 
            to="#" 
            className="text-base hover:opacity-80 transition-opacity"
            style={{ color: '#F5F3ED' }}
          >
            Help
          </Link>
        </nav>
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
          style={{ 
            backgroundColor: 'rgba(214, 198, 168, 0.2)',
            border: '1px solid #D6C6A8'
          }}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#D6C6A8" 
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 md:px-8 lg:px-12 pt-8 md:pt-12 lg:pt-16 pb-4 md:pb-6 lg:pb-8">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(0, 182, 127, 0.15) 0%, transparent 60%)'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight transition-all duration-3000 ease-out text-center ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ color: '#F5F3ED', fontFamily: 'Playfair Display, serif' }}
          >
            Find the perfect designer for your style.
          </h2>
          <p 
            className={`text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 ease-out delay-200 text-center ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ color: '#D6C6A8' }}
          >
            Browse, filter, and connect with creators who bring your ideas to life.
          </p>
          <div 
            className={`h-px w-full mt-12 transition-all duration-1000 ease-out delay-500 ${
              isVisible ? 'opacity-50 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ 
              background: 'linear-gradient(to right, transparent, #D6C6A8, transparent)',
              transformOrigin: 'center'
            }}
          />
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 md:px-8 lg:px-12 pb-4">
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
          {Object.keys(filterOptions).map((filterType) => (
            <div key={filterType} className="relative group">
              <select
                onChange={(e) => handleFilterChange(filterType, e.target.value)}
                value={selectedFilters[filterType] || getAllOptionLabel(filterType)}
                className="appearance-none px-6 py-3 pr-10 rounded-full text-base cursor-pointer transition-all outline-none"
                style={{
                  backgroundColor: 'transparent',
                  color: '#D6C6A8',
                  border: '1px solid #D6C6A8',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 20px rgba(0, 182, 127, 0.4)'
                  e.target.style.borderColor = '#00B67F'
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none'
                  e.target.style.borderColor = '#D6C6A8'
                }}
              >
                {filterOptions[filterType].map((option) => (
                  <option 
                    key={option} 
                    value={option}
                    style={{ backgroundColor: '#1A1A1A', color: '#D6C6A8' }}
                  >
                    {option}
                  </option>
                ))}
              </select>
              <div 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                style={{ color: '#D6C6A8' }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 9L1 4h10L6 9z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Designer Grid */}
      <section className="px-6 md:px-8 lg:px-12 py-2 pb-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {designers.map((designer) => (
            <div
              key={designer.id}
              onClick={() => openModal(designer)}
              className="group cursor-pointer transition-all duration-300"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: 'rgba(26, 26, 26, 0.8)',
                border: '1px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px #D6C6A8'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Designer Portrait */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={designer.portrait}
                  alt={designer.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ borderRadius: '12px 12px 0 0' }}
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(26, 26, 26, 0.3) 100%)'
                  }}
                />
              </div>

              {/* Designer Info */}
              <div className="p-6">
                <h3 
                  className="text-xl mb-2"
                  style={{ color: '#F5F3ED', fontFamily: 'Playfair Display, serif' }}
                >
                  {designer.name}
                </h3>
                <p 
                  className="text-sm mb-4"
                  style={{ color: '#D6C6A8' }}
                >
                  {designer.tagline}
                </p>

                {/* Outfit Thumbnails */}
                <div className="flex gap-2 mb-4">
                  {designer.outfits.map((outfit, idx) => (
                    <div 
                      key={idx}
                      className="flex-1 h-20 rounded overflow-hidden"
                      style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
                    >
                      <img
                        src={outfit}
                        alt={`Outfit ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* View Profile Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    openModal(designer)
                  }}
                  className="w-full py-2.5 rounded-full text-base font-medium transition-all"
                  style={{
                    backgroundColor: '#00B67F',
                    color: '#F5F3ED',
                    boxShadow: '0 0 15px rgba(0, 182, 127, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 0 25px rgba(0, 182, 127, 0.5)'
                    e.target.style.transform = 'scale(1.02)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 0 15px rgba(0, 182, 127, 0.3)'
                    e.target.style.transform = 'scale(1)'
                  }}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inspiration Upload Section */}
      <section className="px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 
                className="text-3xl md:text-4xl mb-4"
                style={{ color: '#F5F3ED', fontFamily: 'Playfair Display, serif' }}
              >
                Have a vision?
              </h3>
              <p 
                className="text-lg mb-6"
                style={{ color: '#D6C6A8' }}
              >
                Upload your inspiration to find matching designers.
              </p>
            </div>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
                isDragging ? 'opacity-80' : ''
              }`}
              style={{
                borderColor: isDragging ? '#00B67F' : '#D6C6A8',
                backgroundColor: isDragging ? 'rgba(0, 182, 127, 0.1)' : 'transparent',
              }}
            >
              {uploadedFile ? (
                <div>
                  <p style={{ color: '#F5F3ED', marginBottom: '1rem' }}>
                    {uploadedFile.name}
                  </p>
                  <button
                    onClick={() => setUploadedFile(null)}
                    className="text-sm"
                    style={{ color: '#D6C6A8' }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <>
                  <p className="mb-4" style={{ color: '#F5F3ED' }}>
                    Drag and drop your image here
                  </p>
                  <p className="text-sm mb-4" style={{ color: '#D6C6A8' }}>
                    or
                  </p>
                  <label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileInput}
                      className="hidden"
                    />
                    <span
                      className="inline-block px-6 py-3 rounded-full cursor-pointer transition-all"
                      style={{
                        backgroundColor: '#00B67F',
                        color: '#F5F3ED',
                        boxShadow: '0 0 15px rgba(0, 182, 127, 0.3)',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.boxShadow = '0 0 25px rgba(0, 182, 127, 0.5)'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.boxShadow = '0 0 15px rgba(0, 182, 127, 0.3)'
                      }}
                    >
                      Browse Files
                    </span>
                  </label>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="px-6 md:px-8 lg:px-12 py-8 border-t"
        style={{ 
          backgroundColor: '#1A1A1A',
          borderColor: '#D6C6A8',
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          opacity: 0.3
        }}
      >
        <p 
          className="text-center text-sm"
          style={{ color: '#F5F3ED' }}
        >
          © 2025 SEWNA. All rights reserved.
        </p>
      </footer>

      {/* Quick View Modal */}
      {isModalOpen && selectedDesigner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          style={{
            backgroundColor: 'rgba(26, 26, 26, 0.85)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg"
            style={{
              backgroundColor: '#1A1A1A',
              border: '2px solid #D6C6A8',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-all"
              style={{
                backgroundColor: 'rgba(214, 198, 168, 0.2)',
                color: '#D6C6A8',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 182, 127, 0.3)'
                e.target.style.color = '#00B67F'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(214, 198, 168, 0.2)'
                e.target.style.color = '#D6C6A8'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Designer Header */}
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={selectedDesigner.portrait}
                    alt={selectedDesigner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 
                    className="text-3xl mb-2"
                    style={{ color: '#F5F3ED', fontFamily: 'Playfair Display, serif' }}
                  >
                    {selectedDesigner.name}
                  </h3>
                  <p 
                    className="text-lg"
                    style={{ color: '#D6C6A8' }}
                  >
                    {selectedDesigner.tagline}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-8">
                <h4 
                  className="text-xl mb-3"
                  style={{ color: '#F5F3ED', fontFamily: 'Playfair Display, serif' }}
                >
                  About
                </h4>
                <p 
                  className="leading-relaxed"
                  style={{ color: '#D6C6A8' }}
                >
                  {selectedDesigner.bio}
                </p>
              </div>

              {/* Mini Gallery */}
              <div className="mb-8">
                <h4 
                  className="text-xl mb-4"
                  style={{ color: '#F5F3ED', fontFamily: 'Playfair Display, serif' }}
                >
                  Portfolio
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {selectedDesigner.outfits.map((outfit, idx) => (
                    <div 
                      key={idx}
                      className="relative h-48 rounded overflow-hidden"
                      style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}
                    >
                      <img
                        src={outfit}
                        alt={`Portfolio ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Send Custom Request Button */}
              <button
                className="w-full py-4 rounded-full text-lg font-medium transition-all"
                style={{
                  backgroundColor: '#00B67F',
                  color: '#F5F3ED',
                  boxShadow: '0 0 20px rgba(0, 182, 127, 0.4)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 30px rgba(0, 182, 127, 0.6)'
                  e.target.style.transform = 'scale(1.02)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 0 20px rgba(0, 182, 127, 0.4)'
                  e.target.style.transform = 'scale(1)'
                }}
              >
                Send Custom Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NeedDesigner

