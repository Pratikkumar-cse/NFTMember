const express = require('express')
const path = require('path')
const moment = require('moment')
const { HOST } = require('./src/constants')
const db = require('./src/database')

const PORT = process.env.PORT || 5000

const app = express()
  .set('port', PORT)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

// Static public files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  var metadata = {
    "name": "Arkius Members",
    "description": "Arkius Members are adorable aquatic beings primarily for demonstrating what can be done using the OpenSea platform. Adopt one today to try out all the OpenSea buying, selling, and bidding feature set.",
    "image": "https://openseacreatures.io/image.png",
    "external_link": "https://openseacreatures.io",
    // "seller_fee_basis_points": 100, //# Indicates a 1% seller fee.
    // "fee_recipient": "0x287A135702555F69BA6eE961f69ee60Fbb87A0e8" //# Where seller fees will be paid to.
}
  res.send(metadata);
})

app.get('/api/token/:token_id', function(req, res) {
  const tokenId = parseInt(req.params.token_id).toString()
  const token = db[tokenId]

  res.send(token);
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})


app.post('/api/token/:token_id', function(req, res) {
  const tokenId = parseInt(req.params.token_id).toString()
  const token = {
        "name": `Member ${tokenId}`,
        "description": `Arkius Member`,
        "image": `https://ipfs.io/ipfs/QmPey2czyZyiDMa6MJtoVRFKPHfUHrZawr1ZMoh9AhJU1y?filename=Screenshot_1.png`,
        "external_url": "",
        "attributes": [
            {
              "trait_type": "Identified",
              "value": req.body.Identified
            },
            {
              "trait_type": "Certifier",
              "value": req.body.Certifier
            },
            {
             "trait_type": "Entity",
             "value": req.body.Entity
            },

            {
              "trait_type": "Champion",
              "value": req.body.Champion
            },
            {
              "trait_type" : "MembershipToken",
              "value" : `Member ${tokenId}`
            },

            {
              "trait_type" : "Payment",
              "value" : {
                      "Paid": req.body.Paid,
                      "Amount": req.body.Amount
                    }
            },

            {
              "trait_type" : "Certifications",
              "value" : {
                      "Propose": 1,
                      "Modify": 0,
                      "Vote": 0,
                      "Comment_Review": 0
                    }
            }
          ],
        "properties": {
             "Identified": 0,
              "Certifier": 0,
              "Entity": 0,
              "Proposals_Petitions": 0,
              "EntityCertificateToken": 0,
              "Champion": 0,
              "Values": {
              "Propose": 1,
              "Modify": 0,
              "Vote": 0,
              "Comment_Review": 0
              }
            } ,

        "extra_attributes" : { 
                    "ForumPosts": {
                      "Create": 0,
                      "Modify": 0,
                      "Reply": 0,
                      "Vote": 0
                    },
                    "Budget": {
                      "Vote": 0,
                      "Modify": 0,
                      "Compensation": 0,
                      "Comment_review": 0,
                      "Propose": 0
        }
      },

    }
  db[tokenId] = token;

  res.send(token);
})
app.post('/api/token/update/:token_id', function(req, res) {
    const tokenId = parseInt(req.params.token_id).toString()
    const token = db[tokenId]
    var trait_type = req.body.trait_type;
    var value = req.body.value;
    for (var i=0; i<token.attributes.length(); i++) {
      if (token.attributes[i].trait_type == trait_type) {
        token.attributes[i].value = value;
      }
    }
    db[tokenId] = token;

    res.send(db[tokenId]);
  })

// app.post('/api/token/:token_id', function(req, res) {
//   const tokenId = parseInt(req.params.token_id).toString()
//   const Identified = req.body.Identified;
//   res.send(Identified);
// })

// app.post('/api/token/:token_id', function(req, res) {
//   const tokenId = parseInt(req.params.token_id).toString()
//   const Champion = req.body.Champion;
//   res.send(Champion);
// })

// app.post('/api/token/:token_id', function(req, res) {
//   const tokenId = parseInt(req.params.token_id).toString()
//   const Certifier = req.body.Certifier;
//   res.send(Certifier);
// })

// app.post('/api/token/:token_id', function(req, res) {
//   const tokenId = parseInt(req.params.token_id).toString()
//   const MembershipToken = req.body.MembershipToken;
//   res.send(MembershipToken);
// })

// app.post('/api/token/:token_id', function(req, res) {
//   const tokenId = parseInt(req.params.token_id).toString()
//   const Entity = req.body.Entity;
//   res.send(Entity);
// })

// app.post('/api/token/:token_id', function(req, res) {
//   const tokenId = parseInt(req.params.token_id).toString()
//   const Payment = req.body.Payment;
//   res.send(Payment);
// })

// app.post("/api/token",(request,response) => {
//   // var num1 = Number(req.body.num1);
//   // var num2 = Number(req.body.num2);
   
//   // var result = num1 + num2 ;
   
//   res.send("Addition - " + result);
//   console.log(request.body);
//   console.log("this is Post");
// });