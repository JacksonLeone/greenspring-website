import React from 'react';

interface TimelineItemProps {
  company: string;
  role: string;
  content: string;
  isExpanded: boolean;
  isLast?: boolean;
  onClick: () => void;
}

export default function TimelineItem({ 
  company, 
  role, 
  content, 
  isExpanded, 
  isLast = false,
  onClick 
}: TimelineItemProps) {
  return (
    <div className={`timeline-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="timeline-marker">
        <div className="timeline-dot"></div>
        {!isLast && <div className="timeline-line"></div>}
      </div>
      <div className="timeline-card" onClick={onClick}>
        <div className="timeline-header">
          <h3>{company}</h3>
          <span className="timeline-role">{role}</span>
          <span className="timeline-toggle">{isExpanded ? '−' : '+'}</span>
        </div>
        {isExpanded && (
          <div className="timeline-content">
            <p dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}
      </div>
    </div>
  );
}
