var $resp = JSON.parse(Jitterbit.GetVar("$jitterbit.api.response"));
WriteToOperationLog("this is a javascript val: " + $resp["projectVariableDetail"]);
var $credsArray = $resp["projectVariableDetail"];
var $credsJson = "";
var $credsId = "";
var $synchConfigId = "";
var $synchConfigVal = "synchObj: "
var $getCreds = function getCreds(item) {
  WriteToOperationLog(item["projectVariableName"]);
  if (item["projectVariableName"] == "metaInfo") {
    $metaInfoId = item["projectVariableId"];
    WriteToOperationLog($metaInfoId);
  }
  if (item["projectVariableName"] == "synch") {
    $synchConfigId = item["projectVariableId"];
    // WriteToOperationLog("synchObj: " + String($synchObj) + " Sourceopts: " + String($sourceOpts) + " OptionsArray" + String($optionsArray));
    $synchConfigVal = "{" + ' "providers":{' + '"source":"' + $source + '", "target":"' + $target + '"' + "}" + '}';
  }
  if (item["projectVariableName"] == "wholeCreds") {
    $credsJson = JSON.parse(item["projectVariableValue"]);
    $credsId = item["projectVariableId"];
    WriteToOperationLog("this is the id we need: " + $credsId);
    switch ($tTypeCreds) {
      case "Username/Password":
        $credsJson[$target]["username"] = $tUsername;
        $credsJson[$target]["password"] = $tPassword;
        $credsJson[$target]["userId"] = $targetClientId;
        break;

      case "API Token":
        WriteToOperationLog($credsJson[$target]["username"]);
        $credsJson[$target]["username"] = $tUsername;
        $credsJson[$target]["password"] = $tPassword;
        $credsJson[$target]["securityToken"] = $tApiToken;
        $credsJson[$target]["userId"] = $targetClientId;
        break;
    }
    switch ($sTypeCreds) {
      case "Username/Password":
        $credsJson[$source]["username"] = $sUsername;
        $credsJson[$source]["password"] = $sPassword;
        $credsJson[$source]["userId"] = $sourceClientId;
        break;

      case "API Token":
        $credsJson[$source]["username"] = $sUsername;
        $credsJson[$source]["password"] = $sPassword;
        $credsJson[$source]["securityToken"] = $sApiToken;
        $credsJson[$source]["userId"] = $sourceClientId;
        break;
    }
  }
};

$credsArray.forEach($getCreds);
$credsJson = JSON.stringify($credsJson);

