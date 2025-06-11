 

const pets = [ 

  {"name": "Buddy", "type": "Dog", "age": 3, "img": "img/dogs/dog01.jpg"}, 

  {"name": "Buddy", "type": "Dog", "age": 3, "img": "img/dogs/dog02.jpg"}, 

  {"name": "Whiskers", "type": "Cat", "age": 2, "img": "img/cats/cat01.jpg"}, 

  {"name": "Mittens", "type": "Cat", "age": 2, "img": "img/cats/cat02.jpg"}, 

  {"name": "Pepsi", "type": "bird", "age": 1, "img": "img/birds/bird01.jpg"}, 

  {"name": "Bobo", "type": "Bird", "age": 1, "img": "img/birds/bird02.jpg"}, 
  
] 

 

function loadPets() { 

  console.log('Loading pets...'); 

  const petList = document.querySelector('.pet-list'); 

  pets.forEach(pet => { 

    const petItem = document.createElement('div'); 

    petItem.className = 'pet'; 

    petItem.innerHTML = ` 

      <img src="${pet.img}" alt="${pet.name}"> 

      <h3>${pet.name}</h3> 

      <p>Type: ${pet.type}</p> 

      <p>Age: ${pet.age} years</p> 

      <button onclick="adoptPet()">Adopt Now</button> 

  `; 

    petList.appendChild(petItem); 

  }); 

} 

document.addEventListener('DOMContentLoaded', loadPets); 

console.log('Pets loaded successfully.'); 