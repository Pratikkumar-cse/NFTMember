    // var nft_obj = {};

    // function formatted_string(pad, str) {
    //   return (pad+str).slice(-pad.length);
    // }

    // for(var i=1;i<101;i++) {
    //   nft_obj[Object.keys(nft_obj).length+1] = {
    //     Membership_token: 098789,
    //     Payment:{
    //       Paid: true,
    //       Amount: 0000
    //     },
    //     Identified: true,
    //     Certifier: true,
    //     Entity: true,
    //     values:{
    //       Propose: " ",
    //       Modify: true,
    //       Vote: true, // (vote can be only true, if identified and paid both is true)
    //       Comment: true,
    //     },
    //     Certifications:{
    //       Propose: " ",
    //       Modify: " ",
    //       Vote: " ",
    //       Comment: " ",
    //     },
    //     Forum_Posts:{
    //       Create: " ",
    //       Modify: " ",
    //       Reply: " ",
    //       Vote: " ",
    //     },
    //     Proposal: " ",
    //     Entity_certificate_token:  " ",
    //     Champion : true;
    //     Budget:{
    //       Vote: " ",
    //       modify: " ",
    //       compensation: " ",
    //       comment: " ",
    //       propose: " ",
    //     }
    //   }
    // }

    // module.exports = nft_obj;
    // // = {

    // //   "1": {
    // //     "name": "Royale Rarities - Queen of Queens (Origins Series)",
    // //     "description": "Origins Series (#001 of 36)",
    // //     "image": "https://s3.amazonaws.com/royale.finance/queen/royaleNFT-queen01.jpg",
    // //     "external_url": "",
    // //     "attributes": [
    // //     ]
    // //   }

    // // }


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
    for (var i = 1; i < 100; i++) {
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
            }
          ],

        "properties": {
             "Identified": 0,
              "Certifier": 0,
              "Entity": 0,
              "Values": {
              "Propose": 1,
              "Modify": 0,
              "Vote": 0,
              "Comment_Review": 0
              }
            } ,

        "extra_attributes" : {
                    // "Identified": 0,
                    // "Certifier": 0,
                    // "Entity": 0,
                    // "Values": {
                    //   "Propose": 1,
                    //   "Modify": 0,
                    //   "Vote": 0,
                    //   "Comment_Review": 0
                    // },
                    
                    "ForumPosts": {
                      "Create": 0,
                      "Modify": 0,
                      "Reply": 0,
                      "Vote": 0
                    },
                    "Proposals_Petitions": 0,
                    "EntityCertificateToken": 0,
                    "Champion": 0,
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
    // = {
    //   "1": {
    //     "name": "Royale Rarities - Queen of Queens (Origins Series)",
    //     "description": "Origins Series (#001 of 36)",
    //     "image": "https://s3.amazonaws.com/royale.finance/queen/royaleNFT-queen01.jpg",
    //     "external_url": "",
    //     "attributes": [
    //     ]
    //   }
    // }