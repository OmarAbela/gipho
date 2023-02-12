(function() {
	$(".exploreLink").click(function() {
		$(".home, .exploreGIPHO").animate({
			top:'-100%',
		}, 500, "linear");
	});

	$(".backHome").click(function() {
		$(".home, .exploreGIPHO").animate({
			top:'0',
		}, 500, "linear");
	});
})();