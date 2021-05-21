# Geth RUN

$DATADIR = "$env:USERPROFILE\edu"
#$NODE_IP = "extip:192.168.0.10"
#$NET_MASK = "192.168.0.0/24"
#$BOOT_NODE = "enode://1894cb1b12732910aa07265da92f869ecddc3f97efb126fd316b154c840522bcead155a49d43099ef330de48c8fdc2a9b45edee7c144f6e36c3876011ef7e3cd@192.168.0.10:30301"

geth --networkid 444  --datadir $DATADIR --syncmode "full" --http --http.addr 0.0.0.0 --http.corsdomain "*" --ws --ws.addr 0.0.0.0 --ws.origins "*" --allow-insecure-unlock --nodiscover --snapshot=false
