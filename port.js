
// var frank = document.getElementById("Frontend_Developer1");
// var frontdata = document.getElementById("exp_time")
// var frontdata2 = document.getElementById("exp_time1")
// frank.addEventListener("click",function(e){
//     e.preventDefault();
   
   
    // console.log(frontdata)
    // console.log(front1)
        
//         frontdata.style.display="none";
//         frontdata2.style.display="block"
//         franky.style.background="none"
//         frank.style.background = "linear-gradient(hsla(7,100%,78%,0),hsl(342.81deg 90.1% 33.08%),hsla(7,100%,78%,.51))";
// })
// var franky =document.getElementById("Frontend_Developer");

// franky.addEventListener("click",function(e){
//     e.preventDefault();
    // console.log(frontdata)
    // console.log(front1)
//     console.log("hello")
        
//         frontdata2.style.display="none";
//         frontdata.style.display="block";
//         frank.style.background="none";
//         franky.style.background = "linear-gradient(hsla(7,100%,78%,0),hsl(342.81deg 90.1% 33.08%),hsla(7,100%,78%,.51))";
// })

var drop = document.querySelector("div.dropdown")
// console.log(drop)
drop.addEventListener("click",function(e){
    e.preventDefault();
    // var ul = document.querySelector("section ul")
    // ul.classList.toggle("list1")
    console.log(drop)
    var dropChild1 = drop.childNodes[1];
    var dropChild2 = drop.childNodes[3];
    var dropChild3 = drop.childNodes[5]
    console.log(dropChild1)
    console.log(dropChild2)
    console.log(dropChild3)
    if(e.target == drop){
        console.log("dfdfds")
    dropChild1.style.cssText = "transform: rotate(45deg) translateX(6.5px); border:1px solid white";
    dropChild2.style.cssText = "transform: rotate(-43deg) translateX(6px);  border:1px solid white";
    dropChild3.style.cssText = "transform: scale(0);transform-origin:right center;";
    }
    else{
        dropChild1.style.cssText = "transform: rotate(0) translateX(0);color:red";
        dropChild2.style.cssText = "transform: rotate(0) translateX(0);color:red";
        dropChild3.style.cssText = "transform: scale(1);transform-origin: left center;color:red";
    }

    var list = document.querySelector("ul")
    console.log(list)

    // if (e.target == drop){
    //     list.style.cssText = "transform:transla
    
    // }
    // else{
    //     list.style.cssText = "transform:translateX(-100%);";
    // }
    
})

var changeul = document.querySelector("section ul")
var btn = document.querySelector("div.dropdown")
        // var li1 = document.createElement("li")
        // li1.innerHTML = "<a href='#'>About Me</a>"
        // var li2 = document.createElement("li")
        // li2.innerHTML = "<a href='#'>Services</a>"
        // var li3 = document.createElement("li")
        // li3.innerHTML = "<a href='#'>Experience & Education</a>"
        // var li4 = document.createElement("li");
        // li4.innerHTML = "<a href='#'>My work</a>";
        // var li5 = document.createElement("li");
        // li5.innerHTML = "<a href='#'>Skills</a>";
        // var li6 = document.createElement("li");
        // li6.innerHTML = "<a href='#'>Testimonials</a>";
        // var li7 = document.createElement("li");
        // li7.innerHTML = "<a href='#'>Contact</a>";


        // changeul.appendChild(li1);
        // changeul.appendChild(li2);
        // changeul.appendChild(li3);
        // changeul.appendChild(li4);
        // changeul.appendChild(li5);
        // changeul.appendChild(li6);
        // changeul.appendChild(li7);
        

btn.addEventListener("click",function(e){
    console.log(changeul)
    
    if(e.target == btn){
        console.log("ssdsdsd")
        changeul.style.cssText="transform:none";
        // changeul.classList.toggle("list2")
        // changeul.classList.remove("list")   

    }
    else{
        changeul.style.cssText="transform:block";
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

// var skill = document.querySelector("ul.skilled");
// console.log(skill);
// skill.addEventListener("click",function(e){
//     e.preventDefault();
    // console.log(e.target)
    // console.log(e.target.parentNode.parentNode.textContent)
    // var match = e.target.parentNode.parentNode.textContent;
    // console.log(match)

    

    // if(match === "HTML")
    // {
    //     console.log("hello")
        // html.style.display="block";
    // }
    // else if(match == "CSS")
    // {
    //     css.style.display="block";
    // }
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

    var icon=function(){
        var array = [2,4,5,8,1,3,6,7]
        var low = 0;
        var high= 0;
        if(low>=high){
            return;
            var start = low;
            var end = high;
            var mid = ((end-start)/2)
            
        }
    }