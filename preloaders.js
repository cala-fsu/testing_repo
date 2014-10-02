function preload(sources)
{
  jQuery.each(sources, function(i,source) { jQuery.get(source); });
}

function preload(sources)
{
  var images = [];
  for (i = 0, length = sources.length; i < length; ++i) {
    images[i] = new Image();
    images[i].src = sources[i];
  }
}
//The follwing is from pg. 453 in JS for web developers

var EventUtil = {
	addHandler: function(element, type, handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		}else if (element.attachEvent) {
			element.attachEvent("on" + type, handler);
		}else {
			element["on" +type] = handler;
		}
	},
	removeHandler: function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		}else if(element.detachEvent) {
			element.detachEvent("on" + type, handler);
		}else {
			element["on" + type] = null;
		}
	}
};

EventUtil.addHandler(window, "load", function(event){
	alert("Loaded");
});