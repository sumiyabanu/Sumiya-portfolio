//  toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

//  Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onclick = () => {
    secction.forEach(sec =>{
        let top = window.scroolY;
        let offset = sec.offsetTop  -150;
        let height = sec.offsetHeight;
        let id  =sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(link =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };

    });
    //===== Sticky navbar ======= *//
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100)
    
    // =======Remove Toggle icon and navbar=====
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}
// ============================Scroll Reveal==============================================//
ScrollReveal({
        distance:'80px',
        duration: 2000,
        delay:200,
});

ScrollReveal().reveal('home-content, heading', {origin:'top'});
ScrollReveal().reveal('home-img, .services-container,portfolio-box,contact form', {origin:'button'});
ScrollReveal().reveal('home-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('home-content p, .about-content', {origin:'right'});

// ============================Type Js==============================================//

const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Web Designer','UI Designer'], 
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true
})







function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.1380659, lng: -106.6572985},
        zoom: 12,
        mapTypeControl: false,
        disableDefaultUI: true,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });
}

