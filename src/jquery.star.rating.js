/**
 * jQuery Star Rating plugin
 * Joost van Velzen - http://joost.in
 *
 * v 1.0.2
 *
 * cc - attribution + share alike
 * http://creativecommons.org/licenses/by-sa/4.0/
 */

(function( $ ) {
	$.fn.addRating = function(options) {
		var obj = this;
		var settings = $.extend({
			max : 5,
			half : true,
			fieldName : 'rating',
			fieldId : 'rating'

		}, options );
		this.settings = settings;

		// create the stars
		for(var i = 1 ; i <= settings.max ; i++)
		{
			var star = $('<i/>').addClass('material-icons').html('star_border').data('rating', i).appendTo(this).click(
				function(){
					obj.setRating($(this).data('rating'));
				}
			).hover(
				function(e){
					obj.showRating($(this).data('rating'), false);
				}, function(){
					obj.showRating(0,false);
				}
			);
		}
		$(this).append('<input type="hidden" name="'+settings.fieldName+'" id="'+settings.fieldId+'" />');
	};

	$.fn.setRating = function(numRating) {
		var obj = this;
		$('#'+obj.settings.fieldId).val(numRating);
		obj.showRating(numRating, true);
	};

	$.fn.showRating = function(numRating, force) {
		var obj = this;
		if($('#'+obj.settings.fieldId).val() == '' || force)
		{
			$(obj).find('i').each(function(){
				var icon = 'star_border';
				if($(this).data('rating') <= numRating)
				{
					icon = 'star';
				}
				$(this).html(icon);
			})
		}
	}

}( jQuery ));