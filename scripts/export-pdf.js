const puppeteer = require('puppeteer')
const path = require('path')

const convert =  async () => {
  // eslint-disable-next-line
  console.log('Exporting PDF ...')
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox']
    })
    const page = await browser.newPage()
    await page.goto(`http://localhost:8081/#/`, {
      waitUntil: 'networkidle2'
    })
    await page.emulateMedia('screen')
    await page.pdf({
      path: path.join(__dirname, '../pdf/resume.pdf'),
      format: 'a4',
      printBackground: true
    })
    await browser.close()
  } catch (err) {
    throw new Error(err)
  }
  // eslint-disable-next-line
  console.log('Finished exports.')
}

// eslint-disable-next-line
convert()
