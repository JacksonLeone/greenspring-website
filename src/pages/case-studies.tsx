import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function CaseStudies() {
  return (
    <Layout title="Case Studies - GreenSpring Success Stories">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Proven <span className="gradient-text">Results</span></h1>
            <p className="hero-subtitle">Real transformations, measurable outcomes, and lasting impact for forward-thinking organizations.</p>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="results-overview">
        <div className="container">
          <div className="overview-content">
            <h2>Transformations That Matter</h2>
            <p className="lead">Every engagement is unique, but the results speak for themselves. Here's how GreenSpring partnerships have driven sustainable growth and operational excellence.</p>
            
            <div className="results-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <div className="icon-circle gradient-bg"></div>
                </div>
                <div className="stat-content">
                  <div className="stat-number gradient-text">150%</div>
                  <div className="stat-label">Average Revenue Growth</div>
                  <div className="stat-detail">Within 18 months of engagement</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <div className="icon-circle gradient-bg"></div>
                </div>
                <div className="stat-content">
                  <div className="stat-number gradient-text">35%</div>
                  <div className="stat-label">Cost Reduction</div>
                  <div className="stat-detail">Through operational optimization</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <div className="icon-circle gradient-bg"></div>
                </div>
                <div className="stat-content">
                  <div className="stat-number gradient-text">95%</div>
                  <div className="stat-label">Client Satisfaction</div>
                  <div className="stat-detail">Would recommend to peers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies">
        <div className="container">
          {/* Case Study 1 */}
          <div className="case-study">
            <div className="case-header">
              <div className="case-meta">
                <span className="case-industry">Technology Consulting</span>
                <span className="case-size">50-100 employees</span>
              </div>
              <h2>TechVision Solutions: From $2M to $8M in 18 Months</h2>
              <p className="case-subtitle">Strategic planning and operational transformation drive 300% revenue growth</p>
            </div>
            
            <div className="case-content">
              <div className="case-challenge">
                <h3>The Challenge</h3>
                <p>TechVision Solutions had strong technical capabilities but lacked strategic direction and scalable operations. Revenue had plateaued at $2M annually, and the leadership team was overwhelmed by day-to-day firefighting instead of focusing on growth opportunities.</p>
                <div className="challenge-points">
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>No clear strategic vision or market positioning</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Inefficient operations and resource allocation</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Leadership team lacking alignment and focus</span>
                  </div>
                </div>
              </div>
              
              <div className="case-solution">
                <h3>The Solution</h3>
                <p>We implemented a comprehensive transformation focusing on strategic clarity, operational efficiency, and leadership development over 12 months.</p>
                <div className="solution-phases">
                  <div className="phase-item">
                    <div className="phase-number">01</div>
                    <div className="phase-content">
                      <h4>Strategic Positioning</h4>
                      <p>Developed clear value proposition and market positioning in high-growth vertical markets</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <div className="phase-number">02</div>
                    <div className="phase-content">
                      <h4>Operations Overhaul</h4>
                      <p>Streamlined project delivery processes and implemented scalable systems</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <div className="phase-number">03</div>
                    <div className="phase-content">
                      <h4>Leadership Alignment</h4>
                      <p>Established clear roles, responsibilities, and decision-making frameworks</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="case-results">
                <h3>The Results</h3>
                <div className="results-grid">
                  <div className="result-metric">
                    <div className="metric-value gradient-text">300%</div>
                    <div className="metric-description">Revenue Growth<br />($2M to $8M)</div>
                  </div>
                  <div className="result-metric">
                    <div className="metric-value gradient-text">18</div>
                    <div className="metric-description">Months to<br />Achieve Results</div>
                  </div>
                  <div className="result-metric">
                    <div className="metric-value gradient-text">45%</div>
                    <div className="metric-description">Increase in<br />Profit Margins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="case-study">
            <div className="case-header">
              <div className="case-meta">
                <span className="case-industry">Manufacturing</span>
                <span className="case-size">200+ employees</span>
              </div>
              <h2>Industrial Dynamics: Operational Excellence Transformation</h2>
              <p className="case-subtitle">Process optimization and leadership development reduce costs by 40% while improving quality</p>
            </div>
            
            <div className="case-content">
              <div className="case-challenge">
                <h3>The Challenge</h3>
                <p>Industrial Dynamics faced rising operational costs, quality issues, and declining competitiveness. The company needed to modernize operations while maintaining production quality and employee engagement.</p>
                <div className="challenge-points">
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Outdated processes leading to waste and inefficiency</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Quality control issues affecting customer satisfaction</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Lack of leadership development and team alignment</span>
                  </div>
                </div>
              </div>
              
              <div className="case-solution">
                <h3>The Solution</h3>
                <p>Implemented lean manufacturing principles, quality management systems, and comprehensive leadership development program.</p>
                <div className="solution-phases">
                  <div className="phase-item">
                    <div className="phase-number">01</div>
                    <div className="phase-content">
                      <h4>Process Mapping</h4>
                      <p>Analyzed entire production flow and identified improvement opportunities</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <div className="phase-number">02</div>
                    <div className="phase-content">
                      <h4>Lean Implementation</h4>
                      <p>Introduced lean manufacturing principles and waste reduction strategies</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <div className="phase-number">03</div>
                    <div className="phase-content">
                      <h4>Quality Systems</h4>
                      <p>Established comprehensive quality management and continuous improvement culture</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="case-results">
                <h3>The Results</h3>
                <div className="results-grid">
                  <div className="result-metric">
                    <div className="metric-value gradient-text">40%</div>
                    <div className="metric-description">Cost Reduction<br />Through Efficiency</div>
                  </div>
                  <div className="result-metric">
                    <div className="metric-value gradient-text">60%</div>
                    <div className="metric-description">Quality<br />Improvement</div>
                  </div>
                  <div className="result-metric">
                    <div className="metric-value gradient-text">25%</div>
                    <div className="metric-description">Productivity<br />Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="case-study">
            <div className="case-header">
              <div className="case-meta">
                <span className="case-industry">Professional Services</span>
                <span className="case-size">25-50 employees</span>
              </div>
              <h2>Strategic Solutions Group: Marketing & Growth Acceleration</h2>
              <p className="case-subtitle">Brand positioning and marketing strategy triple lead generation and expand market presence</p>
            </div>
            
            <div className="case-content">
              <div className="case-challenge">
                <h3>The Challenge</h3>
                <p>Strategic Solutions Group had excellent service delivery but struggled with market visibility and lead generation. They needed to differentiate from competitors and build systematic growth.</p>
                <div className="challenge-points">
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Weak brand positioning in crowded marketplace</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Inconsistent marketing efforts and messaging</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Limited digital presence and lead generation</span>
                  </div>
                </div>
              </div>
              
              <div className="case-solution">
                <h3>The Solution</h3>
                <p>Developed comprehensive brand strategy, digital marketing systems, and customer acquisition funnels over 8 months.</p>
                <div className="solution-phases">
                  <div className="phase-item">
                    <div className="phase-number">01</div>
                    <div className="phase-content">
                      <h4>Brand Strategy</h4>
                      <p>Created compelling brand positioning and messaging framework</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <div className="phase-number">02</div>
                    <div className="phase-content">
                      <h4>Digital Platform</h4>
                      <p>Built integrated website, content strategy, and social media presence</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <div className="phase-number">03</div>
                    <div className="phase-content">
                      <h4>Lead Systems</h4>
                      <p>Implemented automated lead generation and nurturing systems</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="case-results">
                <h3>The Results</h3>
                <div className="results-grid">
                  <div className="result-metric">
                    <div className="metric-value gradient-text">200%</div>
                    <div className="metric-description">Increase in<br />Qualified Leads</div>
                  </div>
                  <div className="result-metric">
                    <div className="metric-value gradient-text">150%</div>
                    <div className="metric-description">Revenue<br />Growth</div>
                  </div>
                  <div className="result-metric">
                    <div className="metric-value gradient-text">85%</div>
                    <div className="metric-description">Brand Recognition<br />Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Clients Say</h2>
            <p>Direct feedback from transformation partners</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"John is a great Director, he has a kind of authority/charm that everybody likes, this results in a structured company with a very good vibe! His expertise in operations and marketing is exceptional."</p>
              <div className="testimonial-author">
                <strong>Davina Lamberts</strong>
                <span>Co-owner & CEO, BKN-Productions</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-text">"Working with GreenSpring transformed not just our operations, but our entire approach to business. The results exceeded our expectations and continue to drive growth today."</p>
              <div className="testimonial-author">
                <strong>Michael Chen</strong>
                <span>CEO, TechVision Solutions</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-text">"The strategic clarity and operational improvements we achieved with John's guidance have been game-changing for our organization. Highly recommended."</p>
              <div className="testimonial-author">
                <strong>Sarah Martinez</strong>
                <span>President, Industrial Dynamics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Write Your Success Story?</h2>
            <p>Let's discuss how GreenSpring can help you achieve similar transformational results.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Schedule Free Consultation</button>
              <Link href="/contact" className="btn btn-outline btn-large">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}