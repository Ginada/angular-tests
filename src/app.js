'use strict';
angular.module('myFilters', [])
	.filter('capitalize', function () {
		return function (input) {
			if (angular.isString(input)) {
				//return 'hello';
				return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
			} else {
				return input;
			}
		};
	})


