homePageTransition();
function homePageTransition(){
    //storing all images inside the images variable

    let images = document.getElementsByClassName("home");

    //setting all images opacity to 1

    for(let i = 0; i<images.length; i++){
        images[i].style.opacity = 1;
    }

    //variable top will store the zindex of the upper most image

    let top = 1;

    //variable current will store the top most image's index as orderd in html

    let current = images.length-1;

    //calling the imageChange() function every 3seconds. The images will be changed at each interval
    setInterval(imageChage, 3000);

    //creating an async function that controls the transitions

    async function imageChage(){
        
        //storing the index of the next image

        let nextImage = (1 +current) % images.length;

        //set the current image's zIndex to two by adding one to the top 

        images[current].style.zIndex = top +1;
        //setting the next image's zIndex to top. This ensures the next image is always below the current image

        images[nextImage].style.zIndex = top;

        //program waits for the transition function to run before any other code runs
        await transition();

        //after transition is complete, the opacity of the current image is 0
        //current image zIndex is then set to top

        images[current].style.zIndex = top;
        //set zIndex of next image to top +1

        images[nextImage].style.zIndex = top +1;

        //increment top

        top ++;

        //change current image's opacity to 1 
        //zIndex of current is less than that of next image hence it will not be seen

        images[current].style.opacity = 1;

        //set current image to the next image
        current = nextImage;
        //the function will regularly change current image's opacity

        function transition(){
            return new Promise((resolve,reject) =>{

                //decrease is the value the opacity will be decreased
                let decrease = 0.01;

                //setting an Id that will be used to clear the setInterval after opacity has been changed
                var id= setInterval(changingOpacity, 10);

                //the function decreases the opacity by decrease variable of the current image
                //when opacity is 0, the setInterval is stopped and promise is resolved

                function changingOpacity(){
                    images[current].style.opacity -= decrease;
                    if(images[current].style.opacity <=0){
                        clearInterval(id);
                        resolve();
                    }
                }
            })
            
        }



    }
}

//Get the button:
mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//collections animations
function makeSnow(){
    const snow = document.createElement("img");
    //creating the source of the image
    snow.src = "snow.png";
    //adding a class name to the image
    snow.classList.add("snows");
    //adding a random width between 10 and 30px
    snow.style.width = Math.random() *10 + 20 + 'px';
    //making the image's left position to be from 0 to the window's inner width
    snow.style.left = Math.random() *1250 + 'px';
    //generating a random animatiion duration
    snow.style.animationDuration = Math.random()*3 + 2 + 's';
    //adding an opacity from 0 to 1
    snow.style.opacity = Math.random();
    var s = document.getElementsByClassName("winter");
      //appending the created image into the body
    var season = s[0].appendChild(snow);
  
  

    //removing the snow from the DOM
    setTimeout(()=> {snow.remove();},3000);
}
setInterval(makeSnow, 100);
function makeLeafFall(){
    //creating an image element
    const leaf =  document.createElement("img");
    //adding the image source
    leaf.src = "leaf.png";
    //adding a class name
    leaf.classList.add ("leaf");
     //adding a random width between 10 and 40px
    leaf.style.width = Math.random() *10 + 40 + 'px';
      //making the image's left position to be from 0 to the window's inner width
    leaf.style.left = Math.random() *1250 + 'px';
    //generating a random animatiion duration
    leaf.style.animationDuration = Math.random()*3 + 5 + 's';
    //adding an opacity from 0 to 1
    leaf.style.opacity = Math.random();
    //appending the created image into the section
    var falls = document.getElementsByClassName("falls");
    var leaves = falls[0].appendChild(leaf);
   document.body.appendChild(leaf);
    //removing the snow from the DOM
    setTimeout(()=> {leaf.remove();},3000);
}
setInterval(makeLeafFall,100);
function makeSunflowers(){
    const sunFlower = document.createElement("img");
   //creating the source of the image
    sunFlower.src = "sunflower.png";
    //adding a class name to the image
    sunFlower.classList.add("sunflower");
    //adding a random width between 10 and 50px
    sunFlower.style.width = Math.random() *10 + 40 + 'px';
    //making the image's left position to be from 0 to the window's inner width
    sunFlower.style.left = Math.random() *1250 + 'px';
    //generating a random animatiion duration
    sunFlower.style.animationDuration = Math.random()*3 + 2 + 's';
    //adding an opacity from 0 to 1
    sunFlower.style.opacity = Math.random();
    //appending the created image into the body
    var summer = document.getElementsByClassName("summers");
    var sun = summer[0].appendChild(sunFlower);
  
    //removing the snow from the DOM
    setTimeout(()=> {sunFlower.remove();},3000);
}
//appending a new image every 100ms
setInterval(makeSunflowers, 100);
