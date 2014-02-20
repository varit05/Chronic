
/* Fixing menu */

var num = 50; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('#links').addClass('fixed');
    } else {
        $('#links').removeClass('fixed');
    }
});

/* Scrolling web page smoothly */
var lastId,
    topMenu = $("#links"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});

('ul.nav a').bind('click',function(event){
        var $anchor = $(this);
        
      //  if you want to use one of the easing effects:
        /*$('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 500,'easeInOutExpo');*/
         
        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1000);
        event.preventDefault();
    });
