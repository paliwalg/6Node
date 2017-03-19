#!/bin/bash
set -u
set -e
NETID=87234
BOOTNODE_KEYHEX=77bd02ffa26e3fb8f324bda24ae588066f1873d95680104de5bc2db9e7b2e510
BOOTNODE_ENODE=enode://6433e8fb82c4638a8a6d499d40eb7d8158883219600bfd49acb968e3a37ccced04c964fa87b3a78a2da1b71dc1b90275f4d055720bb67fad4a118a56925125dc@[127.0.0.1]:33445

GLOBAL_ARGS="--bootnodes $BOOTNODE_ENODE --networkid $NETID --rpc --rpcaddr 0.0.0.0 --rpcapi admin,db,eth,debug,miner,net,shh,txpool,personal,web3,quorum"

echo "[*] Starting Constellation nodes"
nohup constellation-node tm1.conf 2>> qdata/logs/constellation1.log &
sleep 10 
nohup constellation-node tm2.conf 2>> qdata/logs/constellation2.log &
sleep 10
nohup constellation-node tm3.conf 2>> qdata/logs/constellation3.log &
sleep 10
nohup constellation-node tm4.conf 2>> qdata/logs/constellation4.log &
sleep 10
nohup constellation-node tm5.conf 2>> qdata/logs/constellation5.log &
sleep 10
nohup constellation-node tm6.conf 2>> qdata/logs/constellation6.log &
sleep 10
#nohup constellation-node tm7.conf 2>> qdata/logs/constellation7.log &

echo "[*] Starting bootnode"
nohup bootnode --nodekeyhex "$BOOTNODE_KEYHEX" --addr="127.0.0.1:33445" 2>>qdata/logs/bootnode.log &
echo "wait for bootnode to start..."
sleep 10

echo "[*] Starting node 1"
PRIVATE_CONFIG=tm1.conf nohup geth --datadir qdata/dd1 $GLOBAL_ARGS --rpcport 22000 --rpccorsdomain "*" --port 21000 --voteaccount "0xed9d02e382b34818e88b88a309c7fe71e65f419d" --votepassword "" --blockmakeraccount "0x21deed0118b3feebe3b4a52df530cd226f5266d9" --blockmakerpassword ""  --minblocktime 2 --maxblocktime 5 2>>qdata/logs/1.log &

echo "[*] Starting node 2"
PRIVATE_CONFIG=tm2.conf nohup geth --datadir qdata/dd2 $GLOBAL_ARGS --rpcport 22001 --rpccorsdomain "*" --port 21001 --voteaccount "0x0fbdc686b912d7722dc86510934589e0aaf3b55a" --votepassword "" --blockmakeraccount "0xca843569e3427144cead5e4d5999a3d0ccf92b8e" --blockmakerpassword ""  --minblocktime 2 --maxblocktime 5 2>>qdata/logs/2.log &

echo "[*] Starting node 3"
PRIVATE_CONFIG=tm3.conf nohup geth --datadir qdata/dd3 $GLOBAL_ARGS --rpcport 22002 --rpccorsdomain "*" --port 21002 --voteaccount "0x9186eb3d20cbd1f5f992a950d808c4495153abd5" --votepassword "" --blockmakeraccount "0x1623b3138c1a38ccd8dd40702c90f5ba9a4d5b90" --blockmakerpassword ""  --minblocktime 2 --maxblocktime 5 2>>qdata/logs/3.log &

echo "[*] Starting node 4"
PRIVATE_CONFIG=tm4.conf nohup geth --datadir qdata/dd4 $GLOBAL_ARGS --rpcport 22003 --rpccorsdomain "*" --port 21003 --voteaccount "0xafe6f7da56b6b21930c880565e00aa996b315cd2" --votepassword "" --blockmakeraccount "0xb96bd1c6d2a9788a47f0d54d4daa38b587b6b2cc" --blockmakerpassword ""  --minblocktime 2 --maxblocktime 5 2>>qdata/logs/4.log &

echo "[*] Starting node 5"
PRIVATE_CONFIG=tm5.conf nohup geth --datadir qdata/dd5 $GLOBAL_ARGS --rpcport 22004 --rpccorsdomain "*" --port 21004 --voteaccount "0x196cae995921449893bf1efee36dbe2d8961b0f7" --votepassword "" --blockmakeraccount "0xb96bd1c6d2a9788a47f0d54d4daa38b587b6b2cc" --blockmakerpassword ""  --minblocktime 2 --maxblocktime 5 2>>qdata/logs/5.log &

echo "[*] Starting node 6"
PRIVATE_CONFIG=tm6.conf nohup geth --datadir qdata/dd6 $GLOBAL_ARGS --rpcport 22005 --rpccorsdomain "*" --port 21005 --voteaccount "0xbd40abe8943345b4886302553703141e0c8ae968" --votepassword "" --blockmakeraccount "0xdddd26dfddc27e81ea91b9f142c41ce51c370e68" --blockmakerpassword ""  --minblocktime 2 --maxblocktime 5 2>>qdata/logs/6.log &

# echo "[*] Starting node 7"
# PRIVATE_CONFIG=tm7.conf nohup geth --datadir qdata/dd7 $GLOBAL_ARGS --rpcport 22006 --port 21006 2>>qdata/logs/7.log &


