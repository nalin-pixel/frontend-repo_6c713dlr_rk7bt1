export default function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' })
  const { crop = 'Wheat', soilType = 'Loamy' } = req.body || {}
  const recos = {
    Wheat: { Loamy: ['Urea', 'DAP', 'MOP'], Clay: ['DAP', 'SSP'] },
    Rice: { Alluvial: ['Urea', 'Zinc Sulphate'], Sandy: ['Urea', 'MOP'] },
    Soybean: { Black: ['DAP', 'Urea'], Loamy: ['Rock Phosphate', 'SSP'] },
  }
  const list = recos?.[crop]?.[soilType] || ['NPK 10:26:26', 'Urea']
  res.status(200).json({ crop, soilType, recommendations: list, tips: 'Apply based on soil test and irrigation schedule.' })
}
