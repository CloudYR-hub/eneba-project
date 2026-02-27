import eaLogo from '../assets/EA-logo.png'
import playstationLogo from '../assets/playstation-logo.png'
import nintendoLogo from '../assets/nintendo-logo.png'
import xboxLogo from '../assets/xbox-logo.svg'

const platformLogos = {
  'PC': eaLogo,
  'PlayStation': playstationLogo,
  'Nintendo': nintendoLogo,
  'Xbox': xboxLogo,
}

function GameCard({ listing }) {
  const platformLogo = platformLogos[listing.platform]

  return (
    <div style={{
      background: '#241654',
      borderRadius: '8px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Image + Cashback badge */}
      <div style={{ position: 'relative' }}>
        <img
          src={listing.image_url}
          alt={listing.title}
          style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }}
        />
        {listing.cashback_amount > 0 && (
          <div style={{
            position: 'absolute', bottom: '10px', left: '10px',
            background: '#1565c0',
            color: '#fff',
            fontSize: '13px',
            fontWeight: 700,
            padding: '6px 12px',
            borderRadius: '4px',
            letterSpacing: '0.5px'
          }}>
            ⚡ CASHBACK
          </div>
        )}
      </div>

      {/* Platform bar */}
      <div style={{
        background: 'rgba(255,255,255,0.06)',
        padding: '6px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        {platformLogo && (
          <img
            src={platformLogo}
            alt={listing.platform}
            style={{ width: '14px', height: '14px', objectFit: 'contain', }}
          />
        )}
        <span style={{
          fontSize: '11px',
          color: '#ccc',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}>
          {listing.platform}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>

        {/* Title */}
        <p style={{ fontSize: '14px', fontWeight: 600, lineHeight: '1.3', color: '#fff' }}>
          {listing.title}
        </p>

        {/* Region */}
        <span style={{ fontSize: '12px', color: '#a78bfa', fontWeight: 500 }}>
          {listing.region}
        </span>

        {/* Original price + discount */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
          <span style={{ fontSize: '12px', color: '#888', textDecoration: 'line-through' }}>
            €{listing.original_price}
          </span>
          {listing.discount_percent > 0 && (
            <span style={{ fontSize: '12px', color: '#00c853', fontWeight: 700 }}>
              -{listing.discount_percent}%
            </span>
          )}
        </div>

        {/* Current price */}
        <p style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>
          €{listing.current_price}
        </p>

        {/* Cashback amount */}
        {listing.cashback_amount > 0 && (
          <p style={{ fontSize: '12px', color: '#00c853', fontWeight: 700 }}>
            Cashback: €{listing.cashback_amount}
          </p>
        )}

        {/* Likes */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          marginTop: 'auto', paddingTop: '8px',
          color: '#888', fontSize: '13px'
        }}>
          ♡ {listing.likes}
        </div>
      </div>
    </div>
  )
}

export default GameCard