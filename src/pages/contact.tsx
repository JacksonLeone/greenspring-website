import React from 'react'
import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout title="Contact - GreenSpring Business Consulting">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Be <span className="gradient-text">Awesome</span> Today</h1>
            <p className="hero-subtitle">Ready to unlock your organization's potential? Let's discuss your challenges and explore solutions.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Start the Conversation</h2>
              <p className="form-intro">Tell me about your business challenges and goals. I'll respond within 24 hours to discuss how GreenSpring can help.</p>
              
              <form className="contact-form" id="contactForm">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input type="text" id="company" name="company" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="industry">Industry</label>
                  <select id="industry" name="industry">
                    <option value="">Select your industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="financial">Financial Services</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="company-size">Company Size</label>
                  <select id="company-size" name="company-size">
                    <option value="">Select company size</option>
                    <option value="startup">Startup (1-10 employees)</option>
                    <option value="small">Small (11-50 employees)</option>
                    <option value="medium">Medium (51-200 employees)</option>
                    <option value="large">Large (200+ employees)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="interest">Primary Interest</label>
                  <select id="interest" name="interest">
                    <option value="">What brings you here?</option>
                    <option value="strategic">Strategic Planning</option>
                    <option value="operations">Operations Optimization</option>
                    <option value="marketing">Marketing Strategy</option>
                    <option value="leadership">Leadership Development</option>
                    <option value="turnaround">Business Turnaround</option>
                    <option value="general">General Consultation</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Tell me about your challenges and goals *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    placeholder="Describe your current situation, key challenges, and what you'd like to achieve..." 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline</label>
                  <select id="timeline" name="timeline">
                    <option value="">When would you like to start?</option>
                    <option value="immediate">Immediately</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>
                
                <button type="submit" className="btn btn-primary btn-large">Send Message</button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="contact-info">
              <h3>Get in Touch</h3>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <div className="icon-circle gradient-bg"></div>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p><a href="mailto:greenspringjohn@gmail.com">greenspringjohn@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-method">
                  <div className="contact-icon">
                      <div className="icon-circle gradient-bg"></div>
                  </div>
                  <div className="contact-details">
                      <h4>Phone</h4>
                      <p><a href="tel:+18608401409">(860) 840-1409</a></p>
                  </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <div className="icon-circle gradient-bg"></div>
                </div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <p><a href="https://linkedin.com/in/johnleone-greenspring" target="_blank" rel="noopener noreferrer">Connect with me</a></p>
                </div>
              </div>
              
              
              <div className="consultation-info">
                <h4>Free Consultation Includes:</h4>
                <ul>
                  <li>Initial assessment of your challenges</li>
                  <li>Discussion of potential solutions</li>
                  <li>Exploration of fit and engagement options</li>
                  <li>No obligation - just valuable insights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about working with GreenSpring</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do you approach each engagement?</h4>
              <p>Every engagement begins with a thorough discovery phase to understand your unique situation, challenges, and goals. I then develop customized solutions based on proven methodologies, ensuring the approach fits your organization's culture and capabilities.</p>
            </div>
            
            <div className="faq-item">
              <h4>What industries do you work with?</h4>
              <p>While my background includes extensive experience in beverage, hospitality, and consumer goods, the strategic and operational principles I use apply across industries. I've successfully worked with technology, manufacturing, professional services, and healthcare organizations.</p>
            </div>
            
            <div className="faq-item">
              <h4>How long do typical engagements last?</h4>
              <p>Engagement length varies based on scope and objectives. Strategic planning projects typically take 2-4 months, while operational transformations can extend 6-12 months. I also offer ongoing advisory relationships for continuous improvement.</p>
            </div>
            
            <div className="faq-item">
              <h4>Do you work with small businesses?</h4>
              <p>Absolutely. I work with organizations from startups to large enterprises. The key is having leadership committed to growth and improvement. Many of my most rewarding engagements have been with ambitious small and medium-sized businesses.</p>
            </div>
            
            <div className="faq-item">
              <h4>What kind of results can I expect?</h4>
              <p>While every situation is unique, my engagements typically deliver measurable improvements in revenue growth, operational efficiency, and organizational effectiveness. Most clients see initial results within 3-6 months, with sustained benefits continuing well beyond the engagement period.</p>
            </div>
            
            <div className="faq-item">
              <h4>How do you ensure implementation success?</h4>
              <p>Success requires more than good strategy—it requires effective execution. I work closely with your team throughout implementation, providing hands-on support, regular check-ins, and course corrections as needed. I also focus heavily on building internal capabilities so improvements sustain long-term.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Start the Transformation</h2>
            <p>Every great success story begins with a conversation. Let's start yours today.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Schedule Free Consultation</button>
              <a href="mailto:greenspringjohn@gmail.com" className="btn btn-outline btn-large">Send Direct Email</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}