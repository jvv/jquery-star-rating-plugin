/**
 * jQuery Star Rating plugin
 * Joost van Velzen - http://joost.in
 *
 * v 1.0.3
 *
 * cc - attribution + share alike
 * http://creativecommons.org/licenses/by-sa/4.0/
 */
(function(n){n.fn.addRating=function(t){var r=this,i=n.extend({max:5,half:!0,fieldName:"rating",fieldId:"rating",icon:"star",selectedRatings:0},t),u,f;for(this.settings=i,u=1;u<=i.max;u++)f=n("<i/>").addClass("material-icons").html(this.settings.icon+"_border").data("rating",u).appendTo(this).click(function(){r.setRating(n(this).data("rating"))}).hover(function(){r.showRating(n(this).data("rating"),!1)},function(){r.showRating(0,!1)});n(this).append('<input type="hidden" name="'+i.fieldName+'" id="'+i.fieldId+'" value="'+i.selectedRatings+'" />');r.showRating(i.selectedRatings,!0)};n.fn.setRating=function(t){var i=this;n("#"+i.settings.fieldId).val(t);i.showRating(t,!0)};n.fn.showRating=function(t,i){var r=this;(n("#"+r.settings.fieldId).val()==""||i)&&n(r).find("i").each(function(){var i=r.settings.icon+"_border";n(this).removeClass("selected");n(this).data("rating")<=t&&(i=r.settings.icon,n(this).addClass("selected"));n(this).html(i)})}})(jQuery);
