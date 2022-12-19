let arr = [
  {
      category : "men",
      name : "Tablet Bottle Mockup",
      price : "$30.00",
  },
  {
      category : "women",
      name : "Pill Bottle Mockup",
      price : "$29.50",
  },
  {
      category : "art",
      name : "Tablet Bottle Mockup",
      price : "$29.99",
  },
  {
      category : "art",
      name : "Pill Bottle Mockup",
      price : "$30.20",
  },
  {
      category : "men",
      name : "Tablet Bottle Mockup",
      price : "$25.99",
  },
  {
      category : "women",
      name : "Pill Bottle Mockup",
      price : "$29.00",
  },
  {
      category : "women",
      name : "Tablet Bottle Mockup",
      price : "$28.50",
  },
  {
      category : "art",
      name : "Pill Bottle Mockup",
      price : "$30.50",
  }
]

let txt = " "
for (let i=0; i<arr.length; i++) {
  txt += `     
  <div class="cardhead">
    ${arr[i].category}
  </div>
  <div class="cardbody">
    <h5 class="cardtitle">${arr[i].name}</h5>
    <p><img src="./assets/images/hummingbird-printed-t-shirt.jpg" alt="drug image"></p><hr>
    <i class="fa-solid fa-star fa-stack fadeout" style="color: yellow;"></i>
    <i class="fa-solid fa-star fa-stack fadeout" style="color: yellow;"></i>
    <i class="fa-solid fa-star fa-stack fadeout" style="color: yellow;"></i>
    <i class="fa-solid fa-star fa-stack fadeout" style="color: yellow;"></i>
    <i class="fa-solid fa-star fa-stack fadeout" style="color: yellow;"></i><br>
    <a href="#" class="fadeout">${arr[i].price}</a> 
    <button class="cart"><i class="fa-solid fa-basket-shopping "></i></button>  
`
}
document.getElementsByClassName("cardy").innerHTML = "slwrjirjiaw";
        




      let mybutton = document.getElementById("myBtn");

      window.onscroll = function() {scrollFunction()};
      function scrollFunction() { 
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        } else {
       mybutton.style.display = "none";
        }
    }

      function topFunction() {
     document.documentElement.scrollTop = 0;
    }

 
