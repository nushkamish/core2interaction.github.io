let sliderInput = document.getElementById("my-range");
let myImage= document.getElementById("image");
let myButton= document.getElementById("my-button");

myImage.src = "";
myImage.alt = "";


myButton.style.display = "none";

sliderInput.addEventListener("input", function() {
   
    myButton.style.display = "block";
});




console.log(sliderInput.value);


function changeMeme(){
 {
    if (sliderInput.value > 1 && sliderInput.value < 3) {
        myImage.src = "meme1.jpg";
    } else if (sliderInput.value > 4 && sliderInput.value < 7) {
        myImage.src = "meme2.jpg";
    } else if (sliderInput.value > 8 && sliderInput.value < 10) {
        myImage.src = "meme3.jpg";
    }
}





  
    }

    function helloMeme() {
        let myImages = document.getElementById("mainImage");
        
       
        myImages.src = "meme.jpg"; 
        
    
    }
    