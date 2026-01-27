import React from 'react'
import Layout from '../components/Layout'
import CTASection from '../components/CTASection'
import Link from 'next/link'
import { servicesContent } from '../content/services'

export default function Services() {
  const { hero, intro, services, engagement } = servicesContent
  
  return (
    <Layout title="Services - GreenSpring Business Consulting">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1><span className="gradient-text">{hero.title}</span></h1>
            <p className="hero-subtitle">{hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-intro">
        <div className="container">
          <div className="intro-content">
            <p className="lead">{intro.lead}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id} 
          className={`service-detail ${index % 2 === 1 ? 'alternate' : ''}`}
        >
          <div className="container">
            <div className="service-layout">
              <div className="service-header">
                <div className="service-icon-large">
                  <div className="icon-circle gradient-bg"></div>
                </div>
                <div className="service-title">
                  <h2>{service.title}</h2>
                  <p className="service-tagline">{service.tagline}</p>
                </div>
              </div>
              <div className="service-content">
                <div className="service-description">
                  <h3>This includes:</h3>
                  <div className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <div className="feature-item" key={featureIndex}>
                        <div className="feature-icon">
                          <div className="icon-circle"></div>
                        </div>
                        <div className="feature-content">
                          <p>{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="service-outcomes">
                  <p className="service-goal">{service.goal}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>{engagement.title}</h2>
          </div>
          <div className="engagement-approach">
            {engagement.approaches.map((approach, index) => (
              <div className="approach-item" key={index}>
                <div className="approach-icon">
                  <div className="icon-circle gradient-bg"></div>
                </div>
                <p>{approach}</p>
              </div>
            ))}
          </div>
          <p className="engagement-note">{engagement.note}</p>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  )
}