var modalButtons = document.querySelectorAll('.modal-open');
var modalBg = document.querySelector('.bg-modal');
var modalClose = document.querySelectorAll('.modal-close')
var modal = document.getElementById('id-modal');
var slider_content = document.querySelectorAll('.slider-box');
var nextBtns = document.querySelectorAll('.nextBtn');
var prevBtns = document.querySelectorAll('.prevBtn');
var babynames = ["images/babynamesThumbnail", "images/babynames1", "images/babynames2", "images/babynames3", "images/babynames4", "images/babynames5"];
var datasearch = ["images/datasearch1", "images/datasearch2", "images/datasearch3", "images/datasearch4", "images/datasearch5", "images/datasearch6"];
var salesystem = ["images/salesystem1", "images/salesystem2", "images/salesystem3", "images/salesystem4"];
var booktracker = ["images/booktracker1", "images/booktracker2", "images/booktracker3", "images/booktracker4", "images/booktracker5", "images/booktracker6", "images/booktracker7"]; 

$(document).ready(function(event){
          
    $(window).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() != 0);
    $('.logo').toggleClass('scrolled', $(this).scrollTop() != 0);
    });

    $(".animated").addClass("delay-1s");

    modalButtons.forEach(function(button) {
        button.onclick = function() {
            var modal = button.getAttribute("data-modal");
            document.getElementById(modal).style.display = "block"
            document.body.style.overflow = 'hidden';

        };
    });

    modalClose.forEach(function(button) {
        button.onclick = function() {
            var modal = (button.closest(".modal").style.display = "none");
            document.body.style.overflow = 'auto';

        };
    });

    window.onclick = function(event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
            document.body.style.overflow = 'auto';

        };
    };


    var images = [];
    var i = images.length;

    nextBtns.forEach(function(button) {
        button.onclick = function() {
            var slider = button.getAttribute("data-slider");
            var images = findSlider(slider);
            if (i < images.length) {
                i = i+1;}
            else {
                i = 1;}
            slider_content.forEach(function(slide) {
                var checkSlider = slide.getAttribute("data-slider");
                if (slider == checkSlider) {
                    slide.innerHTML = "<img src=" + images[i-1] + ".png>";
                }

            });

        }
        
    });

    prevBtns.forEach(function(button) {
        button.onclick = function() {
            var slider = button.getAttribute("data-slider");
            var images = findSlider(slider);
            if (i < images.length+1 && i > 1) {
                i = i-1;}
            else {
                i = images.length;}
            slider_content.forEach(function(slide) {
                var checkSlider = slide.getAttribute("data-slider");
                if (slider == checkSlider) {
                    slide.innerHTML = "<img src=" + images[i-1] + ".png>";
                }
            });
        }
    });
    
});

function findSlider(slider) {
    switch (slider) {
        case "babynamesSlider":
            images = babynames;
            break;
        case "datasearchSlider":
            images = datasearch;
            break;
        case "salesystemSlider":
            images = salesystem;
            break;
        case "booktrackerSlider":
            images = booktracker;
            break;
        default:
            break;
    }

    return images;
};
