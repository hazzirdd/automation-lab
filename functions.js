const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('1917');

    await driver.findElement(By.xpath('//button[text()="Add"]')).click()

    await driver.findElement(By.xpath('//input')).sendKeys('Shrek');

    await driver.findElement(By.xpath('//button[text()="Add"]')).click()

    const movie = await driver.findElement(By.xpath('//li/span[text()="1917"]'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()
}


crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath('//li/span')).click()
}

deleteMovie = async (driver) => {
    await driver.findElement(By.id('Shrek')).click()
}

(By.name('q'))

module.exports = {
    addMovie,
    crossOffMovie,
    deleteMovie
}