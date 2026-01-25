import React, { useState } from 'react';
import Layout from '../components/Layout';
import TimelineItem from '../components/TimelineItem';
import CTASection from '../components/CTASection';
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

      {/* Current Focus Section */}
      <section className="current-focus">
        <div className="container">
          <div className="focus-content">
            <div className="focus-header">
              <h2>Current Focus</h2>
            </div>
            <div className="focus-grid">
              <div className="focus-text">
                <p className="lead">Most recently, my focus has been on the relaunch and reinvention of a 75-year-old historic beachfront hotel in St. Maarten. This work has included:</p>
                
                <ul className="focus-list">
                  <li>Reimagining the hotel, bar, restaurant, pool, cabanas, market, and café</li>
                  <li>Redesigning logos, visual identities, merchandise lines, and brand systems</li>
                  <li>Introducing new retail, hospitality, and event-driven concepts</li>
                  <li>Redesigning marketing, operations, and commercial models</li>
                  <li>Reenergizing a legacy property while honoring its history and role in the community</li>
                </ul>
                
              </div>
              <div className="focus-image">
                <img src={getImagePath('images/seaview-hotel-pool.jpg')} alt="Seaview Hotel - Historic Beachfront Property Transformation" className="hotel-image" />
              </div>
            </div>
            <div className="focus-highlight">
              <p>This project represents the culmination of my career—marketing, operations, and commercial concepts reimagined, not in theory, but in practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Recognition Section */}
      <section className="philosophy">
        <div className="container">
          <div className="section-header">
            <h2>Leadership Recognition</h2>
          </div>
          <div className="recognition-content">
            <div className="recognition-feature">
              <h3>Featured in <em>The Solutions-Oriented Leader</em> (Dr. Rick Goodman)</h3>
              <p>I am featured in <em>The Solutions-Oriented Leader</em>, which highlights my leadership during Hurricane Irma in St. Maarten and the solutions-focused mindset required to protect people, stabilize operations, and move forward under pressure. The excerpt also reflects how I used major event and brand activations—including the Heineken Regatta—to rally teams, support the community, and help drive recovery.</p>
              
              <blockquote className="leadership-quote">
                "Be Positive, Be Patient, Be Smart, and Family First!"
              </blockquote>
              
              <p className="recognition-closing">This recognition reflects the same approach I bring to my work today: stay focused on solutions, support people, and deliver results—especially when it matters most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Work Section */}
      <section className="credentials-section">
        <div className="container">
          <div className="section-header">
            <h2>Creative Work & Authorship</h2>
          </div>
          <div className="creative-grid">
            <div className="creative-image">
              <img src={getImagePath('images/laughing-book-cover.jpg')} alt="Laughing - Poems for an Awesome! Life by J. Leone" className="book-cover-image" />
            </div>
            <div className="creative-text">
              <p className="lead">In addition to my professional work, I am also the author of the 3 part book series <strong>Living, Laughing & Loving: Poems for an Awesome! Life</strong>, a collection focused on perspective, resilience, creativity, and the human experience.</p>
              
              <p>Writing and Drawing has been an important creative outlet throughout my career and reflects a belief that strong leadership and effective communication are grounded not only in strategy and execution, but also in empathy, clarity, and self-awareness.</p>
              
              <div className="creative-highlight">
                <p>This creative work complements my professional approach—bringing balance, reflection, and emotional intelligence to complex business and leadership environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Today Section */}
      <section className="mission">
        <div className="container">
          <div className="section-header">
            <h2>Today</h2>
          </div>
          <div className="today-content">
            <p className="lead">Through GreenSpring Marketing & Management, I work directly with owners, operators, boards, and leadership teams to help them:</p>
            
            <ul className="today-list">
              <li>Launch or relaunch businesses</li>
              <li>Reimagine brands, visual identities, and merchandise programs</li>
              <li>Improve operations and profitability</li>
              <li>Align marketing with execution</li>
              <li>Turn ideas into sustainable commercial results</li>
            </ul>
            
            <p className="today-closing">Whether working with small businesses or global organizations, my approach remains the same: hands-on, practical, and grounded in real operating experience.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  )
}