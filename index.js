// navbar begins here
(function ($) {
  $(function () {
    $("nav ul li > a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
    $("#nav-toggle").click(function () {
      $("nav ul").toggle();
    });
  });
})(jQuery);
// navbar ends here

let listing = JSON.parse(localStorage.getItem("listing"))
  ? JSON.parse(localStorage.getItem("listing"))
  : [
      {
        img: "./images/apartment1.jpg",
        title: "Renovated studio",
        type: "double",
        cardhead: "194 Mercer Street,627 Broadway,New york,NY 10012, USA",
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
        carhead: " 8100 Death land,Chicago,9100, USA",
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
        carhead: " 345 Sunethia street, Lansdowne, 9100, SA",
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
        carhead: "Quincy street, Brooklyn, NY, USA",
        card_icon: 25,
        card_icon1: 30,
        card_icon2: 50,
        card_icon3: "10000 Sq M",
        bot_head: "Palace",
      },
      {
        img: "./images/apartment8",
        title: "Fancy Apartment",
        type: "double",
        carhead: "165 Constable road, brooklyn, USA, NY",
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
        carhead: " 67 Main street, Chicago, NY, USA",
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
      <div class="card" style="width: 18rem">
      <img src=${listing.img} class="card-img-top" />
      <div class="card-body">
      <p class="card-text">
      <h4 class="card-title">${listing.title}</h4>
          <h6>${listing.carhead}</h6>
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
