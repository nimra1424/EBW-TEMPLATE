


function sizeButtonFunction(e){
    var target = e.target,
    status = e.target.classList.contains('active');

    e.target.classList.add(status ? 'inactive' : 'active');
    e.target.classList.remove(status ? 'active' : 'inactive'); 
}
    

function swatchFunction(e){
    var target = e.target,
    status = e.target.classList.contains('swatchActive');

    e.target.classList.add(status ? 'swatchInactive' : 'swatchActive');
    e.target.classList.remove(status ? 'swatchActive' : 'swatchInactive'); 
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
// function scroll(){
//     const controller = new ScrollMagic.Controller();
//     new ScrollMagic.Scene({
//         duration: 500, //500pixels
//         triggerElement: '.outfit-left-image'
//         // triggerHook: 0
//     })
//     .addIndicators()
//     .addTo(controller);
// }
// scroll();