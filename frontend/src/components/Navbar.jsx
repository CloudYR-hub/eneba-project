import logo from '../assets/logo.svg'
import heartLogo from '../assets/heart-logo.svg'
import cartLogo from '../assets/cart-logo.svg'
import flagIcon from '../assets/flag.png'
import searchIcon from '../assets/search.svg'
import closeIcon from '../assets/close.svg'

function Navbar({ search, onSearch }) {
  return (
    <nav style={{
      background: '#120d33',
      padding: '0 32px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }}>
      <img src={logo} alt="Eneba" style={{ height: '28px' }} />

      <div style={{ flex: 1, maxWidth: '480px', position: 'relative', display: 'flex', alignItems: 'center' }}>
  <img
    src={searchIcon}
    alt="Search"
    style={{
      position: 'absolute',
      left: '12px',
      width: '16px',
      height: '16px',
      opacity: 0.6,
      filter: 'brightness(0) invert(1)'
    }}
  />
  <input
    type="text"
    placeholder="Search games..."
    value={search}
    onChange={e => onSearch(e.target.value)}
    style={{
      width: '100%',
      padding: '10px 40px',
      borderRadius: '6px',
      border: '1px solid rgba(255,255,255,0.15)',
      background: 'rgba(255,255,255,0.08)',
      color: '#fff',
      fontSize: '15px',
      outline: 'none',
      fontFamily: 'Barlow, sans-serif'
    }}
  />
  {search && (
    <img
      src={closeIcon}
      alt="Clear"
      onClick={() => onSearch('')}
      style={{
        position: 'absolute',
        right: '12px',
        width: '16px',
        height: '16px',
        opacity: 0.6,
        cursor: 'pointer',
        filter: 'brightness(0) invert(1)'
      }}
    />
  )}
</div>
          {/* Region selector */}
    <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: 500,
    color: '#fff',
    cursor: 'pointer'
    }}>
    <img src={flagIcon} alt="EU" style={{ width: '20px', height: '20px', borderRadius: '50%', overflow: 'hidden', flexShrink: '0' }} />
    English EU | EUR
        </div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: '16px', alignItems: 'center' }}>
        <img src={heartLogo} alt="Wishlist" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
        <img src={cartLogo} alt="Cart" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
      </div>
    </nav>
  )
}

export default Navbar