//javascripts

var body = document.querySelector('body');
var bars = document.querySelector('.bars');
var header = document.querySelector('header');
var sticky = header.offsetTop;
var gototop = document.querySelector('.gototop');



bars.onclick = () => {
	body.classList.toggle('togmenu');
}

// sticky
window.onscroll = () => {
 var stickyheader = () => {
    var sticky = header.offsetTop;
	if(window.pageYOffset > sticky){
		header.classList.add('sticky');
        gototop.classList.add('show');
	}
    else if(window.pageYOffset >= 200){
    }
	else{
		header.classList.remove('sticky');
        gototop.classList.remove('show');
	}
}
stickyheader()};
