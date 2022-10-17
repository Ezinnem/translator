const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

let translator = new Translator();

suite('Functional Tests', () => {
    suite("Test difeerent post requests", function(){
        test("Translation with text and local fields: POST request to /api/trnaslate", function(done){
            chai.request(server).post("/api/translate").send({
                text: "Mangoes are my favorite fruit.",
                locale: "american-to-british"
            })
            .end(function (err, res){
                assert.equal(res.status, 200);
                assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.'
                )
            done();
        });
    });

    test("Translation with text and local fields: POST request to /api/trnaslate", function(done){
        chai.request(server).post("/api/translate").send({
            text: "Mangoes are my favorite fruit.",
            locale: "american-to-british"
        })
        .end(function (err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.'
            )
        done();
    });
});

test("Translation with text and local fields: POST request to /api/trnaslate", function(done){
    chai.request(server).post("/api/translate").send({
        text: "Mangoes are my favorite fruit.",
        locale: "american-to-british"
    })
    .end(function (err, res){
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.'
        )
    done();
});
});

test("Translation with text and local fields: POST request to /api/trnaslate", function(done){
    chai.request(server).post("/api/translate").send({
        text: "Mangoes are my favorite fruit.",
        locale: "american-to-british"
    })
    .end(function (err, res){
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.'
        )
    done();
});
});

test("Translation with text and local fields: POST request to /api/trnaslate", function(done){
    chai.request(server).post("/api/translate").send({
        text: "Mangoes are my favorite fruit.",
        locale: "american-to-british"
    })
    .end(function (err, res){
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.'
        )
    done();
});
});

test("Translation with text and local fields: POST request to /api/trnaslate", function(done){
    chai.request(server).post("/api/translate").send({
        text: "Mangoes are my favorite fruit.",
        locale: "american-to-british"
    })
    .end(function (err, res){
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.'
        )
    done();
});
});
});
});