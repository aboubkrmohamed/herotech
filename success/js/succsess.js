 var img=Array.from( document.querySelectorAll(".imges"));

 var lightboxcontainer=document.getElementById("lightboxcontainer");
var lightboxcontaineritem=document.getElementById("lightboxcontaineritem");
var closebtn=document.getElementById("close");
var nextbtn=document.getElementById("next");
var prevbtn=document.getElementById("prev");

var currentindex=0;

for(var i=0;i<img.length;i++)
{
    img[i].addEventListener("click",function(eventInfo){
        
        currentindex=img.indexOf(eventInfo.target);
        var src= eventInfo.target.getAttribute("src");
         console.log(src)
 

        lightboxcontaineritem.style.backgroundImage="url("+src+")";
        lightboxcontainer.style.display="flex";

    })
}
 


 

  closebtn.addEventListener("click",function()
  {
    lightboxcontainer.style.display="none ";    
})

 
function nextslide()
{
currentindex++;
if(currentindex==img.length)
{
    currentindex=0; 
}
var src=img[currentindex].getAttribute("src");
lightboxcontaineritem.style.backgroundImage="url("+src+")";
}
nextbtn.addEventListener("click",nextslide)


 


function prevslide()
{
currentindex--;
if(currentindex<0)
{
    currentindex=img.length-1 ; 
}
var src=img[currentindex].getAttribute("src");
lightboxcontaineritem.style.backgroundImage="url("+src+")";
}

prevbtn.addEventListener("click",prevslide)





document.addEventListener("keydown",function(eventInfo){

  if(eventInfo.keyCode==39)
  {
  nextslide();    
  }
      
  })
  
  document.addEventListener("keydown",function(eventInfo){
  
      if(eventInfo.keyCode==37 )
      {
      prevslide();    
      }
          
      })

      document.addEventListener("keydown",function(eventInfo){
  
        if(eventInfo.keyCode==27 )
        {
          lightboxcontainer.style.display="none ";    

        }
            
        })
        
    
      
  