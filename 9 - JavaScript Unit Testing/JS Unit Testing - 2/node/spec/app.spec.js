const request = require("request");

describe("test endpoint with request and jasmine",()=>{
    var server;
    var data = {};
    var data_2={};
    beforeAll((done2)=>{
        server = require("../app");

        // request.get("http://localhost:3000/node",(error,res,body)=>{
        //   data.status = res.statusCode;
        //   data.body = body
        //   done()
        // })

        request.get("http://localhost:3000/",(error,res,body)=>{
            data_2.status = res.statusCode;
            data_2.body = body
            done2()
        })
    })
    
    afterAll(()=>{
        server.close()
    })

    // it("",()=>{
    // expect(data.status).toEqual(200)
    // expect(data.body).toEqual("Hello MEARN iTi CAIRO")
    // })

    it("",()=>{
        expect(data_2.status).toEqual(200)
        expect(data_2.body).toEqual("hello world")
        })
})