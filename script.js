// PRODUCTS FROM JSON
let http = new XMLHttpRequest(); // new request object
http.open("get", "products.json", true); // get sets the http method, the file is called, true statement requests the file
http.send(); // the request us sent
http.onload = function () { // onload function
  if (this.readyState == 4 && this.status == 200) { // successful response parses the json data
    let products = JSON.parse(this.responseText); // converts the json into something js can read, coverts into an array
    let output = ""; // empty variable is used to data can be added
    for (let item of products) { // for loop runs to check through products, i adds an html template to output
      output += `
      
       <div class="product">
          <img src= "${item.image}" alt="${item.image}"></img>
          <p class="title">${item.title}</p>
          <p class="price">
            <span>${item.price}</span>

          </p>
          <button><a href="products.html">ADD TO CART</a></button>
        </div>
      
      `;
    }

    document.querySelector(".products").innerHTML = output; // targets the products and adds the items the vairable holds
  }
};

// SLIDESHOW
var i = 0; // starting point
var images = [];
var time = 4000; // in milliseconds 

images[0] = "/images/extra_image1.jpeg";
images[1] = "/images/extra_image2.jpeg";
images[2] = "/images/extra_image3.jpeg";
images[3] = "/images/extra_image4.jpeg";
images[4] = "/images/extra_image5.jpeg";

function changePicture() {
  document.slide.src = images[i]; // documents the images onto the img name on index html 

  if (i < images.length - 1) { // if statement ran 
    i++; 
  } else {
    i = 0; // resets to 0 if the statement is false
  }

  setTimeout("changePicture()", time); // the function is ran with the time with the timeout feature
}

window.onload = changePicture; // function runs when the page is loaded

