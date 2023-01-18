const pet = {
  petsName: "Bobby",
  species: "dog",
  age: 4,
  petCute: true,
  favoritFood: ["ham", "dog treats", "cheese", "liver paste"],
  birthday: function (march4) {
    pet.age = 5;
  },
  owner: {
    firstName: "Stine",
    lastName: "Nygren",
    ownerAge: 25,
  },
  dogFriends: [
    {
      name: "Bella",
      age: 3,
    },
    {
      name: "Lilly",
      age: 1,
    },
    {
      name: "Bella2",
      age: 7,
    },
    {
      name: "Tequila",
      age: 10,
    },
  ],
};

let imgArray = [
  "img/bobby1.jpg",
  "img/bobby2.jpg",
  "img/bobby3.jpg",
  "img/bobby4.jpg",
  "img/bobby5.jpg",
  "img/bobby6.jpg",
  "img/bobby7.jpg",
  "img/bobby8.jpg",
  "img/bobby9.jpg",
];

let currentIndex = 0;
let imgDuration = 3000;

function slideShow() {
  document.getElementById("image1").src = imgArray[currentIndex];
  currentIndex++;
  if (currentIndex == imgArray.length) {
    currentIndex = 0;
  }
  setTimeout("slideShow()", imgDuration);
}
slideShow();
