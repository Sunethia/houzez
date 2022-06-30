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
        title: "Beautiful Apartment",
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
        title: "Lovely Spacious Apartment",
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
        title: "Lovely Spacious Apartment",
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
console.log(listings);
// let asc = true;
const listingsContainer = document.querySelector("#listings");
function showlistings(listings) {
  listingsContainer.innerHTML = "";
  listings.forEach((listings) => {
    listingsContainer.innerHTML += `
    <tr>
    <td>${listings.img}<td>
    <td>${listings.title}<td>
    <td>${listings.type}<td>
    <td>${listings.carhead}<td>
    <td>${listings.bot_head}<td>
    <td><button
    type="button"
    class="btn btn-danger"
    data-bs-toggle="modal"
    data-bs-target="#edit${i}"
  >
    Edit
  </button>
    <i onclick="deleteItem(${listings.id})" class="fa-solid fa-trash-can p-3"></i></td>
    <tr>
    <div
  class="modal fade"
  id="edit${id}"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">Edit Product</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <input type="text" placeholder="Enter image" id="image-${i}" value="${listings.img}"/>
        <input type="text" placeholder="Enter title" id="title-${i}" value="${listings.title}" />
        <input type="text" placeholder="Enter type" id="type-${i}" value="${listings.type}"/>
        <input type="text" placeholder="Enter carhead" id="carhead-${i}" value="${listings.carhead}"/>
        <input type="text" placeholder="Enter bot_head" id="bot_head-${i}" value="${listings.bot_head}"/>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button
        data-bs-toggle="modal"
        data-bs-target="#edit-${i}"
          type="button"
          class="btn btn-primary"
          onclick="editProperty(${i})"
        >
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
       `;
  });
}
showlistings(listings);
function addProperty() {
  const newPropety = {
    img: document.querySelector("#image").value,
    title: document.querySelector("#title").value,
    type: document.querySelector("#type").value,
    carhead: document.querySelector("#carhead").value,
    bot_head: document.querySelector("#bot_head").value,
    id: listings.length + 1,
  };
  listings.push(newProperty);
  localStorage.setItem("listings", JSON.stringify(listings));
  showlistings(listings);
}
document.querySelector("#addNewItem").addEventListener("click", addProperty);
function deleteItem(id) {
  listings = listings.filter((listings) => listings.id !== id);
  localStorage.setItem("listings", JSON.stringify(listings));
  showlistings(listings);
}
function editItems(i) {
  let img = document.querySelector(`#image-${i}`).value;
  let title = document.querySelector(`#title-${i}`).value;
  let type = document.querySelector(`#type-${i}`).value;
  let carhead = document.querySelector(`#carhead-${i}`).value;
  let bot_head = document.querySelector(`#bot_head-${i}`).value;
  listings[i] = {
    img,
    title,
    type,
    carhead,
    bot_head,
  };
  localStorage.setItem("listings", JSON.stringify(listings));
  readData(listings);
}
