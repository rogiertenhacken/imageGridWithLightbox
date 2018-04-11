let allImages = ["image/balloons.jpg", "image/beach.jpg", "image/birdTriple.jpg", "image/dear.jpg", "image/reflection.jpg", "image/starSoup.jpg", "image/train.jpg"];

for (let i = 0; i < allImages.length; i++) {
  console.log('the for loop');
  let div = document.createElement("div");
  let img = document.createElement("img");
  //div.setAttribute("id","R"+i);
  div.setAttribute("class", "card");
  img.setAttribute("class", "card-img-top");
  img.addEventListener('click', openLightBox);

  div.innerHTML = "&nbsp;"; //optional to prevent collapse
  document.getElementById("main").appendChild(div).appendChild(img).src = allImages[i]; //write div to page
  console.log("get element.")
  };

  // Open the Modal
function openLightBox() {
  document.getElementById('myLightbox').style.display = "block";
}

// Close the Modal
function closeLightBox() {
  document.getElementById('myLightbox').style.display = "none";
}

//leave for now, make image array to see if they actually change!
function plusSlides() {
  console.log("next")
$('.prev, .next').on('click', function() {
    if ($(".active")[$(this).attr('class')]().index()!=-1)
    $(".active").removeClass('active')[$(this).attr('class')]().addClass('active');

});
}
