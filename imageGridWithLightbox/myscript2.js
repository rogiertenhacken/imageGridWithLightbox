function Lightbox(images, containerId) {
  let currentIndex = 0;

  const $main = document.getElementById(containerId);
  const $myLightbox = document.getElementById('myLightbox');
  const $nextLink = $myLightbox.querySelector('.next');
  const $prevLink = $myLightbox.querySelector('.prev');
  const $closeBtn = $myLightbox.querySelector('.close');
  const $image = $myLightbox.querySelector('.image');

// instanciation
  addListeners();
  // images.forEach(renderImage);
  for (let i = 0; i < images.length; i++) {
    console.log('the for loop');
    let div = document.createElement("div");
    let img = document.createElement("img");
    //div.setAttribute("id","R"+i);
    div.setAttribute("class", "card");
    img.setAttribute("class", "card-img-top");
    // img.addEventListener('click', openLightBox);

    div.innerHTML = "&nbsp;"; //optional to prevent collapse
    document.getElementById("main").appendChild(div).appendChild(img).src = allImages[i]; //write div to page
  };



// methods
  function addListeners() {
    $main.addEventListener('click', showImage);
    $nextLink.addEventListener('click', showNextImage);
    $prevLink.addEventListener('click', showPrevImage);
    $closeBtn.addEventListener('click', toggleLightBox);
  }

  function showImage(e) {
    e.preventDefault();
    console.log('main click');
    if (e.target.nodeName === "IMG") {
      const imageName = e.target.getAttribute('src');
      currentIndex = images.indexOf(imageName);
      toggleLightBox(undefined, true);
      setImage();
    }
  }

  function showNextImage(e) {
    e.preventDefault();
    currentIndex = Math.min(images.length - 1, currentIndex + 1);
    console.log('next');
    setImage();
  }

  function showPrevImage(e) {
    e.preventDefault();
    currentIndex = Math.max(0, currentIndex - 1);
    console.log('prev');
    setImage();
  }

  function setImage() {
    console.log('set image');
    $image.src = images[currentIndex];
    // $image.setAttribute('src', images[currentIndex]);
  }

  function toggleLightBox(e, isOpen) {
    $myLightbox.style.display = isOpen ? "block" : "none";
  }

}

Lightbox(["image/balloons.jpg", "image/beach.jpg", "image/birdTriple.jpg", "image/dear.jpg"], 'main2');

// parameters -> instance -> methods
