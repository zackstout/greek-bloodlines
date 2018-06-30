

import { text, plays } from './stuff.js';


$(document).ready(function() {

  readFromProlog(arr);
  // console.log(allPeeps);

  attachPlays();
  console.log(allPeeps);

  // $.get('/stuff2').done(function(res) {
  //   console.log("stuff2, ", res);
  //   // for (let i = 0; i < res.length; i++) {
  //   //   let line = res[i].children[0].data;
  //   //   console.log(line);
  //   // }
  // }).catch(function(err) {
  //   console.log(err);
  // });

  $.get('/stuff3').done(function(res) {
    // console.log("stuff3, ", res);
    // for (let i = 0; i < res.length; i++) {
    //   let line = res[i].children[0].data;
    //   console.log(line);
    // }
    for (let i=0; i < res.length; i++) {
      let line = res[i];
      if (line) {
        allPeeps.forEach(peep => {
          if (line.includes(peep.name[0].toUpperCase() + peep.name.slice(1))) {
            let fact = line;
            let date = res[i - 1];
            
            peep.facts.push({line: fact, date: date});
          }
        });
      }
    }

    console.log(allPeeps);

  }).catch(function(err) {
    console.log(err);
  });


  // Issue: if you use '/' here, main page will direct here, so json will display in browser and console.log's *won't* execute (???):
  $.get('/stuff').done(function(res) {
    // console.log("stuff, ", res);

    // Each element of result array will be an object with name and plays properties:
    let result = [];

    let char = '';
    let plays = [];

    // Checking for weird '?' character that signifies italics:
    // Ok so i think the rules are... If we hit one with italics, then *if* the previous one is not in italics, add it as the author. Then we'll just skip all the unnecessary "Oresteia trilogy" notes.
    // Second rule: If you're (not in italics and) followed by something that's *not* italics, you're a new character.
    // skip first 12 lines:
    for (let i=12; i < res.length - 1; i++) {
      let line = res[i];

      // We've got a new character:
      if (res[i+1] && line && line.charCodeAt(0) !== 65533 && res[i+1].charCodeAt(0) !== 65533) {
        result.push({char: char, plays: plays});
        char = line;
        plays = [];
      }

      if (line && line.charCodeAt(0) === 65533 && res[i-1].charCodeAt(0) !== 65533) {
        let play = line.slice(1, line.length - 1);
        let author = res[i-1];
        plays.push({play: play, author: author});
      }

    }

    console.log("result, ", result);

    addScraped(result, allPeeps);

    console.log("allPeeps, ", allPeeps);

  }).catch(function(err) {
    console.log(err);
  });

});



function addScraped(chars, arr) {
  chars.forEach(char => {
    // console.log(char);
    const lowerChar = char.char == '' ? '' : char.char[0].toLowerCase() + char.char.slice(1);

    let broke = false;
    for (let i=0; i < arr.length; i++) {
      if (arr[i].name == lowerChar) {
        arr[i].plays2 = char.plays;
        broke = true;
        break;
      }
    }

    if (!broke) {
      arr.push({
        name: lowerChar,
        plays2: char.plays
      });
    }

  });
}




const arr = text.split('\n');
// console.log(arr);

let allPeeps = [{name: 'dummy'}];


// Creating allPeeps object (This is so hideous):
function readFromProlog(arr) {
  arr.forEach(item => {
    if (item.includes('parent')) {
      var parent = item.slice(item.indexOf('(') + 1, item.indexOf(','));
      var child = item.slice(item.indexOf(',') + 2, item.indexOf(')'));
      // console.log(parent, child, parent.length, child.length);

      if (!checkForName(allPeeps, parent)) {
        var person = {};
        person.name = parent;
        person.children = [child];
        allPeeps.push(person);
      } else {
        if (allPeeps[checkForName(allPeeps, parent)].children) {
          allPeeps[checkForName(allPeeps, parent)].children.push(child);
        } else {
          allPeeps[checkForName(allPeeps, parent)].children = [child];
        }
      }

      if (!checkForName(allPeeps, child)) {
        var kid = {};
        kid.name = child;
        kid.parents = [parent];
        allPeeps.push(kid);
      } else {
        if (allPeeps[checkForName(allPeeps, child)].parents) {
          allPeeps[checkForName(allPeeps, child)].parents.push(parent);
        } else {
          allPeeps[checkForName(allPeeps, child)].parents = [parent];
        }
      }
    }
  });
}



// There will be a bug if index is 0, because will look falsy. Ok i think we fixed it.
function checkForName(arr, name) {
  for (var i=0; i < arr.length; i++) {
    if (arr[i].name == name) return i;
  }
  return false;
}



function attachPlays() {
  allPeeps.forEach(peep => peep.plays = []); // ...is this needed?
  allPeeps.forEach(peep => peep.facts = []); // ...is this needed?

  allPeeps.forEach(peep => {
    plays.forEach(play => {
      play.characters.forEach(char => {
        if (peep.name[0].toUpperCase() + peep.name.substring(1) == char) {
          peep.plays.push(play);
        }
      });
    });
  });
}








// chillin
