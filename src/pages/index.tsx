import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Transform Your Business for <span className="gradient-text">Sustainable Growth</span></h1>
            <p className="hero-subtitle">Expert management consulting, strategic marketing, and operational excellence solutions that drive real results for ambitious organizations in beverage, hospitality, and beyond.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Schedule Consultation</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="circle-animation">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}