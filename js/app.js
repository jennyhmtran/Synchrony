(function($){

    $(".fancybox").fancybox({
        helpers : {
            title: {
                type: 'inside'
            }
        }
    });


	function loopGallery(test, index, item){
		if(test){
			var box = $('<div class="col-md-4 '+item.title+' all" data-search='+item.title+'> </div>');
			console.log(item.title);
			var pola = $('<div class="pola"></div>');
			var view = $('<div class="view thumb"></div>');
			var description = item.description
            if (description == null){
			    description = ""
            }
			var mask = $('<div class="mask">  <a href='+item.url+' class = "iframe"> Link  </a>   <h2>'+item.title+'</h2> <p>'+description+'<br> '+item.player.name+'</p> <a href='+item.image_url+' class="info fancybox" rel="group"> <div class="alt">View</div> </a> </div>')
            $('.gallery').prepend(box);
			box.append(pola);
			pola.append(view);
			view.prepend('<img src="'+item.image_url+'">');
			view.append(mask);
		}
	}

    // retrieves all information from a json file
    $.getJSON('json/imageinfo.json', function(data){
        $.each(data.shots, function(index, item){
            loopGallery(5, index, item);
        });
    });


})(jQuery);