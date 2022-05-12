var cartArr = JSON.parse(localStorage.getItem("cartItems"));

displayData(cartArr);
function displayData(cartArr) {
  document.querySelector("#cards").innerHTML = "";
  cartArr.forEach((element) => {
    var card = document.querySelector("#cards");

    var div1 = document.createElement("div");
    div1.setAttribute("class", "cartimg");

    var img = document.createElement("img");
    img.setAttribute("src", element.img);

    div1.append(img);

    var div2 = document.createElement("div");
    div2.setAttribute("class", "info");
    var div2In = document.createElement("div");

    var h3 = document.createElement("h3");
    h3.textContent = element.name;

    var price = document.createElement("h3");
    price.textContent = element.price;

    div2In.append(h3, price);

    var brand = document.createElement("p");
    brand.textContent = element.brand;

    var divbtn = document.createElement("div");
    var removebtn = document.createElement("button");
    removebtn.textContent = "- Remove Item";
    removebtn.addEventListener("click", function () {
      removeItem(element);
    });

    var addBtn = document.createElement("button");
    addBtn.textContent = "+ Add Item";
    addBtn.addEventListener("click", function () {
      addItems(element);
    });

    divbtn.append(removebtn, addBtn);

    div2.append(div2In, brand, divbtn);
    var contDiv = document.createElement("div");
    contDiv.append(div1, div2);
    card.append(contDiv);
  });
}

// No of items in the cart
var cartnum = document.querySelector("#carttotal > span");
cartnum.textContent = cartArr.length;

var subtotal = document.querySelector("#subtotal");
var total = 0;
cartArr.forEach(function (element) {
  total += Number(element.price);
});

subtotal.textContent = total;
document.querySelector("#total").textContent = total;

document.querySelector("#promo-btn").addEventListener("click", checkpromo);
var count = 0;

function checkpromo() {
  var promo = document.querySelector("#promo");
  var count = 0;
  var promocode = promo.value;
  if (promocode == "MASAI30" && count < 1) {
    document.querySelector("#total").textContent = (30 * total) / 100;
    count++;
    document.querySelector("#promo-btn").textContent = "Applied";
    document.querySelector("#promo-btn").style.backgroundColor = "#18A558";
  }
}

function removeItem(element) {
  cartArr = cartArr.filter(function (ele) {
    return element.id != ele.id;
  });

  localStorage.setItem("cartItems", JSON.stringify(cartArr));
  displayData(cartArr);
  window.location.reload();
}

function addItems(element) {
  total += Number(element.price);
  subtotal.textContent = total;
  document.querySelector("#total").textContent = total;
}

document
  .querySelector("#checkout > button")
  .addEventListener("click", function () {
    window.location.href = "checkout.html";
  });
