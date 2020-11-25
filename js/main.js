
var menuData = {
  items: [{
    text: "Home",
    href: "index.html"
  }, {
    text: "A propos",
    href: "about-me.html"
  },
  {
    text: "Portfolio",
    items: [{
      text: "Portrait",
      href: "portfolio.html"
    }, {
      text: "Pressbook",
      href: "portfolio.html"
    }, {
      text: "Vin et olive",
      href: "portfolio.html"
    }, {
      text: "Coporate",
      href: "portfolio.html"
    }, {
      text: "Drone",
      href: "portfolio.html"
    }]
  }, {
    text: "Contact",
    href: "contact.html"
  }]
}

var carouselData = [{
    img: "images/carousel/lavande.jpg",
    text: "Text photo 1"
  }, {
    img: "images/carousel/corporate.jpg",
    text: "Text photo 2"
  }, {
    img: "images/carousel/portrait.jpg",
    text: "Text photo 3"
  }, {
    img: "images/carousel/pressbook.jpg",
    text: "Text photo 4"
  }, {
    img: "images/carousel/vin-et-olive.jpg",
    text: "Text photo 5"
  }, {
    img: "images/carousel/drone.jpg",
    text: "Text photo 6"
}]

function setupNavigation() {
  var header = document.getElementsByTagName("header")[0] ;
  if( null == header ) {
    return ;
  }
  var container = document.createElement("div") ;
  container.classList.add( "container-fluid", "h-100" ) ;
  header.append( container ) ;
  
  var row = document.createElement("div") ;
  row.classList.add( "row", "h-100", "align-items-center" ) ;
  container.append( row ) ;
  
  var col = document.createElement("div") ;
  col.classList.add( "col-12", "h-100" ) ;
  row.append( col ) ;
  
  var menu = document.createElement("div") ;
  menu.classList.add( "main-menu", "h-100" ) ;
  col.append( menu ) ;
  
  var nav = document.createElement("nav") ;
  nav.classList.add( "navbar", "h-100", "navbar-expand-lg" ) ;
  menu.append( nav ) ;
  
  var logo = document.createElement("a") ;
  logo.classList.add( "navbar-brand" ) ;
  logo.href = "index.html" ;
  var logoImg = document.createElement("img") ;
  logo.append( logoImg ) ;
  logoImg.src = "img/core-img/logo.png" ;
  logoImg.alt = "Logo" ;
  nav.append( logo ) ;

  var menuButton = document.createElement("button") ;
  menuButton.classList.add("navbar-toggler") ;
  menuButton.type = "button" ;
  menuButton.dataset.toggle = "collapse" ;
  menuButton.dataset.target = "#studioMenu" ;
  menuButton.setAttribute( "aria-controls", "studioMenu" ) ;
  menuButton.setAttribute( "aria-expanded", "false" ) ;
  menuButton.setAttribute( "aria-label", "Toggle navigation" ) ;
  var it = document.createElement("i") ;
  it.classList.add("fa", "fa-bars") ;
  menuButton.append( it ) ;
  menuButton.insertAdjacentHTML( "beforeend", "Menu" ) ;
  nav.append( menuButton ) ;
  
  var navbar = document.createElement("div") ;
  navbar.classList.add( "collapse", "navbar-collapse" ) ;
  navbar.id = "studioMenu" ;
  nav.append( navbar ) ;
  
  var navbarlist = document.createElement("ul") ;
  navbarlist.classList.add( "navbar-nav", "ml-auto" ) ;
  navbar.append( navbarlist ) ;
  
  menuData.items.forEach( function ( item, index ) {
    var menuItem = document.createElement("li") ;
    menuItem.classList.add( "nav-item" ) ;
    if( index == 0 ) {
      menuItem.classList.add( "active" ) ;
    }
    navbarlist.append( menuItem ) ;
    // sub menu items
    if( undefined != item.items ) {
      menuItem.classList.add("dropdown") ;
      var itemLink = document.createElement("a") ;
      itemLink.classList.add( "nav-link", "dropdown-toggle" ) ;
      if( undefined != item.href ) {
        itemLink.href = item.href ;        
      }
      itemLink.role = "button" ;
      itemLink.dataset.toggle = "dropdown" ;
      itemLink.setAttribute( "aria-haspopup", "true" ) ;
      itemLink.setAttribute( "aria-expanded", "false" ) ;
      itemLink.id = "menu-" + String( index ) ;
      itemLink.href = "#" ;
      itemLink.innerHTML = item.text ;
      menuItem.append( itemLink ) ;
      
      var submenu = document.createElement("div") ;
      submenu.classList.add("dropdown-menu") ;
      submenu.setAttribute( "aria-labelledby", "menu-" + String( index ) ) ;
      menuItem.append( submenu ) ;
      
      item.items.forEach((subitem, subindex) => {
        var subItem = document.createElement( "a" ) ;
        subItem.classList.add( "dropdown-item" ) ;
        subItem.href = subitem.href ;
        subItem.innerHTML = subitem.text ;
        submenu.append( subItem ) ;
      });
    }
    else {
      var itemLink = document.createElement("a") ;
      itemLink.classList.add( "nav-link" ) ;
      itemLink.href = item.href ;
      itemLink.innerHTML = item.text ;
      menuItem.append( itemLink ) ;
    }
  });
}

function setupCarousel() {
  var carousel = document.getElementById("welcomeSlider") ;
  if( null == carousel ) {
    return ;
  }
  var inner = document.createElement("div") ;
  carousel.append( inner ) ;
  inner.classList.add( "carousel-inner", "h-100" ) ;
  var indicators = document.createElement("ol") ;
  // carousel.append( indicators ) ;
  indicators.classList.add( "carousel-indicators" ) ;
  
  for( var i=0 ; i<carouselData.length ; i++ ) {
    var data = carouselData[i] ;
    console.log( data.text ) ;
    console.log( data.img ) ;
    
    // create the main pic
    var parent = document.createElement("div") ;
    inner.append( parent ) ;
    parent.classList.add( "carousel-item", "h-100", "bg-img" ) ;
    if( i==0 ) {
      parent.classList.add( "active" ) ;
    }
    parent.style.backgroundImage = "url(" + data.img + ")" ;
    var slideText = document.createElement("div") ;
    slideText.classList.add( "slide-text" ) ;
    
    var num = document.createElement("span") ;
    num.innerHTML = String(i+1) + "." ;
    slideText.append( num ) ;
    var txt = document.createElement("h2") ;
    txt.innerHTML = String(data.text) ;
    slideText.append( txt ) ;
    var interDiv = document.createElement("div") ;
    interDiv.classList.add( "carousel-content", "h-100" ) ;
    interDiv.append( slideText ) ;
    parent.append( interDiv ) ;
    
    // create the indicator pic
    var indicator = document.createElement("li") ;
    indicators.append( indicator ) ;
    indicator.classList.add( "bg-img" ) ;
    if( i==0 ) {
      indicator.classList.add( "active" ) ;
    }
    indicator.dataset.target = "#welcomeSlider" ;
    indicator.dataset.slideTo = String(i) ;
    indicator.style.backgroundImage = "url(" + data.img + ")" ;
  }
}

function preloadCarousel() {
  for( var i=0 ; i<carouselData.length ; i++ ) {
    new Image().src = carouselData[i].img ;
  }
}
