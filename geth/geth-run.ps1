# Geth RUN

$DATADIR = "$env:USERPROFILE\edu"

geth --networkid 444  --datadir $DATADIR --syncmode "full" --http --http.addr 0.0.0.0 --http.corsdomain "*" --ws --ws.addr 0.0.0.0 --ws.origins "*" --allow-insecure-unlock --nodiscover --snapshot=false
