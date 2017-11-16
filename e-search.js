
(function($){

    $.fn.extend({
        search: function(callback,timeout){
            timeout = timeout || 1e3; // 1 second default timeout
            var timeoutReference,
                search = function(el){
                    if (!timeoutReference) return;
                    timeoutReference = null;
                    callback.call(el);
                };
            return this.each(function(i,el){
                var $el = $(el);
                // Chrome Fix (Use keyup over keypress to detect backspace)
                // thank you @palerdot
                $el.is(':input') && $el.on('keyup keypress paste',function(e){
                    // This catches the backspace button in chrome, but also prevents
                    // the event from triggering too preemptively. Without this line,
                    // using tab/shift+tab will make the focused element fire the callback.
                    if (e.type=='keyup' && e.keyCode!=8) return;

                    // Check if timeout has been set. If it has, "reset" the clock and
                    // start over again.
                    if (timeoutReference) clearTimeout(timeoutReference);
                    timeoutReference = setTimeout(function(){

                        console.log("searching")
			     		var valor = el.value;
                        console.log(valor)
			     		if(valor){
                            // hide all items
                            $(".all").not('.'+valor).hide("slow");
                            $(".all").filter('.'+valor).show("slow");

			     		}
                        search(el);

                    }, timeout);
                }).on('blur',function(){
     	   				//when leaving the input

                   		search(el);
                });
            });



        }
    });
})(jQuery);




