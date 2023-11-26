

var changeul = document.getElementById("list")
var btn = document.getElementById("dropdown")
console.log(btn)

btn.addEventListener("click", function (e) {

    var dropChild1 = btn.childNodes[1];
    var dropChild2 = btn.childNodes[3];
    var dropChild3 = btn.childNodes[5];

    console.log(dropChild3)
    if (e.target == dropChild1 || e.target == dropChild2 || e.target == dropChild3) {

        changeul.style.cssText = "transform:none";

        dropChild1.style.cssText = "transform: rotate(45deg) translateX(6.5px); border:1px solid white";
        dropChild2.style.cssText = "transform: rotate(-43deg) translateX(6px);  border:1px solid white";
        dropChild3.style.cssText = "transform: scale(0);transform-origin:right center;";

    }
    else {

        dropChild1.style.cssText = "transform: rotate(0) translateX(0);color:red";
        dropChild2.style.cssText = "transform: rotate(0) translateX(0);color:red";
        dropChild3.style.cssText = "transform: scale(1);transform-origin: left center;color:red";
        changeul.style.cssText = "transform:block";

    }

})


       
     


var front =document.getElementById("Mumbai");
var front1 = document.getElementById("Aptech");
var frontdata = document.getElementById("edu_time")
var frontdata2 = document.getElementById("edu_time1")
front1.addEventListener("click",function(e){
    e.preventDefault();
   
   
    console.log(frontdata)
    console.log(front1)
        
        frontdata.style.display="none";
        frontdata2.style.display="block"
        front.style.background="none"
        front1.style.background = "linear-gradient(hsla(7,100%,78%,0),hsl(342.81deg 90.1% 33.08%),hsla(7,100%,78%,.51))";
})
front.addEventListener("click",function(e){
    e.preventDefault();
    console.log(frontdata)
    console.log(front1)
        
        frontdata2.style.display="none";
        frontdata.style.display="block";
        front1.style.background="none";
        front.style.background="linear-gradient(hsla(7,100%,78%,0),hsl(342.81deg 90.1% 33.08%),hsla(7,100%,78%,.51))";
})


    var skills = document.getElementsByClassName("skilled");
    console.log(skills)
    // console.log(skill.length)
    Array.from(skills).forEach(function(skill){
        skill.addEventListener('click', function(e){
            // e.preventDefault()
            console.log(skill)
            var circle = e.target.parentElement.childNodes[1].childNodes[1];
            console.log(circle)
            var text = e.target.textContent;
            // console.log(text)
            // var text=this.firstChild.nextSibling.nodeValue;
            // console.log(text)
            var html = document.getElementById("skill_html")
            var css = document.getElementById("skill_css")
            var javascript = document.getElementById("skill_javascript")
            var bootstrap = document.getElementById("skill_bootstrap")
            var python = document.getElementById("skill_python")
            // circle.style.background=""
            
        if(text == 'CSS'){
            circle.style.background="#1e847f"
            css.style.display="block";
            html.style.display="none";
            python.style.display="none";
            javascript.style.display="none"
            bootstrap.style.display="none"
                
        }
        else if (text=='HTML'){
            circle.style.background="#1e847f"
            html.style.display="block";
            css.style.display="none";
            python.style.display="none"
            javascript.style.display="none"
            bootstrap.style.display="none"
        }
        else if(text == 'JavaScript'){
            circle.style.background="#1e847f"
            console.log("hello")
            javascript.style.display="block"
            html.style.display="none";
            css.style.display="none";
            bootstrap.style.display="none"
            python.style.display="none"
        }
        else if(text == 'Bootstrap'){
            circle.style.background="#1e847f"
            bootstrap.style.display="block"
            html.style.display="none";
            css.style.display="none";
            javascript.style.display="none"
            python.style.display="none"
        }
        else if(text == "Python"){
            circle.style.background="#1e847f"
            python.style.display="block"
            html.style.display="none";
            css.style.display="none";
            javascript.style.display="none"
            bootstrap.style.display="none"
        }
        else{
            circle.style.background="none"
        }
    
        })
    
    })

   
