import express from 'express';
import {
  createFlight,
  updateFlight,
  deleteFlight,
  getSingleFlight,
  getAllFlights,
  getFlightCount,
} from '../Controllers/FlightController.js';

import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Create new flight
router.post('/', createFlight);

// Update flight
router.put('/:id',updateFlight);

// Delete flight
router.delete('/:id',deleteFlight);

// Get single flight
router.get('/:id', getSingleFlight);

// Get all flights
router.get('/', getAllFlights);

// Get flight count
router.get('/count', getFlightCount);

export default router;
