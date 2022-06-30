let listing = JSON.parse(localStorage.getItem("listing"))
  ? JSON.parse(localStorage.getItem("listing"))
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

function readData(listing) {
  document.querySelector("#listing").innerHTML = "";
  listing.forEach((listing, i) => {
    document.querySelector("#listing").innerHTML += `
      <div class="card" style="width: 30%">
      <img src=${listing.img} class="card-img-top img-fluid" style="max-height: 200px" />
      <div class="card-body">
      <p class="card-text">
      <h4 class="card-title">${listing.title}</h4>
      <h4>${listing.price}</h4>
          <h6>${listing.location}</h6>
          <i class="fa-solid fa-bed card_icon"></i>${listing.card_icon}
          <i class="fa-solid fa-shower card_icon"></i>${listing.card_icon1}
          <i class="fa-solid fa-car card_icon"></i>${listing.card_icon2}
          <i class="fa-solid fa-ruler card_icon"></i>${listing.card_icon3}
            <h6>${listing.bot_head}</h6>
        </p>
       </div>
      </div>
          `;
  });
}
readData(listing);

filter = () => {
  let FilterOption = document.querySelector("#type").value;
  if (FilterOption !== "all") {
    console.log(FilterOption);
    document.querySelector("#listings").innerHTML = "";
    let specificView = listings.filter(
      (listing) => listing.type == FilterOption
    );
    specificView.forEach((listing) => {
      document.querySelector(
        "#listings"
      ).innerHTML += ` <div class="card" style="width: 30%">
      <img src=${listing.img} class="card-img-top img-fluid" style="max-height: 200px" />
      <div class="card-body">
      <p class="card-text">
      <h4 class="card-title">${listing.title}</h4>
      <h4>${listing.price}</h4>
          <h6>${listing.location}</h6>
          <i class="fa-solid fa-bed card_icon"></i>${listing.card_icon}
          <i class="fa-solid fa-shower card_icon"></i>${listing.card_icon1}
          <i class="fa-solid fa-car card_icon"></i>${listing.card_icon2}
          <i class="fa-solid fa-ruler card_icon"></i>${listing.card_icon3}
            <h6>${listing.bot_head}</h6>
        </p>
       </div>
      </div>
            `;
      console.log(specificView);
    });
  } else {
    display();
  }
};
