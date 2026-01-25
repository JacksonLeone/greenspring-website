import React from 'react'
import Layout from '../components/Layout'
import CTASection from '../components/CTASection'
import Link from 'next/link'

export default function Services() {
  return (
    <Layout title="Services - GreenSpring Business Consulting">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1><span className="gradient-text">Services</span></h1>
            <p className="hero-subtitle">Practical Experience. Measurable Results.</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-intro">
        <div className="container">
          <div className="intro-content">
            <p className="lead">I work directly with owners and leadership teams to improve performance across marketing, operations, retail, hospitality, and events. My services are hands-on and tailored—focused on what will actually move your business forward.</p>
          </div>
        </div>
      </section>

      {/* Strategic Business & Commercial Planning */}
      <section id="strategic" className="service-detail">
        <div className="container">
          <div className="service-layout">
            <div className="service-header">
              <div className="service-icon-large">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <div className="service-title">
                <h2>Strategic Business & Commercial Planning</h2>
                <p className="service-tagline">I help businesses clarify where to focus, how to prioritize, and how to execute.</p>
              </div>
            </div>
            <div className="service-content">
              <div className="service-description">
                <h3>This includes:</h3>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Commercial strategy and growth planning</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Revenue, pricing, and portfolio optimization</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Market entry and expansion planning</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Business model evaluation and repositioning</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-outcomes">
                <p className="service-goal">The goal is simple: clear direction and actionable priorities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Strategy, Brand & Activation */}
      <section id="marketing" className="service-detail alternate">
        <div className="container">
          <div className="service-layout">
            <div className="service-header">
              <div className="service-icon-large">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <div className="service-title">
                <h2>Marketing Strategy, Brand & Activation</h2>
                <p className="service-tagline">I help brands connect strategy to real-world execution.</p>
              </div>
            </div>
            <div className="service-content">
              <div className="service-description">
                <h3>This includes:</h3>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Brand positioning and messaging</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Logo design and visual identity development or reimagination</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Merchandise lines and branded product programs</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Marketing campaigns and activation planning</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Sponsorship and partnership strategy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-outcomes">
                <p className="service-goal">Marketing should drive results—not just visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retail & Distribution Strategy */}
      <section id="retail" className="service-detail">
        <div className="container">
          <div className="service-layout">
            <div className="service-header">
              <div className="service-icon-large">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <div className="service-title">
                <h2>Retail & Distribution Strategy</h2>
                <p className="service-tagline">With experience on both sides of retail and distribution, I help businesses operate more effectively.</p>
              </div>
            </div>
            <div className="service-content">
              <div className="service-description">
                <h3>This includes:</h3>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Retail concept development and store openings</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Wholesale and Cash & Carry strategy</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Distributor and channel management</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Merchandising standards and execution</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Go-to-market and route-to-market planning</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-outcomes">
                <p className="service-goal">Execution at the shelf and in the field matters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality & Destination Development */}
      <section id="hospitality" className="service-detail alternate">
        <div className="container">
          <div className="service-layout">
            <div className="service-header">
              <div className="service-icon-large">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <div className="service-title">
                <h2>Hospitality & Destination Development</h2>
                <p className="service-tagline">I support hospitality businesses through launch, relaunch, or repositioning.</p>
              </div>
            </div>
            <div className="service-content">
              <div className="service-description">
                <h3>This includes:</h3>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Hotel, bar, restaurant, café, and beach concept development</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Guest experience and service flow design</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Food & beverage strategy and programming</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Event-driven hospitality and experiential offerings</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Operational systems and performance improvement</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-outcomes">
                <p className="service-goal">The focus is on guest experience, profitability, and consistency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations & Organizational Support */}
      <section id="operations" className="service-detail">
        <div className="container">
          <div className="service-layout">
            <div className="service-header">
              <div className="service-icon-large">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <div className="service-title">
                <h2>Operations & Organizational Support</h2>
                <p className="service-tagline">Strong operations are the foundation of sustainable performance.</p>
              </div>
            </div>
            <div className="service-content">
              <div className="service-description">
                <h3>This includes:</h3>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Operational assessments and process improvement</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>SOP development and operational structure</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Staffing models and organizational alignment</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Cross-functional coordination</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Leadership support and execution follow-through</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-outcomes">
                <p className="service-goal">Good ideas fail without strong operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Production & Brand Experiences */}
      <section id="events" className="service-detail alternate">
        <div className="container">
          <div className="service-layout">
            <div className="service-header">
              <div className="service-icon-large">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <div className="service-title">
                <h2>Event Production & Brand Experiences</h2>
                <p className="service-tagline">I design and execute events that support business goals.</p>
              </div>
            </div>
            <div className="service-content">
              <div className="service-description">
                <h3>This includes:</h3>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Large-scale event production and management</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Brand activations and experiential marketing</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Entertainment programming and logistics</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>Stakeholder and sponsor coordination</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <p>On-site execution and performance oversight</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-outcomes">
                <p className="service-goal">Events should strengthen brands and drive engagement—not just create noise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>How Engagements Typically Work</h2>
          </div>
          <div className="engagement-approach">
            <div className="approach-item">
              <div className="approach-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <p>Short-term advisory or project-based support</p>
            </div>
            <div className="approach-item">
              <div className="approach-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <p>Hands-on involvement during execution</p>
            </div>
            <div className="approach-item">
              <div className="approach-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <p>Ongoing leadership support as needed</p>
            </div>
          </div>
          <p className="engagement-note">Every engagement is tailored to the business and the moment.</p>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  )
}