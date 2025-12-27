import React from 'react'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title="About - GreenSpring Business Transformation">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About <span className="gradient-text">GreenSpring</span></h1>
            <p className="hero-subtitle">Transforming businesses through strategic thinking, proven methodologies, and sustainable growth practices.</p>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="personal-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img src="./images/john-leone-linkedin.jpeg" alt="John Leone - Founder of GreenSpring" className="profile-image-large" />
            </div>
            <div className="story-content">
              <h2>Meet Your Strategic Partner</h2>
              <div className="story-text">
                <p className="lead">With over 20 years of experience driving growth in beverage, hospitality, and commercial strategy, I founded GreenSpring to help visionary leaders unlock their organization's full potential through proven operational and marketing excellence.</p>
                
                <p>My journey began in the beverage and hospitality industry, where I achieved remarkable results including over 600% revenue growth in beverage operations, launched St. Maarten's first craft brewery (Pelikaan Brewery), and led commercial strategy for global brands like Heineken across Caribbean and international markets.</p>
                
                <p>From reimagining the historic Seaview Beach Hotel into a modern hospitality concept to producing major events like the St. Maarten Heineken Regatta, I've learned that sustainable growth comes from connecting business strategy with consumer passion. This approach combines operational excellence with creative brand building and strategic marketing.</p>
                
                <p>When I'm not working with clients, you'll find me passionate about art, sports, beer, writing, and crafting memorable experiences that move people. I bring this same passion for creating impactful stories to every business transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy">
        <div className="container">
          <div className="section-header">
            <h2>My Approach to Business Transformation</h2>
            <p>Proven principles that drive sustainable results</p>
          </div>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <div className="philosophy-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <h3>Systems Thinking</h3>
              <p>Every business challenge is interconnected. I focus on understanding the whole system before optimizing individual components, ensuring changes create lasting impact rather than temporary fixes.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <h3>Data-Driven Decisions</h3>
              <p>Intuition guides us, but data validates our path. Every recommendation is backed by thorough analysis and measurable metrics that track progress toward your goals.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <h3>Sustainable Growth</h3>
              <p>Quick fixes create quick failures. I design strategies and systems that scale with your organization, building capabilities that continue delivering value long after our engagement.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <h3>Leadership Development</h3>
              <p>Great strategies require great execution, and great execution requires strong leadership. I invest in developing your team's capabilities alongside strategic initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="credentials-section">
        <div className="container">
          <div className="credentials-grid">
            <div className="credentials-content">
              <h2>Credentials & Experience</h2>
              <div className="credential-list">
                <div className="credential-item-large">
                  <div className="credential-icon">
                    <div className="icon-circle gradient-bg"></div>
                  </div>
                  <div className="credential-details">
                    <h4>Bachelor of Science, Business Administration</h4>
                    <p>University of Connecticut School of Business</p>
                  </div>
                </div>
                <div className="credential-item-large">
                  <div className="credential-icon">
                    <div className="icon-circle gradient-bg"></div>
                  </div>
                  <div className="credential-details">
                    <h4>Executive Management Course</h4>
                    <p>INSEAD</p>
                  </div>
                </div>
                <div className="credential-item-large">
                  <div className="credential-icon">
                    <div className="icon-circle gradient-bg"></div>
                  </div>
                  <div className="credential-details">
                    <h4>Executive Management Course</h4>
                    <p>Harvard University</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-content">
              <h2>Key Achievements</h2>
              <div className="achievement-list">
                <div className="achievement-item">
                  <div className="achievement-number">
                    <span className="gradient-text">20+</span>
                  </div>
                  <div className="achievement-text">
                    <h4>Years of Experience</h4>
                    <p>Leading growth initiatives across global markets</p>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-number">
                    <span className="gradient-text">600%</span>
                  </div>
                  <div className="achievement-text">
                    <h4>Revenue Growth Achieved</h4>
                    <p>Maximum growth in beverage operations</p>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-number">
                    <span className="gradient-text">15+</span>
                  </div>
                  <div className="achievement-text">
                    <h4>Years Running GreenSpring</h4>
                    <p>Providing strategic solutions since 2010</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>The GreenSpring Mission</h2>
              <p className="lead">To empower visionary leaders with the strategic insights, operational excellence, and growth systems needed to build sustainable, impactful organizations—drawing from proven experience across global markets and diverse industries.</p>
              <p>Having led initiatives from launching craft breweries to managing commercial strategy for international brands, I understand that every business has unique potential for transformation. My role is to unlock that potential through hands-on partnership, proven methodologies, and strategic thinking that delivers measurable results.</p>
              <div className="mission-values">
                <div className="value-item">
                  <strong>Integrity:</strong> Honest assessments and transparent communication
                </div>
                <div className="value-item">
                  <strong>Excellence:</strong> Delivering exceptional results through rigorous standards
                </div>
                <div className="value-item">
                  <strong>Partnership:</strong> Working alongside you, not just for you
                </div>
                <div className="value-item">
                  <strong>Innovation:</strong> Bringing fresh perspectives to complex challenges
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <img src="./images/seaview-linkedin-banner.jpeg" alt="Professional workspace" className="mission-image" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss your challenges and explore how GreenSpring can help you achieve your growth objectives.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Schedule Free Consultation</button>
              <a href="/services" className="btn btn-outline btn-large">Explore Services</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}