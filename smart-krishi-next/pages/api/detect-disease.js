import formidable from 'formidable'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' })

  const form = formidable({ multiples: false })
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(400).json({ error: 'parse_error', details: String(err) })

    const crop = fields.crop || 'Unknown'
    const file = files.image

    if (!file) return res.status(400).json({ error: 'no_image' })

    // Demo static response; integrate ML model or external API later
    const demoResponse = {
      crop,
      disease: 'Leaf Rust',
      probability: 0.87,
      pesticide: 'Propiconazole 25% EC',
      tips: 'Spray in early morning or evening, ensure proper spacing and sanitation.'
    }

    return res.status(200).json(demoResponse)
  })
}
