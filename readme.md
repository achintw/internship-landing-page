<section class="coverflow-eff">
                <div class="c2">
                    <p class="Catalogue">Swipe the Catalogue.</p>
                </div>

                <div class="img-display">
                    <!-- <img src="./assets/images/black-marble.jpg" alt=""> -->
                </div>

                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="./assets/images/35.jpg" />
                      </div>
                      <div class="swiper-slide">
                        <img src="./assets/images/c1.jpg" />
                      </div>
                      <div class="swiper-slide">
                        <img src="./assets/images/19.jpg" />
                      </div>
                      <div class="swiper-slide">
                        <img src="./assets/images/a2.jpg" />
                      </div>
                      <div class="swiper-slide">
                        <img src="./assets/images/39.jpg" />
                      </div>
                      <div class="swiper-slide">
                        <img src="./assets/images/w1.jpg" />
                      </div>
                      <div class="swiper-slide">
                        <img src="./assets/images/w2.jpg" />
                      </div>
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
            </section>
















<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30,
      stretch: 50,
      depth: 200,
      modifier: 0.7,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
    on: {
      slideChange: function () {
        // Get the index of the currently active slide
        var activeIndex = this.activeIndex;

        // Update the other div with the content of the center slide
        updateCenterSlide(activeIndex);
      },
    },
  });

  function updateCenterSlide(index) {
    // Get the content of the center slide
    var centerSlideContent = document.querySelector(".mySwiper .swiper-slide:nth-child(" + (index + 1) + ")").innerHTML;

    // Select the .img-display element
    var imgDisplayElement = document.querySelector(".img-display");

    // Add a class to trigger the transition
    imgDisplayElement.classList.add("fade-out");

    // After a short delay, update the content and remove the class to trigger the fade-in
    setTimeout(function () {
        imgDisplayElement.innerHTML = centerSlideContent;
        imgDisplayElement.style.opacity = 1;
    }, 300);

  }
});



  </script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.6.1/jquery.lettering.min.js"
        integrity="sha512-VJ/iYbiu1eJ6yLimfTi65t2R9TFcG5D9X8ZCfbbEFhTfPnKJh8byoKXEawi5ScJZBYL1eiirL1+MczZDx0Tz9Q=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/textillate/0.4.0/jquery.textillate.min.js"
        integrity="sha512-0bHMhYsdpiur1bT84kDH4D7cpxFQ9O7uA5yxVAqWC87h552Xt0swX4M+ZlXMKE8oPVRIJ5lAwXWO2UWeDwJJOw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"
        integrity="sha512-gmwBmiTVER57N3jYS3LinA9eb8aHrJua5iQD7yqYCKa5x6Jjc7VDVaEA0je0Lu0bP9j7tEjV3+1qUm6loO99Kw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"
        integrity="sha512-tHvUcUQYi35zApvAa5TNR3fNhBQkVtkmWKfacnpxmix4/VTGz1lGjIVyLMp7gLgAvg+aKJjnVKokXJNS5GZ+/g=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>