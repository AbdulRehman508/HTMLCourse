// 1st project Complete 


    // const colors = ["#000080", "#00008B", "#0000CD", "#0000FF","#006400", "#008000", "#008080", "#008B8B","#00BFFF","#00CED1","#00FA9A","#00FF00","#00FF7F","#00FFFF","#00FFFF","#191970","#1E90FF","#20B2AA","#228B22","#2E8B57","#2F4F4F","#2F4F4F","#32CD32","#3CB371","#40E0D0","#4169E1","#4682B4","#483D8B","#48D1CC","#4B0082","#556B2F","#5F9EA0","#6495ED","#663399","#66CDAA","#696969","#696969","#6A5ACD","#6B8E23","#708090","#708090","#778899","#778899","#7B68EE","#7CFC00","#7FFF00","#7FFFD4","#800000","#800080","#808000","#808080","#808080","#87CEEB","#87CEFA","#8A2BE2","#8B0000","#8B008B","#8B4513","#8FBC8F","#90EE90","#9370DB","#9400D3","#98FB98","#9932CC","#9ACD32","#A0522D","#A52A2A","#A9A9A9","#A9A9A9","#ADD8E6","#ADFF2F","#AFEEEE","#B0C4DE","#B0E0E6","#B22222","#B8860B","#BA55D3","#BC8F8F","#BDB76B","#C0C0C0","#C71585","#CD5C5C","#CD853F","#D2691E","#D2B48C","#D3D3D3","#D3D3D3","#D8BFD8","#DA70D6","#DAA520","#DB7093","#DC143C","#DCDCDC","#DDA0DD","#DEB887","#E0FFFF","#E6E6FA","#E9967A","#EE82EE","#EEE8AA","#F08080","#F0E68C","#F0F8FF","#F0FFF0","#F0FFFF","#F4A460","#F5DEB3","#F5F5DC","#F5F5F5","#F5FFFA","#F8F8FF","#FA8072","#FAEBD7","#FAF0E6","#FAFAD2","#FDF5E6","#FF0000","#FF00FF","#FF00FF","#FF1493","#FF4500","#FF6347","#FF69B4","#FF7F50","#FF8C00","#FFA07A","#FFA500","#FFB6C1","#FFC0CB","#FFD700","#FFDAB9","#FFDEAD","#FFE4B5","#FFE4C4","#FFE4E1","#FFEBCD","#FFEFD5","#FFF0F5","#FFF5EE","#FFF8DC","#FFFACD","#FFFAF0","#FFFAFA","#FFFF00","#FFFFE0","#FFFFF0","#FFFFFF"];
    // const btn = document.getElementById("btn");
    // const color = document.querySelector(".color");

    // btn.addEventListener("click",  () => {
    // const randomNumber = getRandomNumber();
    // document.body.style.backgroundColor = colors[randomNumber];
    // color.textContent = colors[randomNumber];
    // });

    // function getRandomNumber() {
    // return Math.floor(Math.random() * colors.length);
    // }


// 2nd project complete 


    // let counter = 0;
    // const result = document.getElementById("result");
    // const plusButton = document.getElementById("plusButton");
    // const minusButton = document.getElementById("minusButton");

    // plusButton.onclick = function (){
    //     counter ++;
    //     result.innerText = counter;
    // }
    // minusButton.onclick = function(){
    //     counter --;
    //     result.innerText = counter
    // }


// 3rd project complete 


    //  let rev = 0;
    // carousel(rev);

    // function previousReview() {
    //     rev = rev - 1;
    //     carousel(rev);
    // }

    // function nextReview() {
    //     rev = rev + 1;
    //     carousel(rev);
    // }

    // function carousel(review) {
    //     let reviews = document.getElementsByClassName("review__items");
    //     if (review >= reviews.length) {
    //         review = 0;
    //         rev = 0;
    //     }
    //     if (review < 0) {
    //         review = reviews.length - 1;
    //         rev = reviews.length - 1;
    //     }
    //     for (let i = 0; i < reviews.length; i++) {
    //         reviews[i].style.display = "none";
    //     }
    //     reviews[review].style.display = "block";
    // }


// 4th project complete 


    // const navToggle = document.querySelector('.navbar-toggler');
    // const links = document.querySelector('.navbar-nav');

    // navToggle.addEventListener('click',function(){
    //     // console.log("links",links.classList)
    //     // console.log("links",links.classList.contains("random"));
    //     // console.log("links",links.classList.contains("navbar-nav"));

    //     if(links.classList.contains("show-link")){
    //         links.classList.remove("show-link");
    //     }else{
    //         links.classList.add("show-link");
    //     }
    // })


// 5th project complete


    // function openNav() {
    // document.getElementById("mySidenav").style.width = "250px";
    // }

    // function closeNav() {
    // document.getElementById("mySidenav").style.width = "0";
    // }


// 6th project complete 


    // var modal = document.getElementById("myModal");
    
    // var btn = document.getElementById("myBtn");
    
    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];
    
    // // When the user clicks the button, open the modal 
    // btn.onclick = function() {
    //   modal.style.display = "block";
    // }
    
    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //   modal.style.display = "none";
    // }
    
    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }


// 7th project complete 


    // var acc = document.getElementsByClassName("accordion");
    // var i;
    // for (i = 0; i < acc.length; i++) {
    //   acc[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     var panel = this.nextElementSibling;
    //     if (panel.style.maxHeight) {
    //       panel.style.maxHeight = null;
    //     } else {
    //       panel.style.maxHeight = panel.scrollHeight + "px";
    //     } 
    //   });
    // }


// 8th project complete


    // const allView = document.getElementById('allView');
    // const breakFastView = document.getElementById('breakFastView');
    // const lunchView = document.getElementById('lunchView');
    // const dinnerView = document.getElementById('dinnerView');

    //     allView.style.display = 'block';
    //     breakFastView.style.display = 'none';    
    //     lunchView.style.display = 'none';
    //     dinnerView.style.display = 'none';

    // function breakfastView() {
    //     allView.style.display = 'none';
    //     breakFastView.style.display = 'block';
    //     lunchView.style.display = 'none';
    //     dinnerView.style.display = 'none';
    // }
    // function allViewed(){
    //     allView.style.display = 'block';
    //     breakFastView.style.display = 'none';
    //     lunchView.style.display = 'none';
    //     dinnerView.style.display = 'none';
    // }
    // function lunchViewed(){
    //     allView.style.display = 'none';
    //     breakFastView.style.display = 'none';
    //     lunchView.style.display = 'block';
    //     dinnerView.style.display = 'none';
    // }
    // function dinnerViewed(){
    //     allView.style.display = 'none';
    //     breakFastView.style.display = 'none';
    //     lunchView.style.display = 'none';
    //     dinnerView.style.display = 'block';
    // }


// 9th project complete

    // const video = document.getElementById("myVideo");
    // const btn = document.getElementById("myBtn");

    // function videoPlay() {
    //   if (video.paused) {
    //     video.play();
    //     btn.innerHTML = "Pause";
    //   } else {
    //     video.pause();
    //     btn.innerHTML = "Play";
    //   }
    // }

// 10th project complete

    // window.onscroll = function() {
    //     scrollFunction()
    // };

    // const nav = document.getElementById("navbar");
    // const topLink = document.querySelector("fixed-nav");
    // function scrollFunction() {
    //     const scrollHeight = window.pageYOffset;
    //     const navHeight = nav.getBoundingClientRect().height;
    //     if(scrollHeight > navHeight){
    //         nav.classList.add('fixed-nav');
    //     }else{
    //         nav.classList.remove('fixed-nav');
    //     }
    // }

// 13th project complete

// const text = [
//     `I'm baby intelligentsia hot chicken iPhone, letterpress food truck lomo roof party celiac +1 photo booth yr thundercats affogato. Poke pork belly PBR&B, vape fashion axe hashtag chillwave brooklyn cloud bread marfa cold-pressed adaptogen. Ennui tilde fam, chicharrones irony you probably haven't heard of them raclette poutine. Intelligentsia seitan chicharrones, enamel pin brunch vaporware art party kitsch retro. Vegan sustainable tumeric cronut. Pug aesthetic PBR&B glossier selvage, art party salvia wayfarers. Etsy taiyaki typewriter chicharrones, taxidermy cold-pressed pabst vinyl cronut pok pok 8-bit fam.`,
//     `Activated charcoal direct trade palo santo vape everyday carry pork belly mustache kitsch gochujang. Vexillologist shoreditch deep v, keytar ethical seitan sartorial kale chips irony tumeric microdosing brunch. Keffiyeh master cleanse next level, glossier lumbersexual shaman af edison bulb distillery knausgaard vape small batch portland. Cred truffaut vape deep v +1, gastropub hot chicken raw denim helvetica umami offal.`,
//     `Dreamcatcher sartorial asymmetrical crucifix wolf godard, coloring book squid freegan affogato lumbersexual franzen. Drinking vinegar vape chillwave pinterest tofu pug hella sartorial neutra cray tumeric. Poke cloud bread XOXO salvia. Glossier jean shorts craft beer gastropub, squid pitchfork humblebrag listicle taiyaki messenger bag retro thundercats subway tile raw denim. Hoodie asymmetrical food truck listicle pour-over.`,
//     `Pop-up tote bag twee squid asymmetrical lyft roof party ugh try-hard glossier pabst bicycle rights jean shorts single-origin coffee. IPhone tumblr narwhal, tattooed mumblecore you probably haven't heard of them XOXO authentic art party bicycle rights. Bespoke bitters master cleanse austin authentic lumbersexual mixtape man bun art party tilde swag. Tacos bitters chicharrones thundercats selfies chartreuse chia. Put a bird on it taxidermy cornhole VHS, tousled ennui fam hexagon craft beer marfa DIY pinterest.`,
//     `Air plant deep v polaroid church-key. Farm-to-table ramps put a bird on it pickled aesthetic pork belly beard tbh street art pabst. Pop-up cliche before they sold out hoodie heirloom flannel schlitz organic. Crucifix forage cardigan before they sold out umami echo park subway tile art party squid shoreditch photo booth.`,
//     `Yr offal cornhole neutra. Cronut kale chips hoodie, mustache tilde tacos palo santo fashion axe whatever pop-up post-ironic pitchfork pok pok ethical. Literally freegan post-ironic wolf listicle synth gochujang tousled palo santo 3 wolf moon health goth next level. Asymmetrical you probably haven't heard of them lomo post-ironic, pitchfork crucifix narwhal retro chia tofu schlitz. Kitsch keytar normcore listicle flexitarian fashion axe chartreuse jianbing yr vice flannel cred.`,
//     `Jianbing live-edge bicycle rights messenger bag, street art offal squid gastropub food truck kale chips locavore. Mustache humblebrag banjo, shaman offal photo booth coloring book mumblecore typewriter tbh you probably haven't heard of them. Disrupt glossier umami pop-up, schlitz listicle keytar ramps. Try-hard tumblr crucifix aesthetic lyft.`,
//     `Try-hard woke irony selvage listicle, literally adaptogen tilde messenger bag deep v hexagon stumptown gastropub. YOLO yuccie godard copper mug, slow-carb put a bird on it williamsburg offal craft beer trust fund sustainable palo santo 8-bit. Venmo XOXO drinking vinegar kale chips cred semiotics, vinyl helvetica hoodie bespoke leggings pop-up. Polaroid lomo tofu vape. Chicharrones mumblecore taiyaki, direct trade prism vinyl cardigan subway tile flexitarian. Aesthetic food truck glossier coloring book. Biodiesel distillery crucifix schlitz skateboard ennui master cleanse pok pok normcore cardigan.`,
//     `Cliche organic woke yr gluten-free, twee PBR&B everyday carry 8-bit roof party. Hexagon craft beer pinterest humblebrag raw denim pabst schlitz celiac. Quinoa hoodie man braid, iPhone flannel chia scenester pinterest kickstarter enamel pin health goth aesthetic art party cliche mustache. Irony cred street art locavore green juice.`,
//     `Tilde twee af drinking vinegar trust fund. Ramps vaporware hell of kombucha 8-bit chambray YOLO wolf vinyl pop-up cornhole activated charcoal mixtape. Mixtape marfa before they sold out XOXO poutine craft beer scenester cronut drinking vinegar knausgaard you probably haven't heard of them hella. Literally selvage mumblecore activated charcoal echo park vegan deep v fingerstache irony kogi microdosing trust fund. Schlitz cloud bread activated charcoal, master cleanse kitsch shoreditch umami bicycle rights la croix post-ironic biodiesel edison bulb. 8-bit disrupt banjo selvage. Flannel selfies organic put a bird on it keytar, lo-fi health goth umami fam four loko kombucha adaptogen hammock austin tilde.`
//   ]
  
//   const form = document.querySelector(".lorem-form");
//   const numofpara = document.getElementById("numofpara");
//   const numofparaRange = document.getElementById("numofparaRange");
//   const result = document.querySelector(".lorem-text");
  
//   function syncParaNumbers(e) {
//     const value = e.target.value;
//     numofpara.value = value;
//     numofparaRange.value = value;
//   }
  
//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     const value = parseInt(numofpara.value);
//     let tempText = text.slice(0, value);
//     tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
//     result.innerHTML = tempText;
//   })
  
//   numofpara.addEventListener('input', syncParaNumbers)
//   numofparaRange.addEventListener('input', syncParaNumbers)

// 14th project complete

// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }

// 15th project complete

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}