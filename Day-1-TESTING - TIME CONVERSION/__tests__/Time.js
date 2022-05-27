const {describe,expect,test} = require("@jest/globals");
const convertMs = require("../index.js");

describe("Checking time convertor",function(){
    test("convert to 5 seconds",function(){
        expect(convertMs(5200)).toBe('5 seconds')
    })

    test("convert to 1 minute",function(){
        expect(convertMs(60000)).toBe('1 minute')
    })

    test("convert to 3 minutes",function(){
        expect(convertMs(120000)).toBe('2 minutes')
    })

    test("convert to 3 minutes 20 seconds",function(){
        expect(convertMs(260000)).toBe('4 minutes 20 seconds')
    })
})