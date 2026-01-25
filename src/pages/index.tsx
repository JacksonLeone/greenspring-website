import Layout from '../components/Layout'
import CTASection from '../components/CTASection'
import Link from 'next/link'
import { getImagePath } from '../utils/imagePath'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Using Experience to Deliver <span className="gradient-text">Real Business Results</span></h1>
            <p className="hero-subtitle">I help businesses improve performance by applying real-world experience across marketing, operations, retail, hospitality, and events—turning ideas into execution and execution into results.</p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">Schedule Consultation</Link>
              <Link href="/about" className="btn btn-secondary">Learn More</Link>
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
            <div className="intro-image">
              <img src={getImagePath('images/john-leone-linkedin.jpeg')} alt="John Leone - GreenSpring Founder" className="profile-image" />
            </div>
            <div className="intro-content">
              <p className="intro-lead">From small business launches to global brands like <strong>Heineken</strong> and <strong>Walmart</strong>, I bring hands-on leadership experience to help owners and executives grow revenue, strengthen operations, and activate their brands effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Help With Section */}
      <section className="help-with-section">
        <div className="container">
          <div className="section-header">
            <h2>What I Help With</h2>
          </div>
          <div className="help-content">
            <p className="section-intro">I help businesses:</p>
            <div className="help-grid">
              <div className="help-item">
                <div className="help-icon">
                  <div className="icon-circle gradient-bg"></div>
                </div>
                <p><strong>Improve commercial performance</strong> through smarter pricing, portfolio strategy, and execution</p>
              </div>
              <div className="help-item">
                <div className="help-icon">
                  <div className="icon-circle gradient-bg"></div>
                </div>
                <p><strong>Strengthen operations</strong> with practical systems, structure, and accountability</p>
              </div>
              <div className="help-item">
                <div className="help-icon">
                  <div className="icon-circle gradient-bg"></div>
                </div>
                <p><strong>Activate their brand</strong> through marketing, events, retail, and experiential programs that drive results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Work With Me</h2>
          </div>
          <div className="why-content">
            <p className="why-intro">I don't approach your business as a consultant—I approach it as an operator.</p>
            
            <p className="why-subheading">My background includes:</p>
            <ul className="why-list">
              <li>Opening and operating retail stores (Walmart, Kohl's)</li>
              <li>Corporate marketing and brand execution (Kraft General Foods, Heineken)</li>
              <li>Distributor, wholesale, and commercial leadership across international markets</li>
              <li>Large-scale event production and brand activations (St. Maarten Heineken Regatta)</li>
              <li>Hospitality concept development and operational turnaround of a historic beachfront hotel</li>
            </ul>
            
            <div className="why-closing">
              <p>This experience allows me to quickly identify what matters, what doesn't, and where results can be unlocked fastest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="how-section">
        <div className="container">
          <div className="section-header">
            <h2>How I Work</h2>
          </div>
          <div className="how-content">
            <p className="section-intro">My approach is simple and practical:</p>
            <div className="how-steps">
              <div className="how-step">
                <div className="step-number">01</div>
                <p>Assess your business, challenges, and opportunities</p>
              </div>
              <div className="how-step">
                <div className="step-number">02</div>
                <p>Focus on the actions that will have the greatest impact</p>
              </div>
              <div className="how-step">
                <div className="step-number">03</div>
                <p>Support execution, not just planning</p>
              </div>
              <div className="how-step">
                <div className="step-number">04</div>
                <p>Measure results and adjust quickly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With Section */}
      <section className="who-section">
        <div className="container">
          <div className="section-header">
            <h2>Who I Work With</h2>
          </div>
          <div className="who-content">
            <p className="section-intro">I work with:</p>
            <div className="who-grid">
              <div className="who-item">
                <div className="who-icon">
                  <div className="icon-circle"></div>
                </div>
                <p>Small and growing businesses</p>
              </div>
              <div className="who-item">
                <div className="who-icon">
                  <div className="icon-circle"></div>
                </div>
                <p>Hospitality, retail, and beverage operators</p>
              </div>
              <div className="who-item">
                <div className="who-icon">
                  <div className="icon-circle"></div>
                </div>
                <p>Owners, boards, and leadership teams</p>
              </div>
              <div className="who-item">
                <div className="who-icon">
                  <div className="icon-circle"></div>
                </div>
                <p>Businesses preparing to launch, expand, or reposition</p>
              </div>
            </div>
            
            <div className="who-closing">
              <p>If you need clarity, structure, and execution—not theory—I can help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  )
}