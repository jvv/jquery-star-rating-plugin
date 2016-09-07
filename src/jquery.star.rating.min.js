/**
 * jQuery Star Rating plugin
 * Joost van Velzen - http://joost.in
 *
 * v 1.0.3
 *
 * cc - attribution + share alike
 * http://creativecommons.org/licenses/by-sa/4.0/
 */
!function(a){a.fn.addRating=function(b){var c=this,d=a.extend({max:5,half:!0,fieldName:"rating",fieldId:"rating",icon:"star"},b);this.settings=d;for(var e=1;e<=d.max;e++){a("<i/>").addClass("material-icons").html(this.settings.icon+"_border").data("rating",e).appendTo(this).click(function(){c.setRating(a(this).data("rating"))}).hover(function(b){c.showRating(a(this).data("rating"),!1)},function(){c.showRating(0,!1)})}a(this).append('<input type="hidden" name="'+d.fieldName+'" id="'+d.fieldId+'" />')},a.fn.setRating=function(b){var c=this;a("#"+c.settings.fieldId).val(b),c.showRating(b,!0)},a.fn.showRating=function(b,c){var d=this;(""==a("#"+d.settings.fieldId).val()||c)&&a(d).find("i").each(function(){var c=d.settings.icon+"_border";a(this).removeClass("selected"),a(this).data("rating")<=b&&(c=d.settings.icon,a(this).addClass("selected")),a(this).html(c)})}}(jQuery);
