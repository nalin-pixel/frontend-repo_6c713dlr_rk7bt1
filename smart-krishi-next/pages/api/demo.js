export default function handler(req, res){
  res.status(200).json({
    disease: { crop: 'Wheat', disease: 'Leaf Rust', probability: 0.81 },
    weather: { main: { temp: 29, humidity: 60 }, weather: [{ main: 'Clouds' }] },
    mandi: [ { crop: 'Wheat', price: 2100 }, { crop: 'Soybean', price: 4800 } ],
    fertilizer: { crop: 'Wheat', soilType: 'Loamy', recommendations: ['Urea', 'DAP'] }
  })
}
