import Layout from '../components/Layout'
import Link from 'next/link'
import { getImagePath } from '../utils/imagePath'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Transform Your Business for <span className="gradient-text">Sustainable Growth</span></h1>
            <p className="hero-subtitle">Expert management consulting, strategic marketing, and operational excellence solutions that drive real results for ambitious organizations in beverage, hospitality, and beyond.</p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">Schedule Consultation</Link>
              <Link href="/services" className="btn btn-secondary">Learn More</Link>
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

      {/* About Preview */}
      <section id="about-preview" className="about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={getImagePath('images/john-leone-linkedin.jpeg')} alt="John Leone - GreenSpring Founder" className="profile-image" />
            </div>
            <div className="about-content">
              <h2>Meet Your Strategic Partner</h2>
              <p className="lead">With over 20 years of experience in commercial strategy and business transformation, I help organizations unlock their potential through proven operational excellence and strategic marketing approaches.</p>
              <div className="credentials">
                <div className="credential-item">
                  <div className="credential-icon">
                    <div className="icon-circle"></div>
                  </div>
                  <span>Harvard & INSEAD Executive Education</span>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">
                    <div className="icon-circle"></div>
                  </div>
                  <span>600% Revenue Growth Achieved</span>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">
                    <div className="icon-circle"></div>
                  </div>
                  <span>Global Brand Experience (Heineken, Walmart)</span>
                </div>
              </div>
              <Link href="/about" className="btn btn-outline">Learn More About My Approach</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="services-overview">
        <div className="container">
          <div className="section-header">
            <h2>Core Services</h2>
            <p>Comprehensive solutions for sustainable business growth</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <h3>Strategic Planning</h3>
              <p>Develop clear roadmaps and actionable strategies that align with your vision and market opportunities.</p>
              <Link href="/services#strategic" className="service-link">Learn More</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <h3>Operations Optimization</h3>
              <p>Streamline processes, improve efficiency, and eliminate bottlenecks that limit your growth potential.</p>
              <Link href="/services#operations" className="service-link">Learn More</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <h3>Marketing Strategy</h3>
              <p>Build compelling brand presence and marketing systems that attract and retain your ideal customers.</p>
              <Link href="/services#marketing" className="service-link">Learn More</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <h3>Leadership Development</h3>
              <p>Strengthen leadership capabilities and build high-performing teams that execute with excellence.</p>
              <Link href="/services#leadership" className="service-link">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="results">
        <div className="container">
          <div className="section-header">
            <h2>Proven Results</h2>
            <p>Real transformations for real businesses</p>
          </div>
          <div className="results-grid">
            <div className="result-stat">
              <div className="stat-number">150%</div>
              <div className="stat-label">Average Revenue Growth</div>
            </div>
            <div className="result-stat">
              <div className="stat-number">6 Months</div>
              <div className="stat-label">Average Time to Results</div>
            </div>
            <div className="result-stat">
              <div className="stat-number">95%</div>
              <div className="stat-label">Client Satisfaction Rate</div>
            </div>
          </div>
          <div className="testimonials">
            <div className="testimonial-card">
              <p className="testimonial-text">"John is a great Director, he has a kind of authority/charm that everybody likes, this results in a structured company with a very good vibe! His expertise in operations and marketing is exceptional."</p>
              <div className="testimonial-author">
                <strong>Davina Lamberts</strong>
                <span>Co-owner & CEO, BKN-Productions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how GreenSpring can help you achieve sustainable growth and operational excellence.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">Schedule Free Consultation</Link>
              <Link href="/contact" className="btn btn-outline btn-large">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}