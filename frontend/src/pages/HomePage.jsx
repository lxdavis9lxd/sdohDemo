import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  const [sdohData, setSdohData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/sdoh')
      .then(res => res.json())
      .then(data => {
        setSdohData(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching SDOH data:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="home-page">
      <header className="header">
        <h1>Social Determinants of Health</h1>
        <p className="subtitle">Understanding the factors that influence health outcomes</p>
      </header>

      <div className="sdoh-diagram">
        <div className="diagram-title">
          <h2>SDOH Framework</h2>
          <p>Click on any area to learn more</p>
        </div>
        
        <div className="chevron-container">
          {sdohData.map((category, index) => (
            <Link 
              key={category.id} 
              to={`/category/${category.id}`}
              className="chevron-link"
              style={{ 
                backgroundColor: category.color,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="chevron-content">
                <span className="chevron-icon">{category.icon}</span>
                <span className="chevron-title">{category.title}</span>
              </div>
              <div className="chevron-arrow">›</div>
            </Link>
          ))}
        </div>
      </div>

      <section className="info-section">
        <h2>What are Social Determinants of Health?</h2>
        <p>
          Social determinants of health (SDOH) are the conditions in the environments where people 
          are born, live, learn, work, play, worship, and age that affect a wide range of health, 
          functioning, and quality-of-life outcomes and risks.
        </p>
        <p>
          These factors have a significant impact on health outcomes and are often more influential 
          than healthcare itself. Understanding and addressing SDOH is crucial for improving health 
          equity and population health.
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 SDOH Demo | Built with React & Express</p>
      </footer>
    </div>
  )
}

export default HomePage
