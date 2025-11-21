export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  // Parse multipart form data
  const chunks = []
  req.on('data', (c) => chunks.push(c))
  await new Promise((resolve) => req.on('end', resolve))
  // In demo, we skip actual parsing and return a mock

  return res.status(200).json({
    disease: 'Leaf Rust',
    probability: 92,
    pesticide: 'Fungicide ABC',
    tips: 'Apply in morning, irrigate moderately',
  })
}
