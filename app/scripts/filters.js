angular.module('app')
    
    /**
    * Truncate string
    */
    .filter('truncate', function () {
        return function (text, length, end)
        {
        	// default length
            if (isNaN(length))
                length = 10;

            // default end
            if (end === undefined)
                end = '...';

            // truncate
            if (text.length <= length || text.length - end.length <= length)
            {
                return text;
            }
            else
            {
                return String(text).substring(0, length-end.length) + end;
            }

        };
    })

    /**
    * Round decimal
    */
    .filter('decimal', function() {
        return function (decimal, length)
        {
            return (decimal) ? (decimal).toFixed(length) : '0.00';
        };
    })

    /**
    * Rating
    */
    // TODO: rewrite rating directive, based on the UI rating directive
    .filter('rating', function() {
        return function (rating, index)
        {
            if (rating >= index)
            {
                return 'images/rating-full.png';
            }
            else
            {
                return 'images/rating.png';
            }
        }
    })

    /**
    * Unique
    */
    .filter('unique', function() {
        return function (items)
        {
            var unique = [];
            var addedItems = [];

            for (var i = items.length - 1; i >= 0; i--)
            {
                if (addedItems.indexOf(items[i].name, 0) < 0)
                {
                    unique.push(items[i]);
                    addedItems.push(items[i].name);
                }
            }


            return unique.reverse();
        };
    });
