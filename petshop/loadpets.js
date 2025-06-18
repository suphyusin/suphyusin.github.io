 

const pets = [ 

  {"name": "Buddy", "type": "dog", "age": 3, "img": "img/dogs/dog01.jpg"}, 

  {"name": "Buddy", "type": "dog", "age": 3, "img": "img/dogs/dog02.jpg"}, 

  {"name": "Whiskers", "type": "cat", "age": 2, "img": "img/cats/cat01.jpg"}, 

  {"name": "Mittens", "type": "cat", "age": 2, "img": "img/cats/cat02.jpg"}, 

  {"name": "Pepsi", "type": "bird", "age": 1, "img": "img/birds/bird01.jpg"}, 

  {"name": "Bobo", "type": "bird", "age": 1, "img": "img/birds/bird02.jpg"}, 

  {"name": "Steve", "type": "capybara", "age": 1, "img": "img/capybaras/capybara01.jpg"}, 

  {"name": "Oggy", "type": "capybara", "age": 1, "img": "img/capybaras/capybara01.jpg"}, 
  
] 

 

function loadPets() {
  console.log("Loading pets...");
  const petList = $("#pet-list");
  pets.forEach((pet) => {
    const petItem = $("<div>").addClass("pet").html(`
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button class="adopt-btn">Adopt Now</button>
    `);
    petList.append(petItem);
  });

  // Attach click handler using event delegation
  petList.on("click", ".adopt-btn", adoptPet);

  // install event handler for pet type
  $('input[name="pet-type"]').on("change", function () {
    const selectedType = $(this).val();
    filterPets();

  });
}
function filterPets() {

  console.log("Selected pet type:", $('input[name="pet-type"]:checked'));
  const types = $('input[name="pet-type"]:checked')
    .map(function () {
      return $(this).val();
    })
    .get();

  console.log(types);

  const filteredPets = pets.filter((pet) => types.includes(pet.type));
  console.log(filteredPets);

  const petList = $("#pet-list");
  petList.empty(); // Clear the existing pets
  filteredPets.forEach((pet) => {
    const petItem = $("<div>").addClass("pet").html(`
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button class="adopt-btn">Adopt Now</button>
    `);
    petList.append(petItem);
  });
}

$(document).ready(loadPets);