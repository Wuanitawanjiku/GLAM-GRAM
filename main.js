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
