<?php
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$url='http://api.geonames.org/wikipediaSearchJSON?formatted=true&q=' . $_REQUEST['q'] . '&maxRows=' . $_REQUEST['maxRows'] . '&username=son2517';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	$result=curl_exec($ch);

	curl_close($ch);

	echo($result)

?>
