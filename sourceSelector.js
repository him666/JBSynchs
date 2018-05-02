switch ($source) {
    case "voicepad":
    $sourceEnvId = "277901";
	$sourceProjId = "285961";
        break;
    case "br360":
    $sourceEnvId = "brenv";
	$sourceProjId = "brproj";
        break;
    case "rethink":
    $sourceEnvId = "retenv";
	$sourceProjId = "retproj";
        break;
	case "showcaseidx":
    $sourceEnvId = "295491";
    $sourceProjId = "303651";	
	    break;
    
}

WriteToOperationLog($sourceEnvId+ " fight!"  + $sourceProjId);
