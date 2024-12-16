import { remote } from 'webdriverio';

export const config = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    "appium:platformName": 'Android',
    "appium:deviceName": 'Pixel 8 API 33 ',
    "appium:platformVersion": '13',
    "appium:automationName": 'Flutter',
    "appium:app": '/Users/prabhakary/Documents/app-debug.apk',
    "appium:noReset": true,
    "appium:appPackage": 'com.example.counter_app',
    "appium:appActivity": 'com.example.counter_app.MainActivity',
    "appium:commandTimeout": 90000,  
  }
};