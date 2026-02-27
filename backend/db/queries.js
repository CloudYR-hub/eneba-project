const pool = require('./index')

const getAllGames = async (search) => {
  if (search) {
    const result = await pool.query(
      `SELECT games.id, games.title, games.image_url,
              listings.platform, listings.region, listings.original_price,
              listings.discount_percent, listings.current_price,
              listings.cashback_amount, listings.likes
       FROM listings
       JOIN games ON games.id = listings.game_id
       WHERE games.title ILIKE $1`,
      [`%${search}%`]
    )
    return result.rows
  } else {
    const result = await pool.query(
      `SELECT games.id, games.title, games.image_url,
              listings.platform, listings.region, listings.original_price,
              listings.discount_percent, listings.current_price,
              listings.cashback_amount, listings.likes
       FROM listings
       JOIN games ON games.id = listings.game_id`
    )
    return result.rows
  }
}

const getGameById = async (id) => {
  const result = await pool.query(
    `SELECT games.id, games.title, games.image_url,
            listings.platform, listings.region, listings.original_price,
            listings.discount_percent, listings.current_price,
            listings.cashback_amount, listings.likes
     FROM listings
     JOIN games ON games.id = listings.game_id
     WHERE games.id = $1`,
    [id]
  )
  return result.rows
}

module.exports = { getAllGames, getGameById }