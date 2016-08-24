jQuery(document).ready(function()
{
	var $hero  	   = jQuery('#hero'),
		$laser 	   = $hero.find('.laser'),
		$heropos   = $hero.find('.herofront'),
		$baner 	   = jQuery('.baner'),
		$banerburn = jQuery('.banerburn'); 
	
	function scan()	{
		setTimeout(function() {
			$baner.removeClass('baner').addClass('baner baner-shake');
			setTimeout(function() {
				$baner.css('opacity', '0');
				$banerburn.css('opacity', '1');
				setTimeout(function() {
					$hero.removeClass('idle').addClass('attack');
					$heropos.removeClass('herofront').addClass('heroupright');
					setTimeout(function() {
						$laser.removeClass('laser').addClass('laser attack');
						setTimeout(function() {
							$banerburn.removeClass('banerburn').addClass('banerburn burn');
							$baner.removeClass('baner baner-shake').addClass('baner over');
							$baner.css('opacity', '1');
							setTimeout(function(){
								$banerburn.css('opacity', '0');
								$laser.removeClass('laser attack').addClass('laser');
								setTimeout(function() {
									$hero.removeClass('attack').addClass('back');
									$heropos.removeClass('heroupright').addClass('heroback');
									setTimeout(function() {	
										$hero.removeClass('back').addClass('idle');
										$heropos.removeClass('heroback').addClass('herofront');
										$baner.removeClass('baner over').addClass('baner');
										$banerburn.removeClass('banerburn burn').addClass('banerburn');
									}, 2000);
								}, 100);
							}, 2000);
						}, 100);
					}, 2000);
				}, 100);
			}, 100);
		}, 2700);
	};
	
	scan();	
	setInterval(scan, 11000);	
	
});