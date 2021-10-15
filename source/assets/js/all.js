//= require_tree .

var js = js || {},
  body = document.getElementsByTagName('body')[0];

// Scripts
js.main = {
  init: function () {
    // this.cookiesAlert();
    this.externalLinks();
  },
  cookiesAlert: function() {
    window.addEventListener("load", function(){
      window.cookieconsent.initialise({
        "content": {
          "message": "This website uses cookies to ensure you get the best experience on our website.",
          "href": "http://myfdtps.netlify.com/privacy-policy"
        }
      })});
  },
  externalLinks: function() {
    function externalLinks() {
      var anchors = document.querySelectorAll( 'a' );
      for( var i = 0; i < anchors.length; i++ ) {
        if ( anchors[i].hostname !== window.location.hostname ) {
            anchors[i].setAttribute( 'target', '_blank' );
        }
      }
    }
    externalLinks();
  },
  functionMenu: function() {
    $('#functionMenuTrigger').on("click", function(){
      if($('body').hasClass('menuOpen')){
        $('body').removeClass('menuOpen');
      } else {
        $('body').addClass('menuOpen');
      }
    });
  },
  masonry: function() {
    var $grid = $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      percentPosition: true,
    });
    $grid.imagesLoaded().progress( function() {
      $grid.masonry('layout');
    });
  },
  waypointsHeader: function() {
    var b = document.getElementsByTagName('body')[0];
    var waypoint = new Waypoint({
      element: document.getElementsByClassName("site-block")[1], 
      handler: function(direction) { 
        if (direction === 'down'){
          b.classList.add("fold");
        }
      },
      offset: '0'
    });

    var waypoint = new Waypoint({
      element: document.getElementsByClassName("site-block")[1],
      handler: function(direction) {
        if (direction === 'up'){
          b.classList.remove("fold");
        }
      },
      offset: '0'
    });
  },
  journalShare: function() {
    $("#journal-share").jsSocials({
      shares: ["twitter", "facebook", "linkedin", "email"],
      showLabel: false,
    });
  },
};
document.addEventListener('DOMContentLoaded', function(){
  js.main.init();
});