import React, { useState } from 'react';
import Layout from '../components/Layout';
import TimelineItem from '../components/TimelineItem';
import CTASection from '../components/CTASection';
import { getImagePath } from '../utils/imagePath';
import { aboutContent } from '../content/about';

export default function About() {
  const { hero, story, careerTimeline, currentFocus, leadership, creative, today } = aboutContent
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
            <h1>About <span className="gradient-text">{hero.titleHighlight}</span></h1>
            <p className="hero-subtitle">{hero.subtitle}</p>
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
              <h2>{story.title}</h2>
              <div className="story-text">
                <p className="lead" dangerouslySetInnerHTML={{ __html: story.lead }} />
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
              <h2>{currentFocus.title}</h2>
            </div>
            <div className="focus-grid">
              <div className="focus-text">
                <p className="lead">{currentFocus.lead}</p>
                
                <ul className="focus-list">
                  {currentFocus.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
              </div>
              <div className="focus-image">
                <img src={getImagePath('images/seaview-hotel-pool.jpg')} alt="Seaview Hotel - Historic Beachfront Property Transformation" className="hotel-image" />
              </div>
            </div>
            <div className="focus-highlight">
              <p>{currentFocus.highlight}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Recognition Section */}
      <section className="philosophy">
        <div className="container">
          <div className="section-header">
            <h2>{leadership.title}</h2>
          </div>
          <div className="recognition-content">
            <div className="recognition-feature">
              <h3 dangerouslySetInnerHTML={{ __html: leadership.feature.title }} />
              <p>{leadership.feature.description}</p>
              
              <blockquote className="leadership-quote">
                "{leadership.feature.quote}"
              </blockquote>
              
              <p className="recognition-closing">{leadership.feature.closing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Work Section */}
      <section className="credentials-section">
        <div className="container">
          <div className="section-header">
            <h2>{creative.title}</h2>
          </div>
          <div className="creative-grid">
            <div className="creative-image">
              <img src={getImagePath('images/laughing-book-cover.jpg')} alt="Laughing - Poems for an Awesome! Life by J. Leone" className="book-cover-image" />
            </div>
            <div className="creative-text">
              <p className="lead" dangerouslySetInnerHTML={{ __html: creative.lead }} />
              
              <p>{creative.body}</p>
              
              <div className="creative-highlight">
                <p>{creative.highlight}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Today Section */}
      <section className="mission">
        <div className="container">
          <div className="section-header">
            <h2>{today.title}</h2>
          </div>
          <div className="today-content">
            <p className="lead">{today.lead}</p>
            
            <ul className="today-list">
              {today.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <p className="today-closing">{today.closing}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  )
}