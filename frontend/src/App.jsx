import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import GameCard from './components/GameCard'

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`/api/games${search ? `?search=${search}` : ''}`)
      .then(res => res.json())
      .then(data => setListings(data))
  }, [search])

  return (
    <div>
      <Navbar search={search} onSearch={setSearch} />

      <main style={{ padding: '32px 120px', maxWidth: '1400px', margin: '0 auto' }}>
        <p style={{ marginBottom: '24px', color: '#fdf8f8', fontSize: '14px' }}>
          Results found: <strong style={{ color: '#fff' }}>{listings.length}</strong>
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px'
        }}>
          {listings.map((listing, index) => (
            <GameCard key={index} listing={listing} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App