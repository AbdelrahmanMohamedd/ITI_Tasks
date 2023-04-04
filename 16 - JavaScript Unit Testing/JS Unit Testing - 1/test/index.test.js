const {capitalizeText} = require("../index")
const {assert,expect} = require("chai");
const should = require("chai").should();

///////////////////////// Problem 1 ///////////////////////////////////

describe("test type of variable",()=>{
    it("check type",()=>{
        expect(capitalizeText("abdo")).to.be.a('string');
        assert.isString(capitalizeText("abdo"))
        capitalizeText("abdo").should.be.a('string');
    });

    it("captilaize",()=>{
        expect(capitalizeText("abdo")).equal("HAMADA");
        assert.equal(capitalizeText("abdo"),"HAMADA")
        capitalizeText("abdo").should.to.equal("HAMADA")
    });

    it("check input",()=>{
        expect(()=>capitalizeText(12)).to.throw(TypeError,"parameter should be string");
        assert.throw(()=>capitalizeText(12),TypeError,"parameter should be string");
        (()=>capitalizeText(12)).should.to.throw(TypeError,"parameter should be string")
    });
});



describe("test type of variable",()=>{
    it("check type",()=>{
        expect(capitalizeText("abdo")).to.be.a('string');
        assert.isString(capitalizeText("abdo"))
        capitalizeText("abdo").should.be.a('string');
    })});

    setTimeout(() => {
        run()
    }, 3000);
