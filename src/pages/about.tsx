import React, { useState } from 'react';
import Layout from '../components/Layout';
import TimelineItem from '../components/TimelineItem';
import { getImagePath } from '../utils/imagePath';

const careerTimeline = [
  {
    company: "Kraft General Foods",
    role: "Marketing Research",
    content: "I began in <strong>marketing research at Kraft General Foods</strong>, where I developed a strong grounding in consumer insights, brand strategy, and data-driven decision-making. This early experience shaped how I think about positioning, pricing, and how customers actually engage with products and brands."
  },
  {
    company: "Walmart",
    role: "Retail Operations Leadership",
    content: "That foundation led me into <strong>retail operations with Walmart</strong>, where I progressed through leadership roles after completing both the <strong>Walton Institute Leadership Academy</strong> and the <strong>Walmart Management Training Program</strong>. During this time, I gained deep, hands-on experience in high-volume retail operations, overseeing large teams, inventory, merchandising, logistics, safety, and compliance—learning how disciplined systems and people leadership drive consistent performance at scale."
  },
  {
    company: "Kohl's",
    role: "New Store Opening Lead",
    content: "From Walmart, I moved to <strong>Kohl's</strong>, where I served as the lead for a new store opening, overseeing team leadership, staffing, merchandising, and operational execution to ensure a successful launch."
  },
  {
    company: "Heineken - Amsterdam",
    role: "International Marketing & Brand Strategy",
    content: "My career then transitioned to the global stage with <strong>Heineken in Amsterdam</strong>, where I worked within the international organization on marketing, merchandising, and global brand execution. This role expanded my perspective from U.S. retail to international markets, export-driven business models, and cross-cultural collaboration, while providing business and commercial consultancy across six continents."
  },
  {
    company: "Heineken - Sint Maarten",
    role: "Senior Leadership",
    content: "I later joined <strong>Heineken in Sint Maarten</strong>, taking on senior leadership responsibilities across marketing, sales, logistics, and distribution. In this role, I translated global brand standards into local market success—balancing brand integrity, operational realities, and growth opportunities—while also designing and reimagining logos, visual identities, and merchandise programs, and leading brand activations that connected marketing strategy to real-world execution."
  },
  {
    company: "ILTT",
    role: "Commercial Director",
    content: "Following that, I became <strong>Commercial Director at International Liquor & Tobacco Trading (ILTT)</strong>, where Heineken and ILTT were integrated into a single commercial organization. I led the integration and expansion of beer, beverage, and spirits portfolios, aligning pricing, go-to-market strategies, incentives, and operational structures—driving significant revenue growth, portfolio diversification, and improved commercial performance across multiple island markets."
  },
  {
    company: "Cash & Carry Concept",
    role: "Development & Operations Lead",
    content: "Building on this experience, I led the development and opening of a <strong>modern Cash & Carry retail concept</strong>, integrating major global brands into a wholesale and retail operation serving both trade and consumer segments. This project combined retail operations, supplier integration, merchandising, pricing strategy, logistics, and brand execution into a scalable commercial platform."
  },
  {
    company: "St. Maarten Heineken Regatta",
    role: "Chairman & Producer (20+ Years)",
    content: "In parallel, I produced the large-scale entertainment and on-shore activations for the <strong>St. Maarten Heineken Regatta for over 20 years, serving as Chairman of the event</strong>. This role included event production, sponsorship activation, brand programming, merchandise development, and experiential marketing, delivering world-class experiences tied to one of the Caribbean's most iconic international sporting events."
  }
];

export default function About() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  return (
    <Layout title="About - GreenSpring Business Transformation">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About <span className="gradient-text">GreenSpring</span></h1>
            <p className="hero-subtitle">Transforming businesses through strategic thinking, proven methodologies, and sustainable growth practices.</p>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="personal-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img src={getImagePath('images/john-leone-linkedin.jpeg')} alt="John Leone - Founder of GreenSpring" className="profile-image-large" />
            </div>
            <div className="story-content">
              <h2>My Journey</h2>
              <div className="story-text">
                <p className="lead">My career has been shaped by <strong>building, operating, and reimagining businesses</strong> from the foundations of retail and marketing to global brands and complex hospitality environments.</p>
              </div>
              
            </div>
          </div>
        </div>
          <div className="container">
            {/* Interactive Timeline */}
            <div className="career-timeline">
              {careerTimeline.map((item, index) => (
                <TimelineItem
                  key={index}
                  company={item.company}
                  role={item.role}
                  content={item.content}
                  isExpanded={expandedCard === index}
                  isLast={index === careerTimeline.length - 1}
                  onClick={() => toggleCard(index)}
                />
              ))}
            </div>
          </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy">
        <div className="container">
          <div className="section-header">
            <h2>My Approach to Business Transformation</h2>
            <p>Proven principles that drive sustainable results</p>
          </div>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <div className="philosophy-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <h3>Systems Thinking</h3>
              <p>Every business challenge is interconnected. I focus on understanding the whole system before optimizing individual components, ensuring changes create lasting impact rather than temporary fixes.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <h3>Data-Driven Decisions</h3>
              <p>Intuition guides us, but data validates our path. Every recommendation is backed by thorough analysis and measurable metrics that track progress toward your goals.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <h3>Sustainable Growth</h3>
              <p>Quick fixes create quick failures. I design strategies and systems that scale with your organization, building capabilities that continue delivering value long after our engagement.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">
                <div className="icon-circle gradient-bg"></div>
              </div>
              <h3>Leadership Development</h3>
              <p>Great strategies require great execution, and great execution requires strong leadership. I invest in developing your team's capabilities alongside strategic initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="credentials-section">
        <div className="container">
          <div className="credentials-grid">
            <div className="credentials-content">
              <h2>Credentials & Experience</h2>
              <div className="credential-list">
                <div className="credential-item-large">
                  <div className="credential-icon">
                    <div className="icon-circle gradient-bg"></div>
                  </div>
                  <div className="credential-details">
                    <h4>Bachelor of Science, Business Administration</h4>
                    <p>University of Connecticut School of Business</p>
                  </div>
                </div>
                <div className="credential-item-large">
                  <div className="credential-icon">
                    <div className="icon-circle gradient-bg"></div>
                  </div>
                  <div className="credential-details">
                    <h4>Executive Management Course</h4>
                    <p>INSEAD</p>
                  </div>
                </div>
                <div className="credential-item-large">
                  <div className="credential-icon">
                    <div className="icon-circle gradient-bg"></div>
                  </div>
                  <div className="credential-details">
                    <h4>Executive Management Course</h4>
                    <p>Harvard University</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-content">
              <h2>Key Achievements</h2>
              <div className="achievement-list">
                <div className="achievement-item">
                  <div className="achievement-number">
                    <span className="gradient-text">20+</span>
                  </div>
                  <div className="achievement-text">
                    <h4>Years of Experience</h4>
                    <p>Leading growth initiatives across global markets</p>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-number">
                    <span className="gradient-text">600%</span>
                  </div>
                  <div className="achievement-text">
                    <h4>Revenue Growth Achieved</h4>
                    <p>Maximum growth in beverage operations</p>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-number">
                    <span className="gradient-text">15+</span>
                  </div>
                  <div className="achievement-text">
                    <h4>Years Running GreenSpring</h4>
                    <p>Providing strategic solutions since 2010</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>The GreenSpring Mission</h2>
              <p className="lead">To empower visionary leaders with the strategic insights, operational excellence, and growth systems needed to build sustainable, impactful organizations—drawing from proven experience across global markets and diverse industries.</p>
              <p>Having led initiatives from launching craft breweries to managing commercial strategy for international brands, I understand that every business has unique potential for transformation. My role is to unlock that potential through hands-on partnership, proven methodologies, and strategic thinking that delivers measurable results.</p>
              <div className="mission-values">
                <div className="value-item">
                  <strong>Integrity:</strong> Honest assessments and transparent communication
                </div>
                <div className="value-item">
                  <strong>Excellence:</strong> Delivering exceptional results through rigorous standards
                </div>
                <div className="value-item">
                  <strong>Partnership:</strong> Working alongside you, not just for you
                </div>
                <div className="value-item">
                  <strong>Innovation:</strong> Bringing fresh perspectives to complex challenges
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <img src={getImagePath('images/seaview-linkedin-banner.jpeg')} alt="Professional workspace" className="mission-image" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss your challenges and explore how GreenSpring can help you achieve your growth objectives.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Schedule Free Consultation</button>
              <a href="/services" className="btn btn-outline btn-large">Explore Services</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}