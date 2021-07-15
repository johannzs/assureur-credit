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

function readCookie(name) {
	var nameEQ = name + '=';
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function setCookie(c_name,value,exdays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value+"; path=/";
}

jQuery(document).ready(function($){
	var isTactile =  (/ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle|ipod|mobile|avantgo|bada|iphone|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|windows phone/i.test(navigator.userAgent.toLowerCase()||navigator.vendor||window.opera));
	
	//pour les numéros de téléphone
	if (readCookie('deviceview') != 'smartphone') {
		$('a.tel').before('<span class="tel"></span>');
		$('span.tel').append($('a.tel').html());
		$('a.tel').remove();
	}
	if(!isTactile){
	 	$('[data-toggle="tooltip"]').tooltip();
	}else{
		$('[data-toggle="tooltip"]').after(function(){
			$(this).children('.glyphicon').hide();
			return "<br><i>"+$(this).attr('title')+"</i>"; 
		});
	}
});

}
/*
     FILE ARCHIVED ON 15:48:15 Oct 13, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:19:28 Jul 12, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 224.648
  exclusion.robots: 0.09
  exclusion.robots.policy: 0.083
  RedisCDXSource: 22.305
  esindex: 0.009
  LoadShardBlock: 184.825 (3)
  PetaboxLoader3.datanode: 208.47 (4)
  CDXLines.iter: 15.286 (3)
  load_resource: 82.016
  PetaboxLoader3.resolve: 28.334
*/