import puppeteer from 'puppeteer'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { existsSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const htmlPath = join(__dirname, '..', 'public', 'cv-miguel-henao.html')
const pdfPath  = join(__dirname, '..', 'public', 'cv-miguel-henao.pdf')

if (!existsSync(htmlPath)) {
  console.error('❌  No se encontró public/cv-miguel-henao.html')
  process.exit(1)
}

console.log('🚀  Generando PDF...')

const browser = await puppeteer.launch({ headless: true })
const page    = await browser.newPage()

await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, {
  waitUntil: 'networkidle0',
  timeout: 30000,
})

// Esperar que carguen las Google Fonts (si hay internet) o continuar igual
await new Promise(r => setTimeout(r, 1500))

await page.pdf({
  path: pdfPath,
  format: 'A4',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
})

await browser.close()

console.log(`✅  PDF generado en: public/cv-miguel-henao.pdf`)
