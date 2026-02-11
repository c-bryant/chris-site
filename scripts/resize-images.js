import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const srcDir = path.resolve(process.cwd(), 'src', 'assets')
const outDir = path.resolve(process.cwd(), 'public', 'assets', 'responsive')
const widths = [480, 768, 1024, 1600]

const files = [
  'shark-experience-home-ui.jpg',
  'shark-experience-golf-ui.jpg',
  'shark-experience-sports-ui.jpg',
]

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true })
}

async function processImage(file) {
  const name = path.parse(file).name
  const input = path.join(srcDir, file)

  for (const w of widths) {
    const outWebp = path.join(outDir, `${name}-${w}.webp`)
    const outJpeg = path.join(outDir, `${name}-${w}.jpg`)

    await sharp(input)
      .resize({ width: w })
      .webp({ quality: 80 })
      .toFile(outWebp)

    await sharp(input)
      .resize({ width: w })
      .jpeg({ quality: 82 })
      .toFile(outJpeg)

    console.log(`Wrote ${outWebp}`)
    console.log(`Wrote ${outJpeg}`)
  }
}

async function run() {
  await ensureDir(outDir)
  for (const f of files) {
    const srcPath = path.join(srcDir, f)
    if (!fs.existsSync(srcPath)) {
      console.warn(`Source file not found: ${srcPath}, skipping`)
      continue
    }
    await processImage(f)
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
