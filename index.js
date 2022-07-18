let houses = JSON.parse(localStorage.getItem("houses"))
? JSON.parse(localStorage.getItem("houses")):[
    {id:1,
        image: 'https://picsum.photos/id/1008/200/300',
     title:'Beautiful apartment',
     price: '4500',
     address:'314 South street, New York,3789',
     bedrooms:'3',
     bathrooms:'2',
     garage:'1',
     size:'1200',
     type:'Apartment',
     user:' Nugatto Louw',
     datePosted:'05/09/2021',
     yearBuilt:'2018',
    },

    {id:2,
        image:'https://picsum.photos/id/164/200/300',
    title:'Cozy Apartment',
    price: '3500',
    address:'852 Left street, USA, 5861',
    bedrooms:'3',
    bathrooms:'2',
    garage:'1',
    size:'1200',
    type:'Apartment',
    user:' Nugatto Louw',
    datePosted:'05/04/2020',
    yearBuilt:'2017',
   },
   {id:3,
    image: 'https://picsum.photos/id/1062/200/300',
   title:'Warm Apartment',
   price: '5500',
   address:'586 West St, Miami, FL 33135, USA',
   bedrooms:'2',
   bathrooms:'2',
   garage:'1',
   size:'1200',
   type:'Apartment',
   user:' Nugatto Louw',
   datePosted:'09/05/2022',
   yearBuilt:'2018',
  },
  {id:4,
    image: 'https://picsum.photos/id/238/200/300',
  title:'Fresh AiryApartment',
  price: '3500',
  address:'92 North street, Chicago USA',
  bedrooms:'3',
  bathrooms:'2',
  garage:'1',
  size:'1200',
  type:'Apartment',
  user:' Samuel Palmer',
  datePosted:'04/04/2020',
  yearBuilt:'2016',
 },
 {id:5,
    image: 'https://picsum.photos/id/221/200/300',
 title:'Fully Furnished Apartment',
 price: '6000',
 address:'2436 SW 8th St, Los Angeles, FL 33135, USA',
 bedrooms:'2',
 bathrooms:'4',
 garage:'1',
 size:'1200',
 type:'Apartment',
 user:' Nugatto Louwr',
 datePosted:'04/04/2020',
 yearBuilt:'2016',
},
{id:6,
    image: 'https://picsum.photos/id/556/200/300',
     title:'Fancy House',
     price: '6000',
     address:'2436 SW 8th St, Miami, FL 33135, USA',
     bedrooms:'5',
     bathrooms:'2',
     garage:'1',
     size:'1200',
     type:'House',
     user:' Nugatto Louw',
     datePosted:'/04/2020',
     yearBuilt:'2016',
    },
    {id:7,
        image: 'https://picsum.photos/id/594/200/300',
    title:'Newly Built House',
    price: '4500',
    address:'2436 SW 8th St, New York, FL 33135, USA',
    bedrooms:'4',
    bathrooms:'2',
    garage:'1',
    size:'1200',
    type:'House',
    user:' Samuel Palmer',
    datePosted:'04/04/2020',
    yearBuilt:'2016',
   },
   {id:8,
    image: 'https://picsum.photos/id/142/200/300',
   title:'Grand Mansion',
   price: '10000',
   address:'2436 SW 8th St, Miami, FL 33135, USA',
   bedrooms:'5',
   bathrooms:'2',
   garage:'1',
   size:'1200',
   type:'House',
   user:' Samuel Palmer',
   datePosted:'02/04/2020',
   yearBuilt:'2017',
  },
  {id:9,
    image: 'https://picsum.photos/id/604/200/300',
  title:'Bachelor Pad',
  price: '4500',
  address:'2436 SW 8th St, Chicago, FL 33135, USA',
  bedrooms:'1',
  bathrooms:'2',
  garage:'1',
  size:'1200',
  type:'Studio',
  user:' Samuel Palmer',
  datePosted:'04/04/2020',
  yearBuilt:'2016',
 },
 {id:10,
    image: 'https://picsum.photos/id/1031/200/300',
 title:'Penthouse Open plan',
 price: '10000',
 address:"'2436 SW 8th St',' New York','FL 33135 USA'",
 bedrooms:'2',
 bathrooms:'2',
 garage:'1',
 size:'1200',
 type:'Studio',
 user:' Samuel Palmer',
 datePosted:'04/04/2020',
 yearBuilt:'2016',
},];

   const propertiesContainer = document.querySelector("#properties");

// add array to local storage   
   localStorage.setItem("houses", JSON.stringify(houses));
   
// display local storage    
document.getElementById("properties").innerHTML = JSON.parse( localStorage.getItem("houses"));

function showHouses (houses) {
    propertiesContainer.innerHTML = "";
    houses.forEach(house => {
        propertiesContainer.innerHTML += `
            <div id='housecards'>
            <span id="heart" class="heart"><i class="fas fa-heart"></i></span>
                <img src=${ house.image } />
                 <h3>${house.title}</h3>
                 <p>${house.address}</p>
                 <ul id=house-values>
        
                 <li><i class="fa-solid fa-bed"></i>${house.bedrooms}</li>
                 <li><i class="fa-solid fa-shower"></i>${house.bathrooms}</li>
                 <li><i class="fa-solid fa-dollar"></i>${house.price}/mo</li>
                <li><i class="fa-solid fa-car"></i>${house.garage}</li>
                <li><i class="fa-solid fa-ruler"></i>${house.size}</li>
                


            </div>
        `
    })
};

showHouses(houses);

function typeHouse() {
    let value = document.getElementById("comboA").value;
    //display entire array when all is selected
    if (value === "All") {
      return showHouses(houses);
    }
    //create array to show only desired housesS
    let filteredHouses = houses.filter((house) => {
      return house.type === value     //loop through houses and return houses which id noes not match
    });   
    showHouses(filteredHouses);
  }

  function addressHouse() {
    let value = document.getElementById("comboB").value;
    //display entire array when all is selected
    if (value === "All") {
      return showHouses(houses);
    }
    let filteredHouses = houses.filter((house) => {
      // create condition to search for value inside of the addrress
      if(house.address.includes(value)){ 
      return house.address } 
          //loop through houses and return houses which id noes not match
    });   
    showHouses(filteredHouses);
  }

  function bedroomsHouse() {
    let value = document.getElementById("comboC").value;
    //display entire array when all is selected
    if (value === "All") {
      return showHouses(houses);
    }
    //create array to show only desired housesS
    let filteredHouses = houses.filter((house) => {
      return house.bedrooms === value     //loop through houses and return houses which id noes not match
    });   
    showHouses(filteredHouses);
  }

  function priceHouse() {
    let value = document.getElementById("comboD").value;
    //display entire array when all is selected
    if (value === "All") {
      return showHouses(houses);
    }
    //create array to show only desired houses
    let filteredHouses = houses.filter((house) => {
      return house.price === value     //loop through houses and return houses which id noes not match
    });   
    showHouses(filteredHouses);
  }

function sortHouses(){
    let price = houses.sort((a, b) => {
      return a.price - b.price;
    });
    let retrievedList = price;
    document.querySelector("#properties").innerHTML = "";
    retrievedList.forEach((propperty) => {
    showHouses(retrievedList)
  })
}