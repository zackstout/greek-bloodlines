
//dependencies:
const express = require('express');
const request = require('request');
const rp = require('request-promise');
const cheerio = require('cheerio');

//set up server:
const app = express();
const port = process.env.PORT || 6006;



const options = {
  uri: 'http://www.ancient-literature.com/characters.html',
  transform: function (body) {
    return cheerio.load(body);
  }
};

let allData = [];

app.get('/stuff', function(req, res) {
  console.log('we in');
  // don't forget to clear, or will just push onto existing one each time until server restarts:
  allData = [];

  rp(options).then(data => {
    // console.log(data);
    data('a').each((i, elem) => {
      // console.log(elem);
      if (elem.children[0]) {
        // console.log(elem.children[0].data);
        allData.push(elem.children[0].data);
      }
      // elem.children.forEach(child => console.log(child.children));
    });
    console.log(allData);

    res.send(allData);

  }).catch(err => console.log(err));
});




app.use(express.static('public'));

// var site = request('http://www.ancient-literature.com/characters.html');
// console.log(site);

//Listener
app.listen(port, function() {
  console.log('thx for listening on channel', port);
});
