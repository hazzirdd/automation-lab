const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const {addMovie} = require('./functions')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/')
})

afterAll(async () => {
    await driver.close()
})

test('Movie should be added', async () => {
    await addMovie(driver)

    await driver.sleep(3000)
})

test('Movie should be crossed off', async () =>{
    await crossOffMovie(driver)

    await driver.sleep(1000)
})

test('Movie should be deleted', async () => {
    await deleteMovie(driver)

    await driver.sleep(3000)
})