function openTab(event, tabName) {
//tab system
    var i; 
    var links;
    var content;

    content = document.getElementsByClassName("tabcontent");

    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
  
    links = document.getElementsByClassName("tablinks");

    for (i = 0; i < links.length; i++) {
      links[i].className = links[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";

    event.currentTarget.className += " active";
  }