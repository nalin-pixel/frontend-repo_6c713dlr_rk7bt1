export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const chunks = []
  req.on('data', (c) => chunks.push(c))
  await new Promise((resolve) => req.on('end', resolve))
  let body = {}
  try { body = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}') } catch {}
  const { crop = 'Wheat', soilType = 'Loam' } = body
  res.status(200).json({ fertilizer: 'Urea 50kg/acre', cost: '₹1200', tips: 'Apply in morning after irrigation', crop, soilType })
}
