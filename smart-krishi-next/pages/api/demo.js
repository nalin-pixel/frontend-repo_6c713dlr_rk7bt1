export default function handler(req, res) {
  res.status(200).json({
    disease: 'Sample Disease',
    weather: 'Sunny 28°C',
    mandi: [
      { crop: 'Wheat', price: 2100 },
      { crop: 'Maize', price: 1800 },
    ],
    fertilizer: 'Urea 50kg/acre',
  })
}
