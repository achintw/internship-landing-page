

//-----------------------------------------------------------------------------------------------
// slider
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");
let num = document.querySelector(".numero");
let b1 = document.querySelector(".uno");
let b2 = document.querySelector(".duos");


var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active")
    });

    slides.forEach((slide) => {
        slide.classList.remove("active")
    });

    contents.forEach((content) => {
        content.classList.remove("active")
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");


}

let flag = 0;
btns.forEach((btn, i) => {
    btn.addEventListener('click', ()=>{
        sliderNav(i)
    });
});  


b1.addEventListener('click', ()=>{
    num.innerHTML = "01/2";
})

b2.addEventListener('click', ()=>{
    num.innerHTML = "02/2";
})
//-----------------------------------------------------------------------------------------------









//-----------------------------------------------------------------------------------------------
// fire tail cursor
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#000000",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
  circle.style.opacity = 1;
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

 


// console.log(screenWidth2 + "hello");



    function animateCircles() {
        var screenWidth2 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(screenWidth2<1025){
            circles.forEach((c)=>c.style.opacity = 0)
        } else{
            circles.forEach((c)=>c.style.opacity = 1)
        }
        let x = coords.x;
        let y = coords.y;
        
        circles.forEach(function (circle, index) {
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";
          
          circle.style.scale = (circles.length - index) / circles.length;
          
          circle.x = x;
          circle.y = y;
      
          const nextCircle = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        });
       
      
        // recursive implementation, to counter the circles not merging when we exit the screen
        requestAnimationFrame(animateCircles);
      
    }


animateCircles();
//-----------------------------------------------------------------------------------------------








//----------------------------------------------------------------------------------------------
// text animation
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let isAnimationRunning = false;

function startAnimation(element) {
    if (!isAnimationRunning) {
        isAnimationRunning = true;

        let iteration = 0;
        let interval;

        clearInterval(interval);

        interval = setInterval(() => {
            element.innerText = element.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return element.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= element.dataset.value.length) {
                clearInterval(interval);
                isAnimationRunning = false; // Reset the flag when animation is complete
            }

            iteration += 1 / 3;
        }, 30);
    }
}

document.querySelectorAll(".text-animations").forEach((element) => {
    element.addEventListener('mouseover', () => {
        startAnimation(element);
    });
});
//---------------------------------------------------------------------------------------------







//-----------------------------------------------------------------------------------------------
// major project effects
let r1 = document.querySelector(".right-img1");
let l2 = document.querySelector(".left-img2");
let r2 = document.querySelector(".right-img2");
let l1 = document.querySelector(".left-img1");
let l3 = document.querySelector(".left-img3");
let l4 = document.querySelector(".left-img4");
let r3 = document.querySelector(".right-img3");
let r4 = document.querySelector(".right-img4");
let section1 = document.querySelector(".scroll-image-section");
let l = document.querySelector(".left-images");
let r = document.querySelector(".right-images");
let nju = document.querySelector(".center-text");


const options2 = { 
    threshold: 1
};


let obs2 = 0;
let section2 = document.querySelector(".gray");
const observer2 = new IntersectionObserver(function(enteries, observer){
    enteries.forEach(entry => {
        if(entry.isIntersecting){
            obs2 = 1;
        } else{
            obs2 = 0;
        }
        console.log(entry);
    })
}, options2);

observer2.observe(section2);


let giant = document.querySelector(".giant-img");
let txt = document.querySelector(".name");
let right = document.querySelector(".docker-right img");
let left = document.querySelector(".docker-left img");

window.addEventListener('scroll', function(){
    
    if(obs2 === 1){
       giant.classList.add("active");
       txt.classList.add("active");
       right.classList.add("active");
       left.classList.add("active");
    } 

})


let child = document.querySelectorAll(".ch");

child.forEach(ch => {
    ch.addEventListener('click', () => {
        giant.classList.add("active");
        txt.classList.add("active");
    });
});


let xx = document.querySelector(".xx");
xx.addEventListener('click', ()=>{
    giant.classList.add("active");
    txt.classList.add("active");
})
//-----------------------------------------------------------------------------------------------






//-----------------------------------------------------------------------------------------------
// removed animation
// magic section js
// const wand = document.getElementById("wand");
// const tiles = document.querySelectorAll(".tile");

// const xy = (x, y) => ({ x, y }),
//       px = value => `${value}px`,
//       deg = value => `${value}deg`,
//       clamp = (value, min, max) => Math.max(Math.min(value, max), min);

// const updateMouse = (mouseX, mouseY) => {
//   const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  
//   const mouse = {
//     position: xy(mouseX, mouseY),
//     decimal: xy(mouseX / windowWidth, mouseY / windowHeight),
//     multiplier: xy(1.3, 0.4),
//     offset: xy(windowWidth * -0.15, windowHeight * 0.1),
//     modifiedPosition: xy(0, 0)
//   }
  
//   mouse.modifiedPosition.x = mouse.position.x * mouse.multiplier.x + mouse.offset.x;  
//   mouse.modifiedPosition.y = mouse.position.y * mouse.multiplier.y + mouse.offset.y;  
  
//   return mouse;
// }

// const revealImages = mouseX => {
//   for(const tile of tiles) {
//     const dimensions = tile.getBoundingClientRect(),
//           relativeMouseX = mouseX - dimensions.left,
//           mouseXAsDecimal = clamp(relativeMouseX / dimensions.width, 0, 1);
    
//     const opacity = mouseXAsDecimal,
//           blur = 1 - mouseXAsDecimal;
    
//     tile.style.setProperty("--opacity", opacity);
//     tile.style.setProperty("--blur", blur);
//   }
// }

// const getWandStyles = mouse => ({
//   left: px(mouse.modifiedPosition.x),
//   top: px(mouse.modifiedPosition.y),
//   rotate: deg(mouse.decimal.x * 20 - 10)
// });

// window.onmousemove = e => {
//   const mouse = updateMouse(e.clientX, e.clientY),  
//         wandStyles = getWandStyles(mouse);
  
//   wand.animate(wandStyles, { duration: 400, fill: "forwards" });
  
//   revealImages(mouse.modifiedPosition.x);
// }
//-----------------------------------------------------------------------------------------------







//-----------------------------------------------------------------------------------------------
// about us slider
const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tab_Nav = function(tabBtnClick){
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove('active');
    });
    
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });
    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
}

tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () => {
        tab_Nav(i);
    });
});
//-----------------------------------------------------------------------------------------------








//-----------------------------------------------------------------------------------------------
// removed animation
// about us effect
// let st = document.querySelector(".staggered-cards");
// let para = document.querySelector(".para")
// st.addEventListener('click', ()=>{
//     para.classList.add("active")
//     st.classList.add("active")
// })
//-----------------------------------------------------------------------------------------------








//-----------------------------------------------------------------------------------------------
// about us efffect
let abt = document.querySelector(".about-us-heading");
let para = document.querySelector(".para");
let obss = 0;

const optionss = { 
    threshold: 0.1
};

const observerr = new IntersectionObserver(function(enteries, observer){
    enteries.forEach(entry => {
        if(entry.isIntersecting){
            obss = 1;
        } 
        console.log(entry);
    })
}, optionss);

observerr.observe(abt);

window.addEventListener('scroll', ()=>{
    if(obss===1){
        para.classList.add("active");
    }
})
//-----------------------------------------------------------------------------------------------








//-----------------------------------------------------------------------------------------------
// text-sec effects
// let tt = document.querySelector(".text-sec");
// let rt = document.querySelector(".right-texter");
// let lt = document.querySelector(".left-texter");
// const options8 = {
//     threshold: 0.6
// };

// let obs8 = 0;
// const observer8 = new IntersectionObserver(function(entries, observer){
//     entries.forEach(entry => {
//         if(entry.isIntersecting) obs8 = 1;
//         console.log(entry)
//     })
// }, options8);

// observer8.observe(tt);

// window.addEventListener('scroll', ()=>{
//     if(obs8===1){
//         rt.classList.add("active");
//         lt.classList.add("active");
//     }
// })
//-----------------------------------------------------------------------------------------------










//-----------------------------------------------------------------------------------------------
// parallax effect
let pp = document.querySelector(".docker");
let ppy = document.querySelector(".docker-right img");
let ppx = document.querySelector(".docker-left img");
let obs5 = 0;
let lastScrollY = 0;

const options5 = { 
    threshold: 0.2
};

const observer5 = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            obs5 = 1;
        } else {
            obs5 = 0;
        }
        console.log(entry);
    })
}, options5);

observer5.observe(pp);


 // Get the current screen width
 var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

 // Check if screen width is greater than 726px

window.addEventListener('scroll', () => {
    if (obs5 === 1 && (screenWidth > 1120) || (screenWidth < 386)) {
        console.log(screenWidth)
        let value = window.scrollY;
        let offS = pp.offsetTop;
        let scrollDirection = (value > lastScrollY) ? 1 : -1; // 1 for down, -1 for up
        lastScrollY = value;

        let qq, qqx;

        if(screenWidth < 386){
            qq = (value - offS) * 0.1 * scrollDirection; // Adjust the multiplier to control the parallax effect
            qqx = (value - offS) * 0.2 * scrollDirection; // Adjust the multiplier to control the parallax effect
        } else{
            qq = (value - offS) * 0.2 * scrollDirection; // Adjust the multiplier to control the parallax effect
            qqx = (value - offS) * 0.3 * scrollDirection; // Adjust the multiplier to control the parallax effect
        }

        // Apply a smooth transition
        ppy.style.transition = 'transform 0.3s ease-out'; // Adjust the duration and easing 
        ppx.style.transition = 'transform 0.3s ease-out'; // Adjust the duration and easing 
        ppy.style.transform = `translateY(${qq}px)`;
        ppx.style.transform = `translateY(${qqx}px)`;
    }
});
 
//-----------------------------------------------------------------------------------------------









//-----------------------------------------------------------------------------------------------
// highlight reel
// var tl = gsap.timeline({scrollTrigger: {
//     trigger: ".highlight",
//     // markers: true, 
//     start : "50% 60%",
//     // start: "top top",
//     end: "150% 50%",
//     scrub: 1.5,
//     pin: true,   // scroll se neeche nahi jayega
// }});

// tl
// .to("#lineone", {
//     marginTop: "-120vh",
// }, 'a')
// .to("#linetwo", {
//     marginTop: "20vh",
// }, 'a')
//-----------------------------------------------------------------------------------------------    












//----------------------------------------------------------------------------------------------------------------
// let target  = 0;
// let current = 0;
// let ease = 0.075;

// const slider = document.querySelector(".sliding")
// const sliderWrapper= document.querySelector(".slider-wrapper")
// const slidess = document.querySelectorAll(".slide")

// let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;


// function lerp(start, end, factor){
//     return start + (end-start) * factor;
// }

// function updateScaleAndPosition() {
//     slidess.forEach((slide) => {
//         const rect = slide.getBoundingClientRect();
//         const centerPosition = (rect.left + rect.right) / 2;
//         const distanceFromCenter = centerPosition - window.innerWidth / 2;

//         let scale, offsetX;
//         if(distanceFromCenter > 0){
//             scale = Math.min(1.75, 1 + distanceFromCenter / window.innerWidth);
//             offsetX = (scale - 1) * 300;
//         } else {
//             scale = Math.max(
//                 0.5,
//                 1 - Math.abs(distanceFromCenter) / window.innerWidth
//             );
//             offsetX = 0;
//         }

//         gsap.set(slide, { scale: scale, x: offsetX});
//     })
// }


// function update(){
//     current = lerp(current, target, ease);

//     gsap.set(".slider-wrapper", {
//         x: -current,
//     });

//     updateScaleAndPosition();
//     requestAnimationFrame(update);
// }

// const pinningTimeline = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".horizontal-slider",
//         pin: ".horizontal-slider",
//         start: "top top",
//         end: "500% top",
//         markers: true,
//         scrub: 1.5,
//     },
// });

// window.addEventListener("resize", ()=>{
//     maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
// })

// window.addEventListener("wheel", (e)=>{
//     target += e.deltaY;
//     target = Math.max(0, target);
//     target = Math.min(maxScroll, target);
// });

// update();
//-----------------------------------------------------------------------------------------------


