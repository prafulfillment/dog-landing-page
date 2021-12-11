var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Selectors
var overlayContainer = $('.overlay-container');
var servicesOverlayTriggers = $('.services-overlay-trigger');
var servicesOverlay = $('.overlay-container.services');
var productsOverlayTriggers = $('.products-overlay-trigger');
var productsOverlay = $('.overlay-container.products');

overlayContainer.show();
servicesOverlay.hide();
productsOverlay.hide();

var closeOverlay = $('.close-overlay-button');

// Open Trigger
servicesOverlayTriggers.click(function(trigger) {
  servicesOverlay.show(function() {
    servicesOverlay.css({
      opacity: 1
    });
  });
});

productsOverlayTriggers.click(function(trigger) {
  productsOverlay.show(function() {
    productsOverlay.css({
      opacity: 1
    });
  });
});

// Close Trigger
closeOverlay.click(function(trigger) {
  servicesOverlay.css({
    opacity: 0
  });
  productsOverlay.css({
    opacity: 0
  });
  setTimeout(function() {
    servicesOverlay.hide();
    productsOverlay.hide();
  }, 250);
})


}
/*
     FILE ARCHIVED ON 03:27:35 Jul 23, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:51:19 Oct 27, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 234.068
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.073
  RedisCDXSource: 7.284
  esindex: 0.007
  LoadShardBlock: 210.218 (3)
  PetaboxLoader3.datanode: 216.921 (4)
  CDXLines.iter: 14.552 (3)
  load_resource: 54.426
  PetaboxLoader3.resolve: 28.387
*/