console.log("hello!");
//the document object, for reference
console.dir(document);

//we are going to create a place to store our images
//you could also store your image files in an image folder locally instead of copying the link
//src: ./images/imageName.jpg
let images = [
  {
    src: "https://images.unsplash.com/photo-1455628508298-04cd1c1675f8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a bunch of pigeons fighting for bread",
    width: 300,
    height: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1455628508298-04cd1c1675f8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a bunch of pigeons fighting for bread",
    width: 300,
    height: 200,
  },

  {
    src: "https://cdn.pixabay.com/photo/2023/09/05/18/18/eurasian-pygmy-owl-8235624_1280.jpg",
    alt: "sitting owl",
    width: 300,
    height: 200,
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/10/30/22/50/owl-2903707_1280.jpg",
    alt: "flying owl",
    width: 300,
    height: 200,
  },
];

//===============================
//!This is help for the arrow keys stretch goal
//you need a global variable to keep track of the index value
//let currentIndex = 0
//===============================

//STEP 1: select the DOM elements that will contain my images
//select the thumbnail container
//select the main image container
const thumbnailContainer = document.getElementById("clicks");
const largeImageContainer = document.getElementById("clicks");

//STEP 2: we are going to write a function to create the images in our thumbnail

function createThumbnails(thumbnailContainer) {
  //we need a loop to run through the array of images and create an instance of each of them --> forEach / for loop
  thumbnailContainer.forEach(function (thumbnail, index) {
    //a document method to create a DOM element to contain my image information(<img>)
    const thumbnail = document.createElement("img");
    //assign a value to the img attributes (src, alt, width, height) --> img.src = "value"
    images.src = img.src =
      "https://images.unsplash.com/photo-1455628508298-04cd1c1675f8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    images.alt = "owls";
    //optional: you can also give each image a classname
    //append the new images to the DOM container
    thumbnail - container.appendChild(thumbnailContainer, "click");
    //add an event listener to each image, so when the user clicks, the big image shows on the screen
    //function eventHandler(){
        button.addEventListener("click", function () {
            document.body.style.backgroundImage = "https://images.unsplash.com/photo-1455628508298-04cd1c1675f8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            
    //when the user clicks the image,we are going to call the function that creates the big image
    createLargeImage(thumbnail[index]);
    // }
    thumbnail.addEventListener("click", eventHandler);
  });
}

// STEP 3: we need to write a function to create the big image
// function createLargeImage(largeImage) {
//!you will find a problem here: your images will keep adding one after the other
//   const largeImage = document.createElement("img");
  //innerHTML = ""
  //create an img element
  //(optional) you could give this large image a classname
  //set the src value
  //set the alt value
  //append the large img to the DOM
// }

//In case you find reference code elsewhere
//This code I found on stackoverflow and it works for my app. Can you give me help understanding why?
