import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    // copy liveserver link and replace localhost:port only
    // await driver.get('http://localhost:5500/exercises/automation/movieList/index.html')
    // await driver.get('http://localhost:5500/index.html')
    await driver.get('http://127.0.0.1:5500/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Adds a Movie', async ()=> {
    // let movieInput = await driver.findElement(By.xpath('//input'));
    // let movieInput = await driver.findElement(By.id('input'));
    let movieInput = await driver.findElement(By.name('q'))
    // await movieInput.sendKeys('Nacho Libre\n');
    await movieInput.sendKeys('Nacho Libre')
    let movieBtn = await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//span')).click()
    await driver.findElement(By.id('NachoLibre')).click()
    await driver.sleep(2000)
});
