for (let i = 0; i < 20; i++) {
  console.log('the for loop');
  let div = document.createElement("div");
  let img = document.createElement("img");
  //div.setAttribute("id","R"+i);
  div.setAttribute("class", "card");
  img.setAttribute("class", "card-img-top");
  img.setAttribute("onclick", "openModal();");
  img.onclick = function() {openModal();};
  div.innerHTML = "&nbsp;"; //optional to prevent collapse
  document.getElementById("main").appendChild(div).appendChild(img).src = "image/roadBlack.jpg"; //write div to page
  };

  // Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// create an auto dev-creater for the modal / lightbox

// how to set the src for different pictures?! (line9)

// add a onclick to img so it can be shown in a lightbox or:

//https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp
//https://css-tricks.com/seamless-responsive-photo-grid/