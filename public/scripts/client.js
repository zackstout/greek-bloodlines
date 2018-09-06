

import { text, plays } from '../data/stuff.js';

const arr = text.split('\n');

let first_char;
let allPeeps = [{name: 'dummy'}];

// ===========================================================================================
// GreenSock:

// Par is 1 or 2:
function parentClick(p_in) { // 2 is mother (on the right), 1 is father (left)
  const p_oth = p_in === 1 ? 2 : 1;
  // console.log('clicked ', p_in, findChar($(`#par${p_in}`).html()).plays2);

  const child_pos = $('#child').position();
  const par_pos = $(`#par${p_in}`).position();
  const top_diff = child_pos.top - par_pos.top;

  let left_diff = child_pos.left - par_pos.left;

  TweenLite.to($('#par1'), 1.7, {opacity: 0});
  TweenLite.to($('#par2'), 1.7, {opacity: 0});

  // Update child text:
  $('#child').html(findChar($(`#par${p_in}`).html()).name);
  // Update child_info:
  const new_info = findChar($(`#par${p_in}`).html()).plays2 ? findChar($(`#par${p_in}`).html()).plays2.map(p => `<p>${p.play}, ${p.author}</p>`).join('') : '';
  $('#child_info').html(new_info);

  // Hide child, move it to parent's position, start moving it toward its old position:
  TweenLite.set($('#child'), {opacity: 0});
  TweenLite.set($('#child'), {x: `-=${left_diff}px`, y: `-=${top_diff}px`} );
  TweenLite.to($('#child'), 1.7, {opacity: 1, x: `+=${left_diff}px`, y: `+=${top_diff}px`});

  // Change text of the parent elements:
  const par1 = findChar($(`#par${p_in}`).html()).parents[0];
  const par2 = findChar($(`#par${p_in}`).html()).parents.length > 1 ? findChar($(`#par${p_in}`).html()).parents[1] : '';

  $('#par1').html(par1);
  $('#par2').html(par2);

  TweenLite.to($('#par1'), 1.7, {opacity: 1});
  TweenLite.to($('#par2'), 1.7, {opacity: 1});
} // end parentClick function

// ===========================================================================================
// Document ready:

$(document).ready(function() {
  first_char = 'agamemnon';

  // Update child HTML:
  $('#child').html(first_char);

  // Click listeners:
  // When a parent is clicked, we want to alter CHILD's property to hold that value,
  // change the CHILD to live there, move it to previous CHILD-position, fade in newParents;
  $('#par1').on('click', function() {
    console.log($('#par1').html());
    parentClick(1);
  });


  $('#par2').on('click', function() {
    parentClick(2);
  });


  $('#child').on('click', function() {
    const $info = $('#child_info');

    // Fade in play info on click:
    TweenLite.to($info, 1.7, {opacity: 1}); // Add x:0 so we don't go out of screen.
  });


  readFromProlog(arr);

  attachPlays();


  // Issue: if you use '/' here, main page will direct here, so json will display in browser
  // and console.log's *won't* execute (???):
  $.get('/stuff').done(function(res) {
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

    addScraped(result, allPeeps);
    console.log("allPeeps, ", allPeeps);


    // Preparing for GreenSock:
    $('#par1').html(findChar(first_char).parents[0]);
    $('#par2').html(findChar(first_char).parents[1]);
    $('#child_info').html(findChar(first_char).plays2.map(p => `<p>${p.play}, ${p.author}</p>`).join(''));

  }).catch(function(err) {
    console.log(err);
  });

});

// ===========================================================================================
// Helper functions:

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


function findChar(char) {
  for (let i=0; i < allPeeps.length; i++) {
    if (allPeeps[i].name == char) {
      return allPeeps[i];
    }
  }
  return null;
}





// Doesnt seem to be getting any facts.....
// $.get('/stuff3').done(function(res) {
//   for (let i=0; i < res.length; i++) {
//     let line = res[i];
//     if (line) {
//
//       // NOTE: this could be a case of the confusing semantics of which they warn... We are getting all facts added to an empty-named item in allPeeps.
//       allPeeps.forEach(peep => {
//         if (line.includes(peep.name.toUpperCase() + peep.name.slice(1))) { // removing extraneous [0] here
//           let fact = line;
//           let date = res[i - 1];
//           if (!peep.facts) peep.facts = []; // adding this
//           peep.facts.push({line: fact, date: date});
//         }
//       });
//     }
//   }
//
//   console.log(allPeeps);
//
// }).catch(function(err) {
//   console.log(err);
// });




// chillin
