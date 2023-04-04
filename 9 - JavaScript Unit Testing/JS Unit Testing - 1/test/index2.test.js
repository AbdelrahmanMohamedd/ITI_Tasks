const {createArray}=require("../index2");
const {assert,expect} = require("chai");
const should = require("chai").should();


///////////////////////// Problem 2 ///////////////////////////////////


describe.skip("createArray",()=>{
    it("check type",()=>{
        expect(createArray(5)).to.be.a('array');
        assert.isArray(createArray(5))
        createArray(5).should.be.a('Array');
    })
    it("should return an array with the correct length & includes the number 1",()=>{
        expect(createArray(3)).lengthOf(3).include(1);
        assert.lengthOf(createArray(3),3);
        assert.include(createArray(3), 1);
        createArray(3).should.lengthOf(3).include(1)
    })

    it('should delay the testing process by 5 seconds', () => {
            setTimeout(() => {
            expect(createArray(2)).to.have.lengthOf(2);
            run();
        }, 5000);
    });

    it('should use the assert style of testing', () => {
        const result = createArray(4);
        assert.isArray(result);
    });

});

setTimeout(() => {
    run()
}, 3000);