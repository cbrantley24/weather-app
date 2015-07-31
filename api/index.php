<?php

$action = isset($_GET['action']);

switch ($action) {
	case 'getData':
		break;
	default:
		$data = "Nothing to do...";
		break;
}

print $data;

?>