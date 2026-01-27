import React from 'react'
import Layout from '../components/Layout'
import CTASection from '../components/CTASection'
import Link from 'next/link'
import { caseStudiesContent } from '../content/case-studies'

export default function CaseStudies() {
  const { hero, caseStudies, testimonials } = caseStudiesContent
  
  return (
    <Layout title="Case Studies - GreenSpring Success Stories">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>{hero.title} <span className="gradient-text">{hero.titleHighlight}</span></h1>
            <p className="hero-subtitle">{hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies">
        <div className="container">
          {caseStudies.map((caseStudy, index) => (
            <div className="case-study" key={caseStudy.id}>
              <div className="case-header">
                <div className="case-meta">
                  <span className="case-industry">{caseStudy.meta.industry}</span>
                  <span className="case-size">{caseStudy.meta.size}</span>
                </div>
                <h2>{caseStudy.title}</h2>
                <p className="case-subtitle">{caseStudy.subtitle}</p>
              </div>
              
              <div className="case-content">
                <div className="case-challenge">
                  <h3>The Challenge</h3>
                  <p>{caseStudy.challenge.description}</p>
                  <div className="challenge-points">
                    {caseStudy.challenge.points.map((point, pointIndex) => (
                      <div className="challenge-point" key={pointIndex}>
                        <div className="point-icon">
                          <div className="icon-circle"></div>
                        </div>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="case-solution">
                  <h3>What I Did</h3>
                  <p>{caseStudy.solution.description}</p>
                  <div className="solution-phases">
                    {caseStudy.solution.phases.map((phase, phaseIndex) => (
                      <div className="phase-item" key={phaseIndex}>
                        <div className="phase-number">{String(phaseIndex + 1).padStart(2, '0')}</div>
                        <div className="phase-content">
                          <h4>{phase.title}</h4>
                          <p>{phase.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="case-results">
                  <h3>The Results</h3>
                  <div className="challenge-points">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div className="challenge-point" key={resultIndex}>
                        <div className="point-icon">
                          <div className="icon-circle"></div>
                        </div>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>{testimonials.title}</h2>
            <p>{testimonials.subtitle}</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.items.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.title}</span>
                </div>
                {testimonial.link && (
                  <a href={testimonial.link.url} download className="testimonial-link">{testimonial.link.text}</a>
                )}
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