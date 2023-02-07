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

  function OldtoggleButton() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'StyleSheet1.css') {
        theme.setAttribute('href', 'StyleSheet2.css');
    } else {
        theme.setAttribute('href', 'StyleSheet1.css');
    }

    page_type = localStorage.getItem('page_type');


    if(page_type === null){
   	  page_type = 2;
      localStorage.setItem("page_type", 2);
    }

    if(page_type == 1){
      StyleSheet_1_mode();
    }
    else{
      StyleSheet_2_mode();
    }
}

function toggleButton() {

  page_type = localStorage.getItem('page_type');


  if(page_type === null){
     page_type = 2;
    localStorage.setItem("page_type", 2);
  }

  if(page_type == 1){
    StyleSheet_1_mode();
  }
  else{
    StyleSheet_2_mode();
  }
}

function load_style()
{
    page_style = localStorage.getItem('page_stylesheet_name');
    if(page_style === null){
   	 page_style = "StyleSheet2.css";
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





