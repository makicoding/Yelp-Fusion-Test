'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = '28h_TF5B3iOa8CBn1FW6DhEMUAmdunA2MsoL1tAtujspOU6IK34wsaV3d40UqpoLnv1-NVWVH7um28z1FMqPv64n_GGe6A4BiI3Dx-ybytgUeSVNXTFH98FfRoYSXXYx';

const searchRequest = {
  // term:'Four Barrel Coffee',
  term:'Day care',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});