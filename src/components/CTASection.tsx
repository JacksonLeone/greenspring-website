import React from 'react';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Let's Talk About Your Business</h2>
          <p>If you'd like an experienced perspective on your biggest opportunities and challenges, I offer a short introductory call to discuss how I may be able to help.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary btn-large">Schedule a 15-Minute Intro Call</a>
            <a href="/services" className="btn btn-outline btn-large">Explore Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}
