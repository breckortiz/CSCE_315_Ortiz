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


function load_style()
{
    page_style = localStorage.getItem('page_stylesheet_name');
    if(page_style === null){
   	 page_style = "StyleSheet2.css";
    }
    
    if(page_style == "StyleSheet2.css"){
      localStorage.setItem("page_stylesheet_name", "StyleSheet2.css");
    }
    else{
      localStorage.setItem("page_stylesheet_name", "StyleSheet1.css");
    }
    document.getElementById('page_style').setAttribute("href", page_style);
}

function StyleSheet_2_mode()
{
    localStorage.setItem("page_stylesheet_name", "StyleSheet2.css");
    load_style();
}

function StyleSheet_1_mode()
{
    localStorage.setItem("page_stylesheet_name", "StyleSheet1.css");
    load_style();
}

load_style();  // load style immediately





