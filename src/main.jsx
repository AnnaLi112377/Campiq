import React from 'react'
import { createRoot } from 'react-dom/client'
import { Home, Search, Users, ShieldCheck, Mail, MapPin, PlusCircle } from 'lucide-react'
import './style.css'

function App() {
  const listings = [
    {
      title: 'Summer Sublease near UCSB',
      price: '$1,250 / month',
      location: 'Isla Vista',
      tag: 'Example listing',
      text: 'A sample housing card for beta launch. Replace this with verified student listings.'
    },
    {
      title: 'Roommate Search for Fall',
      price: 'Budget: $1,600–$2,000',
      location: 'Goleta / IV',
      tag: 'Roommate',
      text: 'Students can share housing needs and connect with others looking for similar options.'
    },
    {
      title: 'Verified Housing Info',
      price: 'Coming soon',
      location: 'UCSB Area',
      tag: 'Beta',
      text: 'Campiq will help students collect, compare, and report housing information.'
    }
  ]

  return (
    <main>
      <nav className="nav">
        <div className="brand">
          <div className="logo">cq</div>
          <span>Campiq</span>
        </div>
        <div className="navlinks">
          <a href="#housing">Housing</a>
          <a href="#community">Community</a>
          <a href="#join">Join Us</a>
        </div>
      </nav>

      <section className="hero">
        <div className="badge">Beta Launch · UCSB Student Community</div>
        <h1>Campus information should be easier to find.</h1>
        <p>
          Campiq helps local and international students share real campus information,
          housing opportunities, and student experiences.
        </p>
        <div className="buttons">
          <a className="primary" href="#housing">Browse Housing</a>
          <a className="secondary" href="#join">Join Community</a>
        </div>
      </section>

      <section className="section two">
        <div>
          <p className="label">What is Campiq?</p>
          <h2>A student-built platform for campus life.</h2>
        </div>
        <p className="body">
          Many students struggle to find reliable housing posts, roommate information,
          campus resources, and real student advice. Campiq starts with housing and
          sublease information, then grows into a broader community where students can
          connect across language, culture, and social circles.
        </p>
      </section>

      <section className="cards">
        <div className="card">
          <Search />
          <h3>Find real information</h3>
          <p>Collect student housing, resources, and campus tips in one clean place.</p>
        </div>
        <div className="card">
          <Users />
          <h3>Connect students</h3>
          <p>Help local students and international students communicate more easily.</p>
        </div>
        <div className="card">
          <ShieldCheck />
          <h3>Report suspicious posts</h3>
          <p>Build trust by allowing students to report scam or misleading listings.</p>
        </div>
      </section>

      <section id="housing" className="section">
        <div className="sectionHeader">
          <div>
            <p className="label">Housing / Sublease</p>
            <h2>Starter housing board</h2>
          </div>
          <a className="smallButton" href="mailto:hello@campiq.org"><PlusCircle size={18}/> Post Housing</a>
        </div>

        <div className="listingGrid">
          {listings.map((item, index) => (
            <article className="listing" key={index}>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p className="price">{item.price}</p>
              <p className="place"><MapPin size={16}/> {item.location}</p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="report">
          <ShieldCheck />
          <div>
            <h3>See a fake or suspicious listing?</h3>
            <p>Report it to Campiq. This beta platform is still improving, but safety and transparency are core goals.</p>
          </div>
          <a href="mailto:hello@campiq.org?subject=Report%20a%20listing">Report Listing</a>
        </div>
      </section>

      <section id="community" className="section community">
        <p className="label">Community</p>
        <h2>More than housing.</h2>
        <p>
          Campiq is designed to become a campus information network: roommate matching,
          student life guides, study groups, event information, and practical resources
          for students who want to understand campus life beyond one small social circle.
        </p>
      </section>

      <section id="join" className="join">
        <Mail />
        <h2>Want to help build Campiq?</h2>
        <p>
          We are looking for students interested in housing information, community building,
          design, content, outreach, and campus partnerships.
        </p>
        <a className="primary" href="mailto:hello@campiq.org?subject=Join%20Campiq">Contact / Join Us</a>
      </section>

      <footer>
        <div className="brand">
          <div className="logo">cq</div>
          <span>Campiq</span>
        </div>
        <p>Built by students, for students. Currently in beta.</p>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
