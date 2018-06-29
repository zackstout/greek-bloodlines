
//dependencies:
const express = require('express');
const request = require('request');
const rp = require('request-promise');
const cheerio = require('cheerio');

//set up server:
const app = express();
const port = process.env.PORT || 6006;

function generateOptions(url) {
  return {
    uri: url,
    transform: function(body) {
      return cheerio.load(body);
    }
  };
}
//
// const options = {
//   uri: 'http://www.ancient-literature.com/characters.html',
//   transform: function (body) {
//     return cheerio.load(body);
//   }
// };
//
// const options2 = {
//   uri: 'http://www.personal.utulsa.edu/~marc-carlson/history/clam.html',
//   transform: function (body) {
//     return cheerio.load(body);
//   }
// };
//
// // Haven't worked with these ones yet:
// const options3 = {
//   uri: 'http://www.argyrou.net/homepage/Myths2.htm',
//   transform: function (body) {
//     return cheerio.load(body);
//   }
// };
//
// const options4 = {
//   uri: 'https://www.ancient-greece.org/resources/timeline.html',
//   transform: function (body) {
//     return cheerio.load(body);
//   }
// };


app.get('/stuff3', function(req, res) {
  const ops = generateOptions('http://www.argyrou.net/homepage/Myths2.htm');


  rp(ops).then(data => {
    let allStrings = [];

    // console.log("DATA BE HERE: ", data);
    data('p').each((i, elem) => {
      // console.log(elem);
      elem.children.forEach(child => {
        // console.log(child.data);
        // console.log(child);
        if (child.name == 'b') {
          // console.log('bold: ', child.children[0].data);
          allStrings.push(child.children[0].data);
        }
        if (child.data) {
          // console.log("data: ", child.data);
          allStrings.push(child.data);
        }
      });

    });
    // console.log(allStrings);
    res.send(allStrings);

  }).catch(err => {
    console.log(err);
  });
});


let allData = [];

app.get('/stuff', function(req, res) {
  console.log('we in');
  // Don't forget to clear, or will just push onto existing one each time until server restarts:
  allData = [];

  const ops = generateOptions('http://www.ancient-literature.com/characters.html');

  rp(ops).then(data => {

    // Interesting, 'data' is functioning like the '$' in jQuery:
    // Odd, we *do* need the i here, though i'm not sure why:
    data('a').each((i, elem) => {
      if (elem.children[0]) {
        allData.push(elem.children[0].data);
      }
    });

    res.send(allData);

  }).catch(err => console.log(err));
});


// Almost there:
app.get('/stuff2', function(req, res) {
  const ops = generateOptions('http://www.personal.utulsa.edu/~marc-carlson/history/clam.html');

  rp(ops).then(data => {
    data('font').each((i, elem) => {
      // console.log(elem);
      if (elem && elem.children) {
        let line = elem.children[0].data;
        console.log(line);
      }
    });
  });
  res.sendStatus(201);
});




app.use(express.static('public'));

//Listener
app.listen(port, function() {
  console.log('thx for listening on channel', port);
});
