export default async function handler(req, res) {
  const { state = 'MP', district = 'Bhopal' } = req.query
  // Demo dataset; replace with live eNAM or other source
  const data = [
    { crop: 'Wheat', price: 2140, unit: '₹/qtl', state, district },
    { crop: 'Soyabean', price: 4400, unit: '₹/qtl', state, district },
    { crop: 'Maize', price: 1860, unit: '₹/qtl', state, district },
  ]
  res.status(200).json(data)
}
