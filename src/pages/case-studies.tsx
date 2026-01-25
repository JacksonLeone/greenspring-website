import React from 'react'
import Layout from '../components/Layout'
import CTASection from '../components/CTASection'
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
                <span className="case-industry">Beverage & Distribution</span>
                <span className="case-size">Caribbean Markets</span>
              </div>
              <h2>Heineken & ILTT Commercial Integration</h2>
              <p className="case-subtitle">Strategic integration of two organizations into a unified commercial platform across multiple Caribbean markets</p>
            </div>
            
            <div className="case-content">
              <div className="case-challenge">
                <h3>The Challenge</h3>
                <p>Following a strategic market shift, Heineken and International Liquor & Tobacco Trading (ILTT) required integration into a single commercial organization while maintaining momentum and continuing revenue growth during the transition.</p>
                <div className="challenge-points">
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Aligning sales teams and incentive structures</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Harmonizing pricing and portfolio strategy</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Balancing brand standards with local market realities</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Maintaining revenue growth during organizational change</span>
                  </div>
                </div>
              </div>
              
              <div className="case-solution">
                <h3>What I Did</h3>
                <p>As Commercial Director, I led the comprehensive integration by designing and implementing unified commercial structures while maintaining operational momentum.</p>
                <div className="solution-phases">
                  <div className="phase-item">
                    <div className="phase-number">01</div>
                    <div className="phase-content">
                      <h4>Commercial Structure</h4>
                      <p>Designed and implemented unified commercial organization across markets</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <div className="phase-number">02</div>
                    <div className="phase-content">
                      <h4>Team Integration</h4>
                      <p>Aligned teams, KPIs, and incentive programs while integrating pricing and promotions</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <div className="phase-number">03</div>
                    <div className="phase-content">
                      <h4>Execution Excellence</h4>
                      <p>Strengthened distributor execution and cross-functional collaboration</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="case-results">
                <h3>The Results</h3>
                <div className="challenge-points">
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Successful integration of two organizations into a single commercial platform</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Improved portfolio focus and execution across multiple islands</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Sustained revenue growth and increased operational clarity</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>A scalable commercial model that supported long-term expansion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="case-study">
            <div className="case-header">
              <div className="case-meta">
                <span className="case-industry">Event Management</span>
                <span className="case-size">International Scale</span>
              </div>
              <h2>St. Maarten Heineken Regatta – Event Leadership & Brand Activation</h2>
              <p className="case-subtitle">20+ years leading one of the Caribbean's most recognized international sporting and entertainment events</p>
            </div>
            
            <div className="case-content">
              <div className="case-challenge">
                <h3>The Challenge</h3>
                <p>Deliver a large-scale, multi-day international event combining world-class sailing, live entertainment, and global brand partnerships while meeting global standards and continuing to grow relevance year after year.</p>
                <div className="challenge-points">
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Meeting global brand standards consistently</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Engaging diverse local and international audiences</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Operating safely in complex island environment</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Delivering commercial value to sponsors</span>
                  </div>
                </div>
              </div>
              
              <div className="case-solution">
                <h3>What I Did</h3>
                <p>For over 20 years, I led comprehensive event production, strategic direction, and stakeholder coordination while serving as Chairman of the event.</p>
                <div className="solution-phases">
                  <div className="phase-item">
                    <div className="phase-number">01</div>
                    <div className="phase-content">
                      <h4>Event Production</h4>
                      <p>Produced large-scale entertainment and on-shore activations with world-class execution</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <div className="phase-number">02</div>
                    <div className="phase-content">
                      <h4>Brand Integration</h4>
                      <p>Led sponsorship integration and brand programming across all event elements</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <div className="phase-number">03</div>
                    <div className="phase-content">
                      <h4>Strategic Leadership</h4>
                      <p>Guided strategic direction and used platform for community engagement</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="case-results">
                <h3>The Results</h3>
                <div className="challenge-points">
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Consistent delivery of a world-class international event</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Strong sponsor retention and brand alignment</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Significant economic and cultural impact for the island</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Long-term growth of the event's global profile and local relevance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="case-study">
            <div className="case-header">
              <div className="case-meta">
                <span className="case-industry">Hospitality</span>
                <span className="case-size">Historic Property</span>
              </div>
              <h2>Historic Beachfront Hotel Relaunch – St. Maarten</h2>
              <p className="case-subtitle">Complete transformation of 75-year-old historic beachfront property into modern, market-relevant hospitality experience</p>
            </div>
            
            <div className="case-content">
              <div className="case-challenge">
                <h3>The Challenge</h3>
                <p>A 75-year-old historic beachfront hotel required a full relaunch to remain relevant in a changing hospitality market while respecting its legacy and maintaining its important community role.</p>
                <div className="challenge-points">
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Refreshing identity and market positioning</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Creating new revenue streams beyond room nights</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Improving operations and guest experience</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Creating cohesive vision across all property elements</span>
                  </div>
                </div>
              </div>
              
              <div className="case-solution">
                <h3>What I Did</h3>
                <p>I led the complete relaunch by reimagining the hotel concept, developing new brand identity, and creating integrated hospitality experiences across all property elements.</p>
                <div className="solution-phases">
                  <div className="phase-item">
                    <div className="phase-number">01</div>
                    <div className="phase-content">
                      <h4>Brand Reimagination</h4>
                      <p>Reimagined hotel concept and redesigned complete visual identity system</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <div className="phase-number">02</div>
                    <div className="phase-content">
                      <h4>Experience Development</h4>
                      <p>Developed new retail, F&B, and event concepts with experiential programming</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <div className="phase-number">03</div>
                    <div className="phase-content">
                      <h4>Integrated Strategy</h4>
                      <p>Aligned marketing, operations, and commercial strategy into cohesive model</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="case-results">
                <h3>The Results</h3>
                <div className="challenge-points">
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Reenergized a legacy property with a modern, market-relevant identity</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Improved guest engagement and dwell time</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>Expanded revenue streams through food, beverage, retail, and events</span>
                  </div>
                  <div className="challenge-point">
                    <div className="point-icon">
                      <div className="icon-circle"></div>
                    </div>
                    <span>A sustainable operational model grounded in experience-driven hospitality</span>
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
              <p className="testimonial-text">"The commercial integration John led was seamless and resulted in sustained growth across all our Caribbean markets. His strategic vision and execution capabilities are outstanding."</p>
              <div className="testimonial-author">
                <strong>Regional Marketing Manager</strong>
                <span>Heineken Caribbean</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-text">"Under John's leadership as Chairman, the St. Maarten Heineken Regatta has become one of the Caribbean's premier international events. His ability to balance brand excellence with local community impact is remarkable."</p>
              <div className="testimonial-author">
                <strong>Event Stakeholder</strong>
                <span>St. Maarten Heineken Regatta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  )
}