

// countdown function
function countdown() {
    
    var seconds = document.getElementById("seconds").value; // Gets the the number of seconds from input
        function tick() {                                   // Defines the function that is called every second
        seconds = seconds - 1;                              // Subtracts one second from the remaining time
        
       timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);                  //pauses the program for 1000 millisec

        //display an alert at time up
        if (seconds === -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
  
    tick(); 
}

// Slideshow funcions
let slideIndex = 1;
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// This function displays the current slide and hides the others
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // If the slide index is greater than the number of slides, set it to 1
    if (n > slides.length) {slideIndex = 1}
    
    // If the slide index is less than 1, set it to the last slide
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all the slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    // Remove the "active" class from all the dots
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Display the current slide and add the "active" class to dots
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}