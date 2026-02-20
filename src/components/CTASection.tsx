import React from 'react';
import { homeContent } from '../content/home'

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Let’s Move Forward, Today!</h2>
          <p>We are ready to help you and your organization to create clarity, align execution, and achieve meaningful growth, let’s start the conversation, today!</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary btn-large">{homeContent.hero.primaryButton}</a>
            <a href="/services" className="btn btn-outline btn-large">{homeContent.hero.secondaryButton}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
