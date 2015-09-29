describe('Cappitalize filter', function () {
	beforeEach(module('myFilters'));
	it('capitalizes the first letter in each word', function () {
		inject(function (capitalizeFilter) {
			expect(capitalizeFilter('hello there')).toEqual('Hello There');
		});
	});
});