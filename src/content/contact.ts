export const contactContent = {
  hero: {
    title: "Be",
    titleHighlight: "Awesome",
    titleEnd: "Today",
    subtitle: "Ready to unlock your organization's potential? Let's discuss your challenges and explore solutions."
  },
  
  form: {
    heading: "Start the Conversation",
    intro: "Tell me about your business challenges and goals. I'll respond within 24 hours to discuss how GreenSpring can help.",
    fields: {
      name: {
        label: "Full Name",
        required: true
      },
      email: {
        label: "Email Address",
        required: true
      },
      company: {
        label: "Company Name",
        required: true
      },
      phone: {
        label: "Phone Number",
        required: false
      },
      industry: {
        label: "Industry",
        options: [
          { value: "", label: "Select your industry" },
          { value: "technology", label: "Technology" },
          { value: "healthcare", label: "Healthcare" },
          { value: "manufacturing", label: "Manufacturing" },
          { value: "retail", label: "Retail" },
          { value: "financial", label: "Financial Services" },
          { value: "consulting", label: "Consulting" },
          { value: "other", label: "Other" }
        ]
      },
      companySize: {
        label: "Company Size",
        options: [
          { value: "", label: "Select company size" },
          { value: "startup", label: "Startup (1-10 employees)" },
          { value: "small", label: "Small (11-50 employees)" },
          { value: "medium", label: "Medium (51-200 employees)" },
          { value: "large", label: "Large (200+ employees)" }
        ]
      },
      interest: {
        label: "Primary Interest",
        options: [
          { value: "", label: "What brings you here?" },
          { value: "strategic", label: "Strategic Planning" },
          { value: "operations", label: "Operations Optimization" },
          { value: "marketing", label: "Marketing Strategy" },
          { value: "leadership", label: "Leadership Development" },
          { value: "turnaround", label: "Business Turnaround" },
          { value: "general", label: "General Consultation" }
        ]
      },
      message: {
        label: "Tell me about your challenges and goals",
        placeholder: "Describe your current situation, key challenges, and what you'd like to achieve...",
        required: true
      },
      timeline: {
        label: "Project Timeline",
        options: [
          { value: "", label: "When would you like to start?" },
          { value: "immediate", label: "Immediately" },
          { value: "1-month", label: "Within 1 month" },
          { value: "3-months", label: "Within 3 months" },
          { value: "6-months", label: "Within 6 months" },
          { value: "exploring", label: "Just exploring options" }
        ]
      }
    },
    submitButton: "Send Message"
  },
  
  contactMethods: {
    heading: "Get in Touch",
    methods: [
      {
        type: "Email",
        value: "greenspringjohn@gmail.com",
        href: "mailto:greenspringjohn@gmail.com"
      },
      {
        type: "Phone",
        value: "(860) 840-1409",
        href: "tel:+18608401409"
      },
      {
        type: "LinkedIn",
        value: "Connect with me",
        href: "http://linkedin.com/in/johnleone"
      }
    ]
  },
  
  consultation: {
    heading: "Free Consultation Includes:",
    items: [
      "Initial assessment of your challenges",
      "Discussion of potential solutions",
      "Exploration of fit and engagement options",
      "No obligation - just valuable insights"
    ]
  },
  
  faq: {
    heading: "Frequently Asked Questions",
    subheading: "Common questions about working with GreenSpring",
    items: [
      {
        question: "How do you approach each engagement?",
        answer: "Every engagement begins with a thorough discovery phase to understand your unique situation, challenges, and goals. I then develop customized solutions based on proven methodologies, ensuring the approach fits your organization's culture and capabilities."
      },
      {
        question: "What industries do you work with?",
        answer: "While my background includes extensive experience in beverage, hospitality, and consumer goods, the strategic and operational principles I use apply across industries. I've successfully worked with technology, manufacturing, professional services, and healthcare organizations."
      },
      {
        question: "How long do typical engagements last?",
        answer: "Engagement length varies based on scope and objectives. Strategic planning projects typically take 2-4 months, while operational transformations can extend 6-12 months. I also offer ongoing advisory relationships for continuous improvement."
      },
      {
        question: "Do you work with small businesses?",
        answer: "Absolutely. I work with organizations from startups to large enterprises. The key is having leadership committed to growth and improvement. Many of my most rewarding engagements have been with ambitious small and medium-sized businesses."
      },
      {
        question: "What kind of results can I expect?",
        answer: "While every situation is unique, my engagements typically deliver measurable improvements in revenue growth, operational efficiency, and organizational effectiveness. Most clients see initial results within 3-6 months, with sustained benefits continuing well beyond the engagement period."
      },
      {
        question: "How do you ensure implementation success?",
        answer: "Success requires more than good strategy—it requires effective execution. I work closely with your team throughout implementation, providing hands-on support, regular check-ins, and course corrections as needed. I also focus heavily on building internal capabilities so improvements sustain long-term."
      }
    ]
  }
}
