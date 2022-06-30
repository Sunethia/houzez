let listings = JSON.parse(localStorage.getItem("listings"))
  ? JSON.parse(localStorage.getItem("listings"))
  : [
      {
        img: "./images/apartment1.jpg",
        title: "Renovated studio",
        type: "double",
        location: "194 Mercer Street,627 Broadway,New york,NY 10012, USA",
        price: "R500",
        card_icon: 3,
        card_icon1: 2,
        card_icon2: 2,
        card_icon3: "1200 Sq M",
        bot_head: "Apartment",
      },
      {
        img: "./images/apartment2.jpg",
        title: "Apartment with Nice View",
        type: "double",
        location: " 8100 Death land,Chicago,9100, USA",
        price: "R1500",
        card_icon: 4,
        card_icon1: 3,
        card_icon2: 2,
        card_icon3: "2200 Sq M",
        bot_head: "Apartment",
      },
      {
        img: "./images/apartment3.jpg",
        title: "Light and modern apartment ",
        type: "double",
        location: " 345 Sunethia street, Lansdowne, 9100, SA",
        price: "R1800",
        card_icon: 6,
        card_icon1: 4,
        card_icon2: 3,
        card_icon3: "5000 Sq M",
        bot_head: "Presidental Suite",
      },
      {
        img: "./images/apartment4.jpg",
        title: "Design apartment",
        type: "double",
        location: "Quincy street, Brooklyn, NY, USA",
        price: "R2500",
        card_icon: 25,
        card_icon1: 30,
        card_icon2: 50,
        card_icon3: "10000 Sq M",
        bot_head: "Palace",
      },
      {
        img: "./images/apartment8.jpg",
        title: "Fancy Apartment",
        type: "double",
        location: "165 Constable road, brooklyn, USA, NY",
        price: "R2000",
        card_icon: 94,
        card_icon1: 100,
        card_icon2: 150,
        card_icon3: "50000 Sq M",
        bot_head: "Hotel",
      },
      {
        img: "./images/apartment6.jpg",
        title: "Lovely Spacious Apartment",
        type: "double",
        location: " 67 Main street, Chicago, NY, USA",
        price: "R800",
        card_icon: 4,
        card_icon1: 3,
        card_icon2: 2,
        card_icon3: "1500 Sq M",
        bot_head: "Apartment",
      },
      {
        img: "./images/apartment7.jpg",
        title: "Cozy Apartment",
        type: "double",
        location: " 786 Street, Boston, Cape town",
        price: "R1900",
        card_icon: 4,
        card_icon1: 3,
        card_icon2: 2,
        card_icon3: "1500 Sq M",
        bot_head: "Apartment",
      },
      {
        img: "./images/apartment8.jpg",
        title: "Lovely Spacious Apartment",
        type: "double",
        location: " 67 Main street, Chicago, NY, USA",
        price: "R1500",
        card_icon: 4,
        card_icon1: 3,
        card_icon2: 2,
        card_icon3: "1500 Sq M",
        bot_head: "Apartment",
      },
      {
        img: "./images/apartment9.jpg",
        title: "Spacious Apartment",
        type: "double",
        location: " 67 Main street, Chicago, NY, USA",
        price: "R1200",
        card_icon: 4,
        card_icon1: 3,
        card_icon2: 2,
        card_icon3: "1500 Sq M",
        bot_head: "Apartment",
      },
      {
        img: "./images/apartment1.jpg",
        title: "Beautiful Apartment",
        type: "double",
        location: " 67 Main street, Chicago, NY, USA",
        price: "R3000",
        card_icon: 4,
        card_icon1: 3,
        card_icon2: 2,
        card_icon3: "1500 Sq M",
        bot_head: "Apartment",
      },
    ];
let asc = true;
const listingsContainer = document.querySelector("#tableItems");
function showlistings(listings) {
  listingsContainer.innerHTML = "";
  console.log(listings);
  listings.forEach((listing) => {
    listingsContainer.innerHTML += `
      <tr>
        <th scope="row">${listing.id}</th>
        <td>${listing.image}</td>
        <td>${listing.title}</td>
        <td>${listing.type}</td>
        <td>${listing.location}</td>
        <td>${listing.size}</td>
        <td>${listing.price}</td>
        <td><i class="fa-solid fa-pen-to-square p-3"></i>
        <i onclick="deleteTask(${listing.id})" class="fa-solid fa-trash-can p-3"></i></td>
      </tr>
       `;
  });
}
showlistings(listings);
//add function
function addlisting() {
  const newlisting = {
    image: document.querySelector("#image").value,
    title: document.querySelector("#title").value,
    type: document.querySelector("#type").value,
    location: document.querySelector("#location").value,
    size: document.querySelector("#size").value,
    price: document.querySelector("#price").value,
    id: listings.length + 1,
  };
  listings.push(newlisting);
  localStorage.setItem("listings", JSON.stringify(listings));
  showlistings(listings);
}
document.querySelector("#addNewItem").addEventListener("click", addlisting);
//delete function
function deleteTask(id) {
  listings = listings.filter((listing) => listing.id !== id);
  localStorage.setItem("listings", JSON.stringify(listings));
  showlistings(listing);
}
