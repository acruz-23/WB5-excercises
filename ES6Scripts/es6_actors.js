let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];
const member187 = academyMembers.find((actor) => actor.memID === 187);
console.log(member187.name);
console.log("-".repeat(30));

console.log("In at least 3 films:");
const inThreeFilms = academyMembers.filter((actor) => actor.films.length >= 3);
inThreeFilms.forEach((actor) => console.log(actor.name));
console.log("-".repeat(30));

console.log("Name starts with Bob:");
const nameStartsWithBob = academyMembers.filter(
  (actor) => actor.name.indexOf("Bob") === 0
);
nameStartsWithBob.forEach((bob) => console.log(bob.name));
console.log("-".repeat(30));

console.log("Members with films that start with A");
const actorsInA = academyMembers.filter((actor) =>
  actor.films.find((film) => film.startsWith("A"))
);
actorsInA.forEach((actor) => console.log(actor.name));
