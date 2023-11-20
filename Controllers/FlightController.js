import Flight from '../models/Flight.js';


export const createFlight = async (req, res) => {
  const newFlight = new Flight(req.body);

  try {
    const savedFlight = await newFlight.save();
    res.send("Hello");
    res.status(200).json({ success: true, message: 'Successfully created', data: savedFlight });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create. Try again!' });
  }
};

export const updateFlight = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedFlight = await Flight.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.status(200).json({ success: true, message: 'Successfully updated', data: updatedFlight });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update' });
  }
};


export const deleteFlight = async (req, res) => {
  const id = req.params.id;

  try {
    await Flight.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Successfully deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete' });
  }
};

export const getSingleFlight = async (req, res) => {
  const id = req.params.id;

  try {
    const flight = await Flight.findById(id);
    res.status(200).json({ success: true, message: 'Successfully', data: flight });
  } catch (error) {
    res.status(404).json({ success: false, message: 'Not Found' });
  }
};

export const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json({ success: true, count: flights.length, message: 'Successfully', data: flights });
  } catch (error) {
    res.status(404).json({ success: false, message: 'Not Found' });
  }
};

export const getFlightCount = async (req, res) => {
  try {
    const flightCount = await Flight.estimatedDocumentCount();
    res.status(200).json({ success: true, data: flightCount });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch' });
  }
};
