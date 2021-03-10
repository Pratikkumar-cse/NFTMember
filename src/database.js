
    var nft_obj = {};

    function formatted_string(pad, str) {
      return (pad + str).slice(-pad.length);
    }
    // for(var i=1;i<4;i++) {
    //   nft_obj[Object.keys(nft_obj).length+1] = {
        // "name": "MemberApi",
        // "description": Arkius member,
        // "image": ``,
        // "external_url": "",
        // "attributes": [
        // ]
    //   }
    // }
    for(let i =1;i<100;i++){
      nft_obj[Object.keys(nft_obj).length + 1] = {
        "name": `Member ${i}`,
        "description": `Arkius Member`,
        "image": `https://ipfs.io/ipfs/QmPey2czyZyiDMa6MJtoVRFKPHfUHrZawr1ZMoh9AhJU1y?filename=Screenshot_1.png`,
        "external_url": "",
        "attributes": [
            {
              "trait_type": "Identified",
              "value": "true"
            },
            {
              "trait_type": "Certifier",
              "value": "false"
            },
            {
             "trait_type": "Entity",
             "value": "false"
            },

            {
              "trait_type": "Champion",
              "value": "true"
            },
            {
              "trait_type" : "MembershipToken",
              "value" : `Member ${i}`
            },

            {
              "trait_type" : "Payment",
              "value" : {
                      "Paid": 0,
                      "Amount": 0
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
            },
            {
              "trait_type" : "Identified",
              "value" : 0
            },

            {
              "trait_type": "ProposalsPetitions",
              "value": 0,
            },

            {
              "trait_type": "EntityCertificateToken",
              "value": 0,
            }

          ],

        "extra_attributes" : { 
             "Values": {
              "Propose": 1,
              "Modify": 0,
              "Vote": 0,
              "Comment_Review": 0
              } ,       
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
  }
    
    module.exports = nft_obj;
