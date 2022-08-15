gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger:".content",
  start: "top 6%",
  // end: "botom 0%",
  markers:true,
  toggleClass: {targets: "nav", className: "nav-active"}
})

//a la inversa, desaparece
// gsap.to ('div', {opacity: 0, duration: 1, y: -50});

// gsap.from ('div', {opacity: 0, duration: 2, y: 50}); //50 positivo viene de abajo

let rule = CSSRulePlugin.getRule("span:after");

// gsap.from ('.anim1', {opacity: 0, duration: 1, y: -50, stagger: 0.60});//viene de abajo

// gsap.from('img',{duration: 1, opacity: 0, y: 30, delay:1.4 });

// gsap.to( rule, {cssRule:{scaleY: 0}, duration:1,  });
// gsap.from('aside',{duration: 1, opacity: 0,delay: 1.1 ,backgroundPosition: "200px 0px" });

let tl = gsap.timeline({defaults:{duration: 1}})

tl.from(".anim1", {y: -50, stagger: .6, opacity:0 })
.to(rule, {duration: 1.8, cssRule: {scaleY:0}}, "-=2.2")
.from("aside", {backgroundPosition: "200px 0px", opacity: 0}, "-=1.5")
.from("img", {y: 50, opacity: 0}, "-=.5")

document.getElementById("cta").addEventListener("click", () => {
  tl.reserved()  ? tl.play() : tl.reserved();
})

