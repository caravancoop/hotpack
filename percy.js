const PercyScript = require('@percy/script')
const url = 'https://0.0.0.0:8080/'

PercyScript.run(async (page, percySnapshot) => {
  await page.goto(url)
  await percySnapshot('homepage')
})
