import { remote } from 'webdriverio';
import { byValueKey,byText } from 'appium-flutter-finder';  
const find = require('appium-flutter-finder');

import { config } from '../utils/appiumConfig';
import it, { before, describe } from 'node:test';


let driver: WebdriverIO.Browser;

describe('Flutter Counter app test', () => {
  before(async () => {
    driver = await remote(config);
  });

  it('TC: Increment counter by +1', async () => {

    const incrementButton = find.byText('+1');
    const counterValue = find.byText('counterValue');
    console.log(`Counter value befoore increment ${counterValue}`);

    await driver.elementClick(incrementButton);
    console.log(`Clicked on increment button`);

    const convertIncrementButton = Buffer.from(counterValue, 'base64').toString('utf-8');
    console.log(`Decoded counter value: ${convertIncrementButton}`);
   
    // Convert to a number
    const incrementedValue = parseInt(convertIncrementButton, 10);
    console.log(`Counter value as a number: ${incrementedValue}`);
   
    const resetButton = find.byText('Reset');
    await driver.elementClick(resetButton);
    console.log(`Clicked on reset button`);

    const decrementButton = find.byText('-1');
    await driver.elementClick(decrementButton);
    console.log(`Clicked on decrement button`);

    const convertDecrementButton = Buffer.from(counterValue, 'base64').toString('utf-8');
    console.log(`Converted DecrementButton counter value: ${convertDecrementButton}`);
       
    // Convert to a number
    const decrementedValue = parseInt(convertDecrementButton, 10);
    console.log(`Counter value as a number: ${decrementedValue}`);
       

   // const value = await driver.getElementText(counterValue);
  //  console.log(`Counter value is ${value}`);

   // if (value !== '1') {
    //  throw new Error(`Expected counter value to be '1' but got ${value}`);
    //}
  });
});
