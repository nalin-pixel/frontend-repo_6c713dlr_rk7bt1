const demoData = {
  MP: {
    Bhopal: [
      { crop: 'Wheat', price: 2100 },
      { crop: 'Soybean', price: 4800 },
      { crop: 'Gram', price: 5400 },
    ],
    Indore: [
      { crop: 'Wheat', price: 2200 },
      { crop: 'Maize', price: 1950 },
      { crop: 'Soybean', price: 5000 },
    ]
  },
  UP: {
    Lucknow: [
      { crop: 'Wheat', price: 2000 },
      { crop: 'Rice', price: 2600 },
    ],
    Varanasi: [
      { crop: 'Wheat', price: 2050 },
      { crop: 'Paddy', price: 2400 },
    ]
  }
}

export default function handler(req, res){
  const { state = 'MP', district = 'Bhopal' } = req.query
  const items = demoData?.[state]?.[district] || []
  res.status(200).json(items)
}
