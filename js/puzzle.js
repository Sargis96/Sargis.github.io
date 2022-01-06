const dragstart = function(event) {
    event.dataTransfer.setData("text", event.target.id);
}
  const dragover = function(event) {
      if(event.target.nodeName.toLowerCase()==="img"){
          return true;
      }
      event.preventDefault();
  } 
   
  const drop = function(event) {
      event.preventDefault();
      let imageid = event.dataTransfer.getData("text");
      event.target.appendChild(document.getElementById(imageid));
  };
  const cells = document.getElementsByClassName("col")
  Array.from(cells).forEach((element) => {
      element.addEventListener('dragover',dragover);
      element.addEventListener('drop',drop);
  });

 const image = document.getElementsByTagName("img");
 Array.from(image).forEach((element) => {
     element.addEventListener('dragstart',dragstart);
 } );