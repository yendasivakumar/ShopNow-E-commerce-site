var womenInfo = JSON.parse(localStorage.getItem("womenData"));

// sort by price
var cost = document.querySelector("#sortByPrice");
cost.addEventListener("change", sortbyprice);

function sortbyprice() {
  var val = cost.value;

  if (val == "HTL") {
    womenInfo = womenInfo.sort(function (a, b) {
      return b.price - a.price;
    });
    displayData(womenInfo);
  }
  if (val == "LTH") {
    womenInfo = womenInfo.sort(function (a, b) {
      return a.price - b.price;
    });
    displayData(womenInfo);
  }
}

// sort by price ends

//filter by catagory
var filtering = document.querySelector("#filterByCatagory");
filtering.addEventListener("change", filterData);

function filterData() {
  var val = filtering.value;
  if (val.length == 0) {
    displayData(womenInfo);
  } else {
    var filteredArr = womenInfo.filter(function (element) {
      return element.catagory == val;
    });
    displayData(filteredArr);
  }
}

// console.log(womenInfo);
displayData(womenInfo);
function displayData(womenInfo) {
  document.querySelector("#card").innerHTML = "";
  womenInfo.forEach((element) => {
    var card = document.querySelector("#card");

    var div = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("src", element.img);

    var h2 = document.createElement("h2");
    h2.textContent = element.brand;

    var p = document.createElement("p");
    p.textContent = element.name;

    var divp = document.createElement("div");
    var price = document.createElement("p");
    price.textContent = element.price;

    var icon = document.createElement("i");
    icon.setAttribute("class", "fa-regular fa-heart");
    icon.addEventListener("click", function () {
      addTofav(element);
    });

    divp.append(price, icon);

    var pc = document.createElement("p");
    pc.textContent = element.catagory;

    var button = document.createElement("button");
    button.textContent = "Add To Cart";
    button.addEventListener("click", function () {
      addToCart(element);
    });

    div.append(img, h2, p, divp, pc, button);
    card.append(div);
  });
}

// favourite function
var favArr = JSON.parse(localStorage.getItem("favItems")) || [];
function addTofav(elem) {
  var favPresent = false;
  favArr.forEach(function (element) {
    if (element.id == elem.id) favPresent = true;
  });
  if (favPresent) {
    alert("This Product Already in the Favourites!");
  } else {
    favArr.push(elem);
    localStorage.setItem("favItems", JSON.stringify(favArr));
    alert("Added to Favourites Succesfully!");
  }
}

// Cart function
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
function addToCart(elem) {
  var itemPresent = false;
  cartArr.forEach(function (element) {
    if (element.id == elem.id) itemPresent = true;
  });
  if (itemPresent) {
    alert("Product already in the cart!");
  } else {
    cartArr.push(elem);
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
    alert("Added to cart Succesfully!");
  }
}
