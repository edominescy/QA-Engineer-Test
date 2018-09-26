var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;
  
var driver_ff = new webdriver.Builder()
  .forBrowser('Firefox')
  .build();
  
var driver_chr = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
  
.qaTest(driver_ff);
.qaTest(driver_chr);

function qaTest(driver){
  driver.get('https://medseek-engineering.github.io/qa-engineer-test/');
  var heading = driver.findElement(By.class('cover-heading'));
    if (heading === 'Join the fight against bad bugs') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
    
    driver.findElement(By.linktext('Join the fight')).click();
    
    var formheading = driver.findElement(By.class('cover-heading mb-5'));
      if (formheading === 'Thank you for your interest') {
        console.log('Test passed');
        } else {
          console.log('Test failed');
      }
      
      driver.findElement(By.id('inputName')).sendkeys('Erin');
      driver.findElement(By.id('inputEmail1')).sendkeys('erindominescy@gmail.com');
      driver.findElement(By.id('inputJobTitle')).sendkeys('Job');
      driver.findElement(By.xpath('//input[@placeholder="Company"]')).sendkeys('Influence Health');
      var dropdown = new Select(driver.findElement(By.id('inputIndustry')));
      dropdown.selectByVisibleText('Computer Software');
}
