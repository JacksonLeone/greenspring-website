import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Services() {
  return (
    <Layout title="Services - GreenSpring Business Consulting">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Strategic <span className="gradient-text">Services</span></h1>
            <p className="hero-subtitle">Comprehensive business transformation solutions designed to drive sustainable growth and operational excellence.</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Transforming Businesses Through Strategic Excellence</h2>
            <p className="lead">Drawing from over 20 years of experience with global brands like Heineken and Walmart, plus hands-on entrepreneurial success including 600% revenue growth, I provide customized strategies that deliver measurable results aligned with your specific goals and market context.</p>
            <div className="intro-stats">
              <div className="intro-stat">
                <div className="stat-icon">
                  <div className="icon-circle gradient-bg"></div>
                </div>
                <div className="stat-content">
                  <h4>Holistic Approach</h4>
                  <p>Strategy, operations, and leadership working in harmony</p>
                </div>
              </div>
              <div className="intro-stat">
                <div className="stat-icon">
                  <div className="icon-circle gradient-bg"></div>
                </div>
                <div className="stat-content">
                  <h4>Proven Methodologies</h4>
                  <p>Time-tested frameworks adapted to your unique situation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Planning */}
      <section id="strategic" className="service-detail">
        <div className="container">
          <div className="service-layout">
            <div className="service-header">
              <div className="service-icon-large">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <div className="service-title">
                <h2>Strategic Planning & Vision</h2>
                <p className="service-tagline">Building roadmaps for sustainable growth</p>
              </div>
            </div>
            <div className="service-content">
              <div className="service-description">
                <p className="lead">Transform your vision into actionable strategy with comprehensive planning that aligns all stakeholders and resources toward common objectives.</p>
                
                <h3>What's Included:</h3>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <h4>Market Analysis & Positioning</h4>
                      <p>Deep dive into competitive landscape, market opportunities, and strategic positioning</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <h4>Business Model Optimization</h4>
                      <p>Evaluate and refine revenue streams, value propositions, and operational models</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <h4>Strategic Roadmap Development</h4>
                      <p>Create clear, measurable milestones with timelines and resource requirements</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-outcomes">
                <h3>Expected Outcomes:</h3>
                <ul className="outcomes-list">
                  <li>Clear 3-5 year strategic vision with actionable milestones</li>
                  <li>Improved market positioning and competitive advantage</li>
                  <li>Aligned leadership team with shared strategic objectives</li>
                  <li>Resource optimization and investment prioritization</li>
                </ul>
                <div className="service-metrics">
                  <div className="metric-item">
                    <span className="metric-number gradient-text">25%</span>
                    <span className="metric-label">Average revenue growth within 12 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Optimization */}
      <section id="operations" className="service-detail alternate">
        <div className="container">
          <div className="service-layout">
            <div className="service-header">
              <div className="service-icon-large">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <div className="service-title">
                <h2>Operations Optimization</h2>
                <p className="service-tagline">Streamlining processes for maximum efficiency</p>
              </div>
            </div>
            <div className="service-content">
              <div className="service-description">
                <p className="lead">Eliminate bottlenecks, reduce waste, and optimize workflows to create lean, efficient operations that scale with your growth.</p>
                
                <h3>What's Included:</h3>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <h4>Process Mapping & Analysis</h4>
                      <p>Comprehensive review of existing workflows and identification of improvement opportunities</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <h4>Technology Integration</h4>
                      <p>Evaluate and implement tools and systems that enhance operational efficiency</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <h4>Performance Metrics & KPIs</h4>
                      <p>Establish measurement systems to track operational improvements and ROI</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-outcomes">
                <h3>Expected Outcomes:</h3>
                <ul className="outcomes-list">
                  <li>30-40% reduction in operational inefficiencies</li>
                  <li>Improved customer satisfaction through faster delivery</li>
                  <li>Enhanced team productivity and job satisfaction</li>
                  <li>Scalable systems that grow with your business</li>
                </ul>
                <div className="service-metrics">
                  <div className="metric-item">
                    <span className="metric-number gradient-text">35%</span>
                    <span className="metric-label">Average cost reduction through optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Strategy */}
      <section id="marketing" className="service-detail">
        <div className="container">
          <div className="service-layout">
            <div className="service-header">
              <div className="service-icon-large">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <div className="service-title">
                <h2>Marketing Strategy & Growth</h2>
                <p className="service-tagline">Building systems that attract and retain customers</p>
              </div>
            </div>
            <div className="service-content">
              <div className="service-description">
                <p className="lead">Develop comprehensive marketing strategies that build brand presence, generate qualified leads, and create sustainable customer acquisition systems.</p>
                
                <h3>What's Included:</h3>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <h4>Brand Strategy & Messaging</h4>
                      <p>Develop compelling brand positioning and messaging that resonates with target audiences</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <h4>Digital Marketing Systems</h4>
                      <p>Build integrated online presence including website optimization, content strategy, and social media</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <h4>Customer Acquisition Funnels</h4>
                      <p>Design and implement systematic approaches to attract, convert, and retain ideal customers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-outcomes">
                <h3>Expected Outcomes:</h3>
                <ul className="outcomes-list">
                  <li>50-75% increase in qualified lead generation</li>
                  <li>Improved brand recognition and market presence</li>
                  <li>Higher customer lifetime value and retention rates</li>
                  <li>Measurable ROI on marketing investments</li>
                </ul>
                <div className="service-metrics">
                  <div className="metric-item">
                    <span className="metric-number gradient-text">60%</span>
                    <span className="metric-label">Average increase in qualified leads</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Development */}
      <section id="leadership" className="service-detail alternate">
        <div className="container">
          <div className="service-layout">
            <div className="service-header">
              <div className="service-icon-large">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <div className="service-title">
                <h2>Leadership Development</h2>
                <p className="service-tagline">Building high-performing teams and leaders</p>
              </div>
            </div>
            <div className="service-content">
              <div className="service-description">
                <p className="lead">Strengthen leadership capabilities at all levels to create a culture of excellence, accountability, and continuous improvement.</p>
                
                <h3>What's Included:</h3>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <h4>Leadership Assessment & Development</h4>
                      <p>Evaluate current leadership capabilities and create personalized development plans</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <h4>Team Performance Optimization</h4>
                      <p>Build cohesive, high-performing teams with clear roles, responsibilities, and accountability</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <div className="feature-content">
                      <h4>Change Management</h4>
                      <p>Develop capabilities to lead organizational change and transformation initiatives</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-outcomes">
                <h3>Expected Outcomes:</h3>
                <ul className="outcomes-list">
                  <li>Enhanced leadership effectiveness and decision-making</li>
                  <li>Improved employee engagement and retention</li>
                  <li>Stronger organizational culture and alignment</li>
                  <li>Increased capacity for growth and change</li>
                </ul>
                <div className="service-metrics">
                  <div className="metric-item">
                    <span className="metric-number gradient-text">40%</span>
                    <span className="metric-label">Improvement in team performance metrics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>My Proven Process</h2>
            <p>A systematic approach that ensures successful outcomes</p>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Discovery & Assessment</h3>
                <p>Comprehensive analysis of current state, challenges, and opportunities through stakeholder interviews, data analysis, and market research.</p>
                <span className="step-duration">2-4 weeks</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Strategy Development</h3>
                <p>Collaborative creation of customized solutions and strategic roadmaps based on assessment findings and organizational goals.</p>
                <span className="step-duration">2-3 weeks</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Implementation Planning</h3>
                <p>Detailed project plans with timelines, resources, milestones, and success metrics to ensure smooth execution.</p>
                <span className="step-duration">1-2 weeks</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Execution & Support</h3>
                <p>Hands-on implementation support with regular check-ins, progress monitoring, and course corrections as needed.</p>
                <span className="step-duration">Ongoing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how these services can drive growth and excellence in your organization.</p>
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