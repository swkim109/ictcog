# Geth initialization

$DATADIR = "$env:USERPROFILE\edu"
$SRC = "$env:USERPROFILE\ictcog\geth"

New-Item -Path "~" -Name "edu" -ItemType "directory" -Force

geth --datadir=$DATADIR init $SRC\genesis.json
