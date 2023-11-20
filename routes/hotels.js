import express from 'express'
import { createHotel, deleteHotel, getAllHotel, getFeaturedHotel, getSingleHotel, getHotelBySearch, getHotelCount, updateHotel } from '../Controllers/hotelController.js'

import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//Create new tour 
router.post('/', verifyAdmin, createHotel)

//Update tour 
router.put('/:id', verifyAdmin, updateHotel)

//Delete tour 
router.delete('/:id', verifyAdmin, deleteHotel)

//Get single tour 
router.get('/:id', getSingleHotel)

//Get all tour 
router.get('/', getAllHotel)

//Get tour by search
router.get("/search/getHotelBySearch", getHotelBySearch)
router.get("/search/getFeaturedHotel", getFeaturedHotel)
router.get("/search/getHotelCount", getHotelCount)




export default router