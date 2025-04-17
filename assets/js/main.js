
$(window).scroll(function(){
  if($(this).scrollTop() > 1){
  $('nav').addClass("sticky");
  }
  else{
  $('nav').removeClass("sticky");
  }
  })


$(document).ready(function () {

    $(document).ready(function(){
        $('.slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
          arrows: true,
          responsive: [
            {
              breakpoint: 992, // tablets
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 576, // mobile
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      });

  

  $('span#mini_contact_form_container').click(function(){ $("#mini_contact_form").slideToggle(1500);});

  $('#myBtn').click(function(){ $('#myModal11').css("display","block");});
  $('#myModal11 .close').on('click', function(){
    $('#myModal11').css('display', 'none');
});
});





$(document).ready(function () {

  $(document).ready(function(){
      $('.galleryslider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 992, // tablets
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576, // mobile
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    });

});






/****desktop-pop******/
$(document).ready(function(){
  $('#openPopup').click(function(){
    $('#popupBox').fadeIn();
  });

  $('#closePopup').click(function(){
    $('#popupBox').fadeOut();
  });

  // Optional: close when clicking outside the content
  $('#popupBox').click(function(e){
    if ($(e.target).is('#popupBox')) {
      $(this).fadeOut();
    }
  });
});










document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Select all sections
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    const options = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.6, // Trigger when 60% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.remove("active"); // Remove active class from all links
                    if (link.getAttribute("href").substring(1) === entry.target.id) {
                        link.classList.add("active"); // Add active class to the matching link
                    }
                });
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section); // Observe each section
    });
});
