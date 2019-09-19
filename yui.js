//NavBar
       var forever =  document.getElementById("display");
        function ever(){
        forever.textContent = "Glory";
        }
       window.setInterval(ever,2000);
       //Slideshow
       var cir = document.getElementsByClassName("circle");
       var pic = document.getElementsByTagName("img");
       cir[0].style.background = "blue";
       pic[0].style.display = "block";
       function slide(arr){
       var i;
       for(i=0;i<pic.length;i++){
       if(i == arr){
       cir[i].style.background ="blue";
       pic[i].style.display = "block";}
       else{
       cir[i].style.background ="gray";
       pic[i].style.display = "none";
       }}}
       cir[0].addEventListener("click",function(){slide(0)});
       cir[1].addEventListener("click",function(){slide(1)});
       cir[2].addEventListener("click",function(){slide(2)});

var person = [{
                name:"Drawing Challenge",
                desc:"Artist are welcome to apply <br> for this       competition",
                qualification:"All age",
                link:"https://www.samanthasbell.com/art-challenge-53-history/"
                
            },
            {
                
                name:"Free Learning",
                desc:"Learn math,science and other subjects.",
                qualification:"All age",
                link:"https://www.khanacademy.org/"
                
            },
            {
                
                name:"Future Technologies",
                desc:"Learn new technologies",
                qualification:"All age",
                link:"https://www.coursera.org/learn/ar?ranMID=40328&ranEAID=vedj0cWlu2Y&ranSiteID=vedj0cWlu2Y-HFOPKfloZYvpBnyBRaQ9Gw&siteID=vedj0cWlu2Y-HFOPKfloZYvpBnyBRaQ9Gw&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=vedj0cWlu2Y"
                
            },
            {
              
                name:"Baking Passion",
                desc:"Baked and be an entreprenur",
                qualification:"All age",
                link:"https://www.skillshare.com/browse/baking"
                
            },
            {
                name:"Discover Science",
                desc:"Master the science and rule the world",
                qualification:"some",
                link:"https://www.classcentral.com/subject/science"
                

            },
            {
                name:"Adobe Learning",
                desc:"Learn art using technologies",
                qualification:"All age",
                link:"https://edex.adobe.com/"
            }]

var content = person.map(x=>'<div class="desc"><h4>'+ x.name +'</h4>'+ 
	'<p>' + x.desc + '<br>'+ x.qualification + '</p><a href="'+x.link+'">More Details...</a></div>');
var main = document.getElementById("dd");
var next = document.getElementById("we");
var prev = document.getElementById("pre");


main.innerHTML = content;
/*main.innerHTML = first.join(" ");
function see(){
main.innerHTML = second.join(" ");
}
function previous(){
main.innerHTML = first.join(" ");
}
next.addEventListener("click",see);
prev.addEventListener("click",previous);*/