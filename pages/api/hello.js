import fs from 'fs';
import path from 'path'

export default async function handler(req, res) {
  const file = await fs.readFileSync(path.join(__dirname, '../../../../blog/post1.md')).toString()

  res.status(200).json({ html: file })
}
