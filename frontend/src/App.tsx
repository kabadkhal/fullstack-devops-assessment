
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Server,
  Globe,
  RefreshCw,
  CheckCircle2,
  Rocket,
  GitBranch,
  Container,
  Cloud
} from 'lucide-react'
import './App.css'

function App() {
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.get('/api/hello/')
      setMessage(response.data.message)
    } catch (err) {
      console.error(err)
      setError(
        'Failed to connect to the backend. Please ensure the Django server is running.'
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
      {/* Visible deployment demo banner */}
      <section className="deployment-banner">
        <div className="deployment-banner-top">
          <div className="deployment-icon">
            <Rocket size={28} />
          </div>

          <div className="deployment-heading">
            <span className="deployment-eyebrow">
              CONTINUOUS INTEGRATION & DELIVERY
            </span>
            <h2>NEW DEPLOYMENT RELEASE</h2>
            <p>Code pushed. Pipeline triggered. Release in progress.</p>
          </div>
        </div>

        <div className="deployment-version-row">
          <span className="deployment-version">
            DEMO VERSION 2.0
          </span>
          <span className="deployment-demo-id">
            Release ID: CI-CD-002
          </span>
        </div>

        <div className="deployment-flow">
          <div className="deployment-step">
            <GitBranch size={18} />
            <span>GitHub</span>
          </div>

          <span className="flow-arrow">→</span>

          <div className="deployment-step">
            <Server size={18} />
            <span>Jenkins</span>
          </div>

          <span className="flow-arrow">→</span>

          <div className="deployment-step">
            <Container size={18} />
            <span>Docker</span>
          </div>

          <span className="flow-arrow">→</span>

          <div className="deployment-step">
            <Cloud size={18} />
            <span>AWS EC2</span>
          </div>
        </div>
      </section>

      <header className="header">
        <Server className="icon-main" size={48} />
        <h1>DevOps Assessment</h1>
        <p className="subtitle">
          Full-stack Hello World Application
        </p>
      </header>

      <main className="main-card">
        <div className="status-badge">
          {loading ? (
            <span className="badge loading">
              <RefreshCw className="spin" size={16} />
              Connecting...
            </span>
          ) : error ? (
            <span className="badge error">
              Connection Failed
            </span>
          ) : (
            <span className="badge success">
              <CheckCircle2 size={16} />
              Backend Online
            </span>
          )}
        </div>

        <div className="content">
          <Globe className="icon-globe" size={64} />

          {loading ? (
            <div className="skeleton-loader">
              <div className="skeleton-text" />
              <div className="skeleton-text short" />
            </div>
          ) : error ? (
            <p className="error-text">{error}</p>
          ) : (
            <h2 className="message-text">{message}</h2>
          )}
        </div>

        <button
          onClick={fetchData}
          disabled={loading}
          className="refresh-button"
        >
          {loading ? 'Fetching...' : 'Refresh Data'}
        </button>
      </main>

      <footer className="footer">
        <p>Built with Django & React (Vite)</p>
        <p className="footer-deployment">
          Containerized with Docker · Automated using Jenkins CI/CD
        </p>
      </footer>
    </div>
  )
}

export default App
