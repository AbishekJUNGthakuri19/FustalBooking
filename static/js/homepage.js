//Navbar

document.querySelector('nav').innerHTML = `
<a href="index.html" class="nav-logo"><span>Book</span>mygame</a>
        <input type="text" placeholder="search here" class="nav-search">
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="index.html" class="nav-link">HOME</a>
          </li>
          <li class="nav-item">
            <a href="html/mybooking.html" class="nav-link">BOOKINGS</a>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <a href="html/bookingpage.html" id="venues" class="nav-link">VENUES</a>


              <div class="dropdown-content">
                <a href="#">Bharatpur</a>
                <a href="html/bookingpage.html">Chitwan</a>
                <a href="#">Kathmandu</a>
                <a href="#">Lalitpur</a>
                <a href="#">Bhaktapur</a>
                <a href="#">Itahari</a>
                <a href="#">Birgunj</a>
                <a href="#">Pokhara</a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="html/Shop.html" class="nav-link">SHOP</a>
          </li>
          <li class="nav-item">
            <a href="html/tournamentpage.html" class="nav-link">TOURNAMENT</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"><i class="fa-solid fa-bell"></i></a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"><img src="../web-images/user.jpg" alt="" srcset="" class="nav-image"></a>
          </li>
        </ul>
        <div class="hamburger">

          <i class="fa-solid fa-bars"></i>
          <i class="fa-solid fa-xmark"></i>
        </div>`

document.querySelector('#footer-section').innerHTML=
`
<div class="footer-section-cont">
      <div class="logo-section">
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
      </div>
      <div class="option-section">
        <a href="">About us</a>
        <a href="">Terms of service</a>
        <a href="">Refund policy</a>
      </div>
      <div class="description">
        <p>Book my game is a game booking platform.It was founded in 2023, july 14th. The motive of the platform is to
          provide a user-friendlt interface and make the process of booking futsal games hassel free.</p>
      </div>
      <div class="contact">
        <i class="fa-solid fa-phone"></i>
        <p>+977 9812345678</p>
        <i class="fa-solid fa-envelope"></i>
        <p>bookmygame@gmail.com</p>
        <i class="fa-solid fa-location-dot"></i>
        <p>Bharatpur, Chitwan</p>
      </div>

    </div>
`


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-10vh";
  }
  prevScrollpos = currentScrollPos;
}

