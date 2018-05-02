IfNull(json$sfSandbox$, $sfIsSandbox);
IfNull(json$sfLoginUrl$, $sfLoginUrl);
$sfPassword;
$sfUsername;
$sfSecurityToken;

$description = "";
case (

    json$ActivityType$ == "CALL",
    If(!IsNull(json$VoicemailLeft$) && json$VoicemailLeft$ == true, $description = String(json$VoicemailLeft$) + "\n" + json$VoicemailUrl$, $description = Null()),

    json$ActivityType$ == "INFOREQ",
    if (!IsNull(json$Listing$ListingCode$), $description = json$Listing$ListingCode$ + "\n", false);
    if (!IsNull(json$Listing$Address1$), $description = $description + json$Listing$Address1$ + "\n", false);
    if (!IsNull(json$Listing$City$), $description = $description + " " + json$Listing$City$, false);
    if (!IsNull(json$Listing$State$), $description = $description + " " + json$Listing$State$, false);
    if (!IsNull(json$Listing$Zip$), $description = $description + " " + json$Listing$Zip$ + "\n", false);
    if (!IsNull(json$Listing$Address2$), $description = $description + " \n" + json$Listing$Address2$, false); $description = $description + "\n" + json$InfoRequestMessage$;,

    json$ActivityType$ == "PROPVIEW",
    $description = json$Listing$ListingCode$ + "\n" + json$Listing$Address1$ + "\n" + json$Listing$City$ + " " + json$Listing$State$ + " " + json$Listing$Zip$; If(!IsNull(json$Listing$Address2$), $description = $description + " \n" + json$Listing$Address2$, false)
);

$activityType = json$ActivityType$;
$clientId = json$CustomerId$;
$name = json$User$Name$;
$phone = json$User$Phone$;
$email = json$User$Email$;
$address = json$Listing$Address1$;

