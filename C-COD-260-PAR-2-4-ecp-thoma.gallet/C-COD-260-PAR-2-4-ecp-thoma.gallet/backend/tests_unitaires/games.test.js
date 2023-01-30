process.env.NODE_ENV = 'test';
let mongoose = require("mongoose");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../app.js');
let should = chai.should();
const isObjectId = require("../middleware/isObjectId")
chai.should();
chai.use(chaiHttp);

describe('Games list', () => {

    /**
     * Test the GET route
     */
    describe("GET / games/all", () => {
        it("It should GET all games", (done) => {
            chai.request(server)
                .get("/games/all")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                });
        });

        it("It should NOT GET all games", (done) => {
            chai.request(server)
                .get("/game/all")
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                });
        });

    });
    /**
     * Test the GET (by ID) route
     */
     describe("GET / games/:id", () => {
        it("It should GET a game by ID", (done) => {
            const gameID = "634575e2cb51fe09b9f6e993";
            chai.request(server)
                .get("/games/" + gameID)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('_id');
                    response.body.should.have.property('name');
                    response.body.should.have.property('_id').eql("634575e2cb51fe09b9f6e993");
                    done();
                });
        });
    });

    it("It should NOT GET a game with invalid id", (done) => {
        const gameID = "633ee8bc1e242b7a6ba6c6";
        // const gameID = isObjectId;
        chai.request(server)
            .get("/games/" + gameID)
            .end((err, response) => {
                response.should.have.status(400);
                response.text.should.be.a('string');
                done();
            });
    });

    /**
     * Test the POST route
     */
     describe("POST / games/create", () => {
        it("It should create a game", (done) => {
            const game = {
                name: "Pokemon 2",
                price: 70,
                description: "Ajout test" 
            };
            chai.request(server)
                .post("/games/create")
                .send(game)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.text.should.be.a("string").eql('Game Created successfully');
                    // response.body.should.have.property("id");
                    // response.body.should.have.property("name").eql("Pokemon");
                    // response.body.should.have.property("price").eql(100);
                    // response.body.should.have.property("description").eq("Ajout test");
                    done();
                });
        });

        it("It should NOT create a game without the name property", (done) => {
            const game = {
                price: 100,
                description: "Ajout test" 
            };
            chai.request(server)
                .post("/games/create")
                .end((err, response) => {
                    response.should.have.status(500);
                    done();
                });
        });
    });


    /**
     * Test the PUT route
     */

     describe("PUT / games/:id/update", () => {
        it("It should update a game", (done) => {
            const gameID = "6348293783536293cf1464f9";
            const game = {
                name: "TEST",
                price: 100,
                description: "Modif test" 
            };
            chai.request(server)
                .put("/games/" + gameID + "/update")
                .send(game)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.text.should.be.a("string").eql('OK');
                    done();
                });
        });

    });

    /**
     * Test the DELETE route
     */

     describe("DELETE / games/:id/delete", () => {
        it("It should DELETE an existing game", (done) => {
            const gameID = "6348293783536293cf1464f9";
            chai.request(server)
                .delete("/games/" + gameID + "/delete")
                .end((err, response) => {
                    response.should.have.status(200);
                    done();
                });
        });

    });  

})

after(done => {
    let serverObj = server.listen()
    serverObj.close(done)
    setTimeout(function () {
        process.exit()
    }, 5000)
});