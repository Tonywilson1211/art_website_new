import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  return (
    <div className="min-h-screen bg-pink-panel/60 text-navy font-sans flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <div
        aria-hidden
        style={{
          position: 'fixed',
          bottom: 8,
          right: 8,
          zIndex: 9999,
          fontSize: 10,
          padding: '4px 8px',
          background: '#1a2744',
          color: '#f0e4e4',
          borderRadius: 4,
          opacity: 0.7,
        }}
      >
        app mounted
      </div>
    </div>
  )
}
