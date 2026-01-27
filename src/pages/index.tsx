import Layout from '../components/Layout'
import CTASection from '../components/CTASection'
import Link from 'next/link'
import { getImagePath } from '../utils/imagePath'
import { homeContent } from '../content/home'

export default function Home() {
  const { hero, intro, helpWith, why, how, who } = homeContent
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">{hero.title} <span className="gradient-text">{hero.titleHighlight}</span></h1>
            <p className="hero-subtitle">{hero.subtitle}</p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">{hero.primaryButton}</Link>
              <Link href="/about" className="btn btn-secondary">{hero.secondaryButton}</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="circle-animation">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <img src={getImagePath('images/john-leone-linkedin.jpeg')} alt="John Leone - GreenSpring Founder" className="profile-image" />
            <p className="intro-lead">{intro.lead}</p>
          </div>
        </div>
      </section>

      {/* What I Help With Section */}
      <section className="help-with-section">
        <div className="container">
          <div className="section-header">
            <h2>{helpWith.title}</h2>
          </div>
          <div className="help-content">
            <p className="section-intro">{helpWith.intro}</p>
            <div className="help-grid">
              {helpWith.items.map((item, index) => (
                <div key={index} className="help-item">
                  <div className="help-icon">
                    <div className="icon-circle gradient-bg"></div>
                  </div>
                  <p><strong>{item.title}</strong> {item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <h2>{why.title}</h2>
          </div>
          <div className="why-content">
            <p className="why-intro">{why.intro}</p>
            
            <p className="why-subheading">{why.subheading}</p>
            <ul className="why-list">
              {why.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <div className="why-closing">
              <p>{why.closing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="how-section">
        <div className="container">
          <div className="section-header">
            <h2>{how.title}</h2>
          </div>
          <div className="how-content">
            <p className="section-intro">{how.intro}</p>
            <div className="how-steps">
              {how.steps.map((step, index) => (
                <div key={index} className="how-step">
                  <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With Section */}
      <section className="who-section">
        <div className="container">
          <div className="section-header">
            <h2>{who.title}</h2>
          </div>
          <div className="who-content">
            <p className="section-intro">{who.intro}</p>
            <div className="who-grid">
              {who.items.map((item, index) => (
                <div key={index} className="who-item">
                  <div className="who-icon">
                    <div className="icon-circle"></div>
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            
            <div className="who-closing">
              <p>{who.closing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  )
}