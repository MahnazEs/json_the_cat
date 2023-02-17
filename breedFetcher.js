const request = require('request');



request('https://api.thecatapi.com/v1/breeds/search?q=siberian', (error, response, body) => {
  if (error) {
    console.log("error: ", error);
  }
  if (body) {
    const data = JSON.parse(body);
    console.log("information about breed Siberian: ", data);
    console.log(typeof data);
  } else {
    console.log("data not found");
  }
});