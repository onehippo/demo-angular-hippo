angular.module('app')

	/**
	* Resizeable element
	*/
	.directive('resizeable', function()
	{
		return {
			link: function resizeable(scope, iElement, iAttrs)
			{
				$('#handler').on('mousedown', function(e)
				{
					$('.container').addClass('unselectable');
					var $dragable = $('#product-list');
					var startWidth = $dragable.width();
					var pX = e.pageX;

					$(document).on('mouseup', function(e)
					{
						$('.container').removeClass('unselectable');
						$(document).off('mouseup').off('mousemove');
					});
				
					$(document).on('mousemove', function(me)
					{
						var mx = (me.pageX - pX);
						$dragable.css({
							width: startWidth + mx
						});

						$('#product-detail').css({
							width: startWidth - mx,
						});
					});
				});
			}
		}
	});
	