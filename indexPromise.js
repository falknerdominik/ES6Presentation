// loading images
// loadImageCallbacked('images/cat1.jpg', (error, img1) => {
//   addImg(img1.src);
//   // not executing in parallel
//   loadImageCallbacked('images/cat2.jpg', (error, img2) => {
//     addImg(img2.src);
//     loadImageCallbacked('images/cat3.jpg', (error, img3) => {
//       addImg(img3.src);
//     })
//   })
// })
//
//
//
// function loadImageCallbacked(url, callback) {
//   let image = new Image();
//
//   image.onload = function() {
//     callback(null, image);
//   }
//
//   image.onerror = function() {
//     let message = 'Could not load image at ' + url;
//     callback(new Error(msg));
//   }
//
//   image.src = url;
// }

















// promises yay!
Promise.all([
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg'),
  loadImage('images/cat4.jpg')
]).then((images) => {
  images.forEach(img => addImg(img.src));
}).catch((error) => {
  // handle error later
  console.log(error);
})

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let image = new Image()

    image.onload = function() {
      resolve(image)
    }

    image.onerror = function() {
      let message =
        'Could not load image at ' + url
      reject(new Error(msg))
    }

    image.src = url

  })
}

function addImg (src) {
  let imgElement = document.createElement("img");
  imgElement.src = src;
  document.body.appendChild(imgElement);
}
