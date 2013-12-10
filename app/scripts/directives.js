// TODO: add comments for each directive
angular.module('app')
	
	/**
	* upkey
	*/
	.directive('upkey', function()
	{
		return {
			link: function keyup(scope, iElement, iAttrs)
			{
				Mousetrap.bind('up', function()
				{
					scope.$apply(iAttrs.upkey);
				}, 'keyup');
			}
		};
	})

	/**
	* downkey
	*/
	.directive('downkey', function()
	{
		return {
			link: function keyup(scope, iElement, iAttrs)
			{
				Mousetrap.bind('down', function()
				{
					scope.$apply(iAttrs.downkey);
				}, 'keyup');
			}
		};
	})

	/**
	* resizeable
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
	