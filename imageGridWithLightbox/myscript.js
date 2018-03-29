//let allImages = [""];

for (let i = 0; i < 20; i++) {
  console.log('the for loop');
  let div = document.createElement("div");
  let img = document.createElement("img");
  //div.setAttribute("id","R"+i);
  div.setAttribute("class", "card");
  img.setAttribute("class", "card-img-top");
  img.setAttribute("onclick", "openLightBox();");
  img.onclick = function() {openLightBox();};
  div.innerHTML = "&nbsp;"; //optional to prevent collapse
  document.getElementById("main").appendChild(div).appendChild(img).src = "https://source.unsplash.com/random"; //write div to page
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
