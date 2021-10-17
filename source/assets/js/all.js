//= require_tree .

var js = js || {},
  body = document.getElementsByTagName('body')[0];

// Scripts
js.main = {
  init: function () {
    // this.cookiesAlert();
    this.externalLinks();
    this.gsapPageLoad();
    this.waypointsHeader();
    this.wavypointHero();
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
  gsapPageLoad: function() {
    // var tl = gsap.timeline({repeat: 0, repeatDelay: 0});
    gsap.to(".site-main", {delay: 1, ease: "circ.out", duration: 1, opacity: 1});
    gsap.fromTo(".site-block-hero-content", {y: '120%'}, {delay: 1.2, ease: "circ.out", duration: 0.8, y: '0'});
    gsap.fromTo(".site-header-logo", {y: '-150%'}, {delay: 1.5, ease: "circ.out", duration: 1.5, y: '0'});
    gsap.fromTo(".site-nav-link:nth-child(1)", {y: '-20px', opacity: '0'}, {delay: 3.2, ease: "circ.out", duration: 1, opacity: '1', y: '0'});
    gsap.fromTo(".site-nav-link:nth-child(2)", {y: '-20px', opacity: '0'}, {delay: 3.3, ease: "circ.out", duration: 1, opacity: '1', y: '0'});
    gsap.fromTo(".site-nav-link:nth-child(3)", {y: '-20px', opacity: '0'}, {delay: 3.4, ease: "circ.out", duration: 1, opacity: '1', y: '0'});
    gsap.fromTo(".site-nav-link:nth-child(4)", {y: '-20px', opacity: '0'}, {delay: 3.5, ease: "circ.out", duration: 1, opacity: '1', y: '0'});
    gsap.fromTo(".site-nav-link:nth-child(5)", {y: '-20px', opacity: '0'}, {delay: 3.6, ease: "circ.out", duration: 1, opacity: '1', y: '0'});
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
    var $b = $('.site-block-black');
    var $s = $('.site-block-white');
    $b.each(function () {
      var waypoint = new Waypoint({
        element: this,
        handler: function(direction){
          if (direction === 'up') {
            $('.site-header').addClass('dark');
          }
        },
        offset: '-80%'
      })
      var waypoint = new Waypoint({
        element: this,
        handler: function(direction){
          if (direction === 'down') {
            $('.site-header').addClass('dark');
          }
        },
        offset: '0'
      })
    });
    $s.each(function () {
      var waypoint = new Waypoint({
        element: this,
        handler: function(direction){
          if (direction === 'up') {
            $('.site-header').removeClass('dark');
          }
        },
        offset: function() {
          return -this.element.clientHeight
        }
      })
      var waypoint = new Waypoint({
        element: this,
        handler: function(direction){
          if (direction === 'down') {
            $('.site-header').removeClass('dark');
          }
        },
        offset: '0'
      })
    });
  },
  wavypointHero: function() {
    var waypoint = new Waypoint({
      element: $('#why'),
      handler: function(direction){
        if (direction === 'down') {
          gsap.to(".site-block-hero", {delay: 0, duration: 0, opacity: 0});
          // $('.site-block-hero').css('opacity', '0');
        }
      },
      offset: '0'
    })
    var waypoint = new Waypoint({
      element: $('#why'),
      handler: function(direction){
        if (direction === 'up') {
          gsap.to(".site-block-hero", {delay: 1, ease: "circ.out", duration: 1, opacity: 1});
          // $('.site-block-hero').css('opacity', '1');
        }
      },
      offset: '0'
    })
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