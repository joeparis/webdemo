let people = [{
    "firstName": "Joe",
    "lastName": "Paris",
    "occupation": "faculty",
    "favoriteNumber": 6,
    "getFullName": function () {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  {
    "firstName": "Sarah",
    "lastName": "Dressler",
    "occupation": "digital media specialist",
    "favoriteNumber": 45,
    "getFullName": function () {
      return this.firstName + " " + this.lastName;
    }
  },
  {
    "firstName": "Sekoia",
    "lastName": "Paris",
    "occupation": "student",
    "favoriteNumber": 11000010010101,
    "getFullName": function () {
      return this.firstName + " " + this.lastName;
    }
  }
];

// JavaScript Object Notation (JSON)

// const specialPara = document.getElementById("special");
// specialPara.innerHTML = "Hey there, all you people.";

// get all the paragraphs on the page
const allTheParas = document.getElementsByTagName("p");
// for (let i = 0; i < allTheParas.length; ++i) {
//   allTheParas[i].innerHTML += people[i].name;
// }


for (let index = 0; index < people.length; index++) {
  let newPara = document.createElement("p");
  // newPara.innerHTML = people[index].getFullName();
  newPara.innerHTML = people[index]["getFullName"]();
  const pageBody = document.getElementsByTagName("body");
  pageBody[0].appendChild(newPara);



}
