var tl=gsap.timeline()
tl.to("#main",{
    y:"350vh",
    scale:0.5,
    duration:0
})
tl.to("#main",{
    y:"0vh",
    duration:1,
    delay:1
})
tl.to("#main",{
    rotate:360,
    scale:1
})

document.querySelector("#b1").addEventListener("click",function(){
 alert("Under Graduation");
});
document.querySelector("#b2").addEventListener("click",function(){
    alert("Post Graduation");
}); 
document.querySelector("#b3").addEventListener("click",function(){
    alert("Diploma");
});