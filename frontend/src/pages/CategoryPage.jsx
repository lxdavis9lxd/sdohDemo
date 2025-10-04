import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './CategoryPage.css'

function CategoryPage() {
  const { categoryId } = useParams()
  const [category, setCategory] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/sdoh/${categoryId}`)
      .then(res => res.json())
      .then(data => {
        setCategory(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching category data:', error)
        setLoading(false)
      })
  }, [categoryId])

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (!category) {
    return (
      <div className="error-page">
        <h1>Category Not Found</h1>
        <Link to="/" className="back-button">Return Home</Link>
      </div>
    )
  }

  return (
    <div className="category-page" style={{ '--category-color': category.color }}>
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <header className="category-header" style={{ backgroundColor: category.color }}>
        <div className="header-content">
          <span className="category-icon-large">{category.icon}</span>
          <h1>{category.title}</h1>
        </div>
      </header>

      <div className="category-content">
        <section className="description-section">
          <h2>Overview</h2>
          <p className="description">{category.description}</p>
        </section>

        <section className="factors-section">
          <h2>Key Factors</h2>
          <div className="factors-grid">
            {category.factors.map((factor, index) => (
              <div key={index} className="factor-card">
                <div className="factor-number">{index + 1}</div>
                <p>{factor}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="impact-section">
          <h2>Health Impact</h2>
          <div className="impact-card">
            <p>{category.impact}</p>
          </div>
        </section>

        <section className="statistics-section">
          <h2>Key Statistics</h2>
          <div className="statistics-grid">
            {category.statistics.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">📊</div>
                <p>{stat}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="action-section">
          <h2>Taking Action</h2>
          <p>Understanding these determinants is the first step toward creating healthier communities. 
          Consider how policies, programs, and personal actions can address these factors to improve 
          health outcomes for all.</p>
          <Link to="/" className="return-button">
            Explore Other Determinants →
          </Link>
        </section>
      </div>
    </div>
  )
}

export default CategoryPage
