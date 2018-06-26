
var text = `
parent(tantalus, pelops).
parent(tantalus, niobe).
parent(pelops, pittheus).
parent(pelops, thyestes).
parent(pelops, atreus).
parent(thyestes, aegisthus).
parent(atreus, agamemnon).
parent(atreus, menelaus).
parent(pittheus, aethra).
parent(aegeus, theseus).
parent(theseus, hippolytus).
parent(menelaus, hermione).
parent(agamemnon, electra).
parent(agamemnon, iphigenia).
parent(agamemnon, orestes).
parent(cadmus, semele).
parent(cadmus, agave).
parent(pentheus, menoeceus).
parent(menoeceus, jocasta).
parent(menoeceus, creon).
parent(creon, haemon).
parent(laius, oedipus).
parent(oedipus, eteocles).
parent(oedipus, polyneices).
parent(oedipus, antigone).
parent(oedipus, ismene).
parent(cronus, hestia).
parent(cronus, zeus).
parent(cronus, hades).
parent(cronus, hera).
parent(cronus, demeter).
parent(cronus, poseidon).
parent(zeus, athena).
parent(zeus, persephone).
parent(zeus, muses).
parent(zeus, ares).
parent(zeus, hebe).
parent(zeus, hephaestus).
parent(zeus, aphrodite).
parent(zeus, apollo).
parent(zeus, artemis).
parent(zeus, hermes).
parent(zeus, dionysus).
parent(zeus, tantalus).
parent(zeus, heracles).
parent(zeus, epaphus).
parent(zeus, minos).
parent(zeus, rhadamanthus).
parent(epaphus, lybia).
parent(poseidon, agenor).
parent(agenor, europa).
parent(agenor, cadmus).
parent(minos, androgeus).
parent(minos, ariadne).
parent(minos, phaedra).
parent(minos, catreus).
parent(catreus, aerope).
parent(leto, apollo).
parent(leto, artemis).
parent(dione, aphrodite).
parent(demeter, persephone).
parent(mnemosyne, muses).
parent(hera, hephaestus).
parent(hera, hebe).
parent(hera, ares).
parent(alcmene, heracles).
parent(europa, rhadamanthus).
parent(europa, minos).
parent(harmonia, semele).
parent(harmonia, agave).
parent(lybia, agenor).
parent(io, epaphus).
parent(hippodamia, thyestes).
parent(hippodamia, pittheus).
parent(hippodamia, atreus).
parent(aerope, menelaus).
parent(aerope, agamemnon).
parent(helen, hermione).
parent(aethra, theseus).
parent(clytemnestra, orestes).
parent(clytemnestra, electra).
parent(clytemnestra, iphigenia).
parent(jocasta, oedipus).
parent(agave, pentheus).
parent(semele, dionysus).
parent(jocasta, polyneices).
parent(jocasta, antigone).
parent(jocasta, ismene).
parent(jocasta, eteocles).
parent(rhea, hestia).
parent(rhea, zeus).
parent(rhea, hades).
parent(rhea, hera).
parent(rhea, demeter).
parent(rhea, poseidon).
parent(uranus, hyperion).
parent(uranus, oceanus).
parent(uranus, coeus).
parent(uranus, cronus).
parent(uranus, rhea).
parent(uranus, iaepetus).
parent(uranus, mnemosyne).
parent(uranus, tethys).
parent(gaia, hyperion).
parent(gaia, oceanus).
parent(gaia, coeus).
parent(gaia, cronus).
parent(gaia, rhea).
parent(gaia, iaepetus).
parent(gaia, mnemosyne).
parent(gaia, tethys).
parent(uranus, theia).
parent(gaia, theia).
parent(uranus, phoebe).
parent(gaia, phoebe).
parent(hyperion, selene).
parent(theia, selene).
parent(hyperion, helios).
parent(theia, helios).
parent(hyperion, eos).
parent(theia, eos).
parent(phoebe, leto).
parent(coeus, leto).
parent(iapetus, atlas).
parent(clymene, atlas).
parent(iapetus, prometheus).
parent(clymene, prometheus).


female(aethra).
female(semele).
female(agave).
female(jocasta).
female(antigone).
female(ismene).
female(iphigenia).
female(electra).
female(hermione).
female(muses).
female(persephone).
female(demeter).
female(hestia).
female(athena).
female(hera).
female(hebe).
female(aphrodite).
female(artemis).
female(hermione).
female(hermione).
female(rhadamanthus).
female(lybia).
female(europa).
female(ariadne).
female(phaedra).
female(aerope).
female(leto).
female(dione).
female(mnemosyne).
female(alcmene).
female(harmonia).
female(io).
female(hippodamia).
female(helen).
female(aethra).
female(clytemnestra).
female(rhea).


male(tantalus).
male(pelops).
male(pittheus).
male(thyestes).
male(atreus).
male(aegisthus).
male(agamemnon).
male(menelaus).
male(creon).
male(cadmus).
male(orestes).
male(aegeus).
male(hippolytus).
male(theseus).
male(menoeceus).
male(pentheus).
male(haemon).
male(laius).
male(oedipus).
male(eteocles).
male(polyneices).
male(cronus).
male(poseidon).
male(hades).
male(zeus).
male(ares).
male(apollo).
male(hephaestus).
male(hermes).
male(dionysus).
male(heracles).
male(epaphus).
male(minos).
male(agenor).
male(catreus).
male(androgeus).


olympian(zeus).
olympian(hera).
olympian(poseidon).
olympian(demeter).
olympian(athena).
olympian(apollo).
olympian(artemis).
olympian(ares).
olympian(aphrodite).
olympian(hephaestus).
olympian(hermes).
olympian(hestia).
olympian(dionysus).


godof(zeus, order).
godof(hera, marriage).
godof(poseidon, seas).
godof(poseidon, horses).
godof(demeter, fertility).
godof(athena, wisdom).
godof(apollo, prophecy).
godof(apollo, light).
godof(apollo, philosophy).
godof(artemis, hunt).
godof(artemis, moon).
godof(artemis, wilderness).
godof(ares, war).
godof(aphrodite, beauty).
godof(aphrodite, desire).
godof(hephaestus, craftmanship).
godof(hephaestus, invention).
godof(hermes, games).
godof(hermes, communication).
godof(hermes, eloquence).
godof(hestia, hearth).
godof(dionysus, madness).


titan(hyperion).
titan(oceanus).
titan(coeus).
titan(cronus).
titan(rhea).
titan(phoebe).
titan(iaepetus).
titan(mnemosyne).
titan(tethys).
titan(theia).
titan(helios).
titan(selene).
titan(eos).
titan(leto).
titan(atlas).
titan(prometheus).
titan(themis).
`;

var plays = [
  {name: "Philoctetes", characters: ["Odysseus", "Neoptolemus", 'Philoctetes', 'Heracles']},
  {name: "Oedipus Rex", characters: ["Oedipus", "Jocasta", 'Creon', 'Tiresias', 'Shepherd']},
  {name: "Oedipus at Colonus", characters: ["Oedipus", "Antigone", 'Ismene', 'Theseus', 'Creon', 'Polynices']},
  {name: "Trachae", characters: ["Deianeira", "Heracles", 'Iole', 'Lichas', 'Hyllus']},
  {name: "Philoctetes", characters: ["Odysseus", "Neoptolemus", 'Philoctetes', 'Heracles']},
  {name: "Electra", characters: ["Electra", "Orestes", 'Chrysothemis', 'Clytemnestra', 'Aegisthus', '~Castor']},
  {name: "Ajax", characters: ["Ajax", "Athena", 'Odysseus', 'Tecmessa', 'Teucer', 'Menelaus', 'Agamemnon']},
  {name: "Antigone", characters: ["Antigone", "Creon", 'Haemon', 'Eurydice', 'Ismene', 'Tiresias']},
  {name: "Amphitryon", characters: ["Amphitryon", "Alcmene"]},


  {name: "Alcestis", characters: ["Alcestis", "Admetus", 'Apollo', 'Death', 'Heracles']},
  {name: "Andromache", characters: ["Andromache", "Hermione", 'Menelaus', 'Orestes', 'Thetis', 'Peleus']},
  {name: "Bacchae", characters: ["Dionysus", "Tiresias", 'Cadmus', 'Pentheus', 'Agave']},
  {name: "Heraclidae", characters: ["Iolaus", "Macaria", 'Demophon', 'Alcmene', 'Eurystheus']},
  {name: "Hecuba", characters: ["Hecuba", "Polydorus", 'Polyxena', 'Odysseus', 'Agamemnon', 'Polymestor', 'Talthybius']},
  {name: "Helen", characters: ["Helen", "Teucer", 'Menelaus', 'Theonoe', 'Castor']},
  {name: "Hippolytus", characters: ["Hippolytus", "Aphrodite", 'Phaedra', 'Theseus', 'Artemis']},
  {name: "Helen", characters: ["Helen", "Teucer", 'Menelaus', 'Theonoe', 'Castor']},
  {name: "Heracles", characters: ["Heracles", "Amphitryon", 'Megara', 'Lycus', 'Theseus']},
  {name: "Ion", characters: ["Ion", "Hermes", 'Xuthus', 'Athena', 'Creusa']},
  {name: "Iphigenia in Aulis", characters: ["Iphigenia", "Menelaus", 'Agamemnon', 'Clytemnestra', 'Achilles']},
  {name: "Iphigenia in Tauris", characters: ["Iphigenia", "Orestes", 'Pylades', 'Thoas', 'Athena']},
  {name: "Medea", characters: ["Medea", "Jason", 'Aegeus', 'Creon']},
  {name: "Phoenician Women", characters: ["Jocasta", "Antigone", 'Polyneices', 'Eteocles', 'Creon', 'Tiresias', 'Menoeceus', 'Oedipus']},
  {name: "Trojan Women", characters: ["Hecuba", "Cassandra", 'Andromache', 'Talthybius', 'Menelaus', 'Helen', 'Poseidon', 'Athena']},

  {name: "Rhesus", characters: []},
  {name: "The Suppliants", characters: []},
  {name: "Orestes", characters: []},
  {name: "Cyclops", characters: []},
];



var arr = text.split('\n');
console.log(arr);

var allPeeps = [{name: 'dummy'}];

// This is so hideous:
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
      }    }
  }
});

console.log(allPeeps);

// There will be a bug if index is 0, because will look falsy.
function checkForName(arr, name) {
  for (var i=0; i < arr.length; i++) {
    if (arr[i].name == name) return i;
  }
  return false;
}


function attachPlays() {
  allPeeps.forEach(peep => peep.plays = []);

  allPeeps.forEach(peep => {
    // console.log(peep.name.toUpperCase());
    plays.forEach(play => {
      play.characters.forEach(char => {
        // console.log(char);

        if (peep.name[0].toUpperCase() + peep.name.substring(1) == char) {
          peep.plays.push(play);
        }
      });
    });
  });
}

attachPlays();
console.log(allPeeps);






// chillin
