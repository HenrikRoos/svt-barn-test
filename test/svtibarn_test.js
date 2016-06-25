var assert = require('assert');
var By = require('selenium-webdriver').By;
var test = require('selenium-webdriver/testing');
var phantomjs = require('selenium-webdriver/phantomjs');
// var chrome = require('selenium-webdriver/chrome');

test.describe('Verifiera att det går att komma till barnplay-sidan från startsidan', function () {
  this.timeout(18000);
  var driver;
  test.before(function () {
    driver = new phantomjs.Driver();
  });
  test.after(function () {
    driver.quit();
  });
  test.it('Kan komma till barnkanalen-sidan', function () {
    driver.get('http://www.svt.se/barnkanalen');
    assert(driver.isElementPresent(By.xpath('//div[@alt="Barnkanalen"]')), 'Kom inte fram till barnkanalen-sidan');
  });
  test.it('Kan trycka på barnplay knappen', function () {
    driver.get('http://www.svt.se/barnkanalen');
    var barnplayButtom = By.xpath('//a[@data-rt="link.mainNav.programao"]');
    assert(driver.isElementPresent(barnplayButtom), 'Barnplay knappen finns inte');
    driver.findElement(barnplayButtom).click();
  });
  test.it('Kom till barnplay sidan', function () {
    var barnplay = driver.isElementPresent(By.id('__barnplay'));
    assert(barnplay, 'Du kom inte fram till barnplay sidan');
  });
});
