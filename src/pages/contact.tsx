import React from 'react'
import Layout from '../components/Layout'
import CTASection from '../components/CTASection'
import { contactContent } from '../content/contact'

export default function Contact() {
  const { hero, form, contactMethods, consultation, faq } = contactContent
  
  return (
    <Layout title="Contact - GreenSpring Business Consulting">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>{hero.title} <span className="gradient-text">{hero.titleHighlight}</span> {hero.titleEnd}</h1>
            <p className="hero-subtitle">{hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>{form.heading}</h2>
              <p className="form-intro">{form.intro}</p>
              
              <form className="contact-form" id="contactForm">
                <div className="form-group">
                  <label htmlFor="name">{form.fields.name.label} {form.fields.name.required && '*'}</label>
                  <input type="text" id="name" name="name" required={form.fields.name.required} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{form.fields.email.label} {form.fields.email.required && '*'}</label>
                  <input type="email" id="email" name="email" required={form.fields.email.required} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">{form.fields.company.label} {form.fields.company.required && '*'}</label>
                  <input type="text" id="company" name="company" required={form.fields.company.required} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">{form.fields.phone.label}</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="industry">{form.fields.industry.label}</label>
                  <select id="industry" name="industry">
                    {form.fields.industry.options.map((option, index) => (
                      <option key={index} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="company-size">{form.fields.companySize.label}</label>
                  <select id="company-size" name="company-size">
                    {form.fields.companySize.options.map((option, index) => (
                      <option key={index} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="interest">{form.fields.interest.label}</label>
                  <select id="interest" name="interest">
                    {form.fields.interest.options.map((option, index) => (
                      <option key={index} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{form.fields.message.label} {form.fields.message.required && '*'}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    placeholder={form.fields.message.placeholder} 
                    required={form.fields.message.required} 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="timeline">{form.fields.timeline.label}</label>
                  <select id="timeline" name="timeline">
                    {form.fields.timeline.options.map((option, index) => (
                      <option key={index} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                
                <button type="submit" className="btn btn-primary btn-large">{form.submitButton}</button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="contact-info">
              <h3>{contactMethods.heading}</h3>
              
              {contactMethods.methods.map((method, index) => (
                <div className="contact-method" key={index}>
                  <div className="contact-icon">
                    <div className="icon-circle gradient-bg"></div>
                  </div>
                  <div className="contact-details">
                    <h4>{method.type}</h4>
                    <p>
                      <a 
                        href={method.href} 
                        {...(method.type === 'LinkedIn' ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {method.value}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="consultation-info">
                <h4>{consultation.heading}</h4>
                <ul>
                  {consultation.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
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
            <h2>{faq.heading}</h2>
            <p>{faq.subheading}</p>
          </div>
          
          <div className="faq-grid">
            {faq.items.map((item, index) => (
              <div className="faq-item" key={index}>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <CTASection />
    </Layout>
  )
}