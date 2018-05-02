var $clientsObj = JSON.parse($clients);
var $clientLayer  = $clientsObj[$clientId];
var $clientUrl  = "https://ReWatt241151.jitterbit.net/clientenv" + $clientLayer +  "/V1/crData" + $clientLayer;