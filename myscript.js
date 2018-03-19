for (let i = 0; i < 20; i++) {
  console.log('the for loop');
  let div = document.createElement("div");
  let img = document.createElement("img");
  //div.setAttribute("id","R"+i);
  div.setAttribute("class", "card");
  img.setAttribute("class", "card-img-top");
  div.innerHTML = "&nbsp;"; //optional to prevent collapse
  document.getElementById("main").appendChild(div).appendChild(img).src = "image/3x2bl.jpg"; //write div to page
  };

// how to set the src for different pictures?! (line9)
