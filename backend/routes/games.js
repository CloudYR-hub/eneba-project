const express = require('express')
const router = express.Router()
const { getAllGames, getGameById } = require('../db/queries')

router.get('/', async (req, res) => {
  try {
    const { search } = req.query
    const games = await getAllGames(search)
    res.json(games)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const game = await getGameById(id)
    if (game.length === 0) {
      return res.status(404).json({ error: 'Game not found' })
    }
    res.json(game)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

module.exports = router