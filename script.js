var active = 3;

var mncircles = document.querySelectorAll(".mncircle");

gsap.to(mncircles[active - 1], {
  opacity: 0.5,
});

mncircles.forEach(function (val, index) {
  val.addEventListener("click", function () {
    gsap.to("#circle", {
      rotate: (3 - (index + 1)) * 10,
    });
    greyout();
    gsap.to(this, {
      opacity: 0.5,
    });
  });
});

function greyout() {
  gsap.to(mncircles, {
    opacity: 0.08,
  });
}

gsap.to("#circle", {
  rotate: 0,
  ease: Expo.easeinout,
  duration: 2,
});
