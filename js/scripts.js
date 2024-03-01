$(document).ready(async function () {
  // GLOBAL DECLARATION

  let contractAddress = "0xe8804F26E2bb944C857F581dA638437C9EbF3143";
  let contractAbi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "linkID",
          "type": "uint256"
        }
      ],
      "name": "cancelLink",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimRoyalty",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "reserveAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "gh_OrdersID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "getHelpEv",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "ghID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "status",
          "type": "uint256"
        }
      ],
      "name": "ghMatchingEv",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "from_user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to_user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "level",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "payAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "types",
          "type": "uint256"
        }
      ],
      "name": "income_Ev",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "linkPay",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "Link_ID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "status",
          "type": "uint256"
        }
      ],
      "name": "linkStatusEv",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "lossAmountEv",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "amount",
          "type": "uint32"
        }
      ],
      "name": "makeGh",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "amount",
          "type": "uint32"
        }
      ],
      "name": "makePh",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "linkID",
          "type": "uint256"
        }
      ],
      "name": "payLink",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "Reference",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "From_ID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "to_ID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "payLinkEv",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "ph_OrderID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "provideHelpEv",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "refAddress",
          "type": "address"
        }
      ],
      "name": "regUser",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "referralAddress",
          "type": "address"
        }
      ],
      "name": "regUserEv",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "GhOrder",
          "type": "uint256"
        }
      ],
      "name": "remainMatching",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "remainPay",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unlockedSelf",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "activeLevelsView",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "activeLevels",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "activeUser",
      "outputs": [
        {
          "internalType": "bool",
          "name": "active",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "avGetHelp",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "avGh",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "bonusInfos",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "referralGains",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "managerGains",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "growthGains",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "levelGrowthGains",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "generationGains",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "royalityGains",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "getGains",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "floatAmt",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "totalGh",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "totalPh",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "lastPh",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "directUser",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "referrals",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "distShare",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "findGenUser",
      "outputs": [
        {
          "internalType": "bool",
          "name": "preQf",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "Qf",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "findOrder",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "order",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "findRemainPh",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "phID",
          "type": "uint64"
        },
        {
          "internalType": "uint32",
          "name": "remainValue",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "getPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "ghAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "ghInfos",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "orderValue",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "paidValue",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "matchedValue",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "orderTime",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isComplete",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "ghPotential",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "orderID",
          "type": "uint256"
        },
        {
          "internalType": "uint128",
          "name": "totGain",
          "type": "uint128"
        },
        {
          "internalType": "uint64",
          "name": "phValue",
          "type": "uint64"
        },
        {
          "internalType": "uint128",
          "name": "growth",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "linkID",
          "type": "uint256"
        }
      ],
      "name": "linkExpireTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "remainTime",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "afterPay",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "linkInfos",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "phOrder",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "ghOrder",
          "type": "uint256"
        },
        {
          "internalType": "uint32",
          "name": "linkValue",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "linkTime",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "storagePay",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isCancel",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "payStatus",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "matchedPhId",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "fullrun",
          "type": "bool"
        }
      ],
      "name": "matureOrder",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "activePh",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "unlock_ID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "mature_ID",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "limit",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextRoyalty",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "amount",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "primValue",
          "type": "uint32"
        }
      ],
      "name": "payPhValue",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "primAmt",
          "type": "uint32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "phAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "phOrder",
          "type": "uint256"
        }
      ],
      "name": "phGrowth",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "avGrowth",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "phInfos",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "orderValue",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "paidValue",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "matchedValue",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "orderTime",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "isMature",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "isAfterTime",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isComplete",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "reserveContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "routerAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "royalty_Index",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "royaltys",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "royalty_Fund",
          "type": "uint128"
        },
        {
          "internalType": "uint32",
          "name": "GR_Users",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "AR_Users",
          "type": "uint32"
        },
        {
          "internalType": "uint128",
          "name": "GR_total_Share",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "AR_total_Share",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "totalDirect",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "count",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "totalGains",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "total",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalGhOrder",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "ghCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalLinkID",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "linkCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalPhOrder",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "phCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "usdAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userInfos",
      "outputs": [
        {
          "internalType": "address",
          "name": "referral",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "totalTeam",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "strongTeam",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "phFailed",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "payIndex",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "lastGh",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "royaltyStage",
          "type": "uint32"
        },
        {
          "internalType": "bool",
          "name": "Gen_Qualify",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isManager",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "joined",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "userLiveStatus",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isMang",
          "type": "bool"
        },
        {
          "internalType": "uint32",
          "name": "managCount",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "strongLeg",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "totalTeam",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "userPhCount",
          "type": "uint256"
        }
      ],
      "name": "UserPhView",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "phOredrID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "oredrValue",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "userRoyalty",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "royaltyAmt",
          "type": "uint128"
        },
        {
          "internalType": "uint32",
          "name": "royaltyType",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "viewLink",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "linksCount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pay_Link",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "viewRoyalty",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  let _abi = contractAbi;
  let walletAddressCopy = "";

  // web3 = new Web3(window.ethereum);
  // const contract = new web3.eth.Contract(contractAbi, contractAddress);
  let web3;
  let contract;

  // WALLET CONNECT
  // $('#connectWalletBtn').off('click');

  $("#connectWalletBtn").click(async function (e) {
    e.preventDefault();
    let walletConnectText = await connectAndDisplayWalletAddress();
    const trimmedAddress = trimAddress(walletConnectText);

    console.log(walletConnectText);
    if (walletConnectText != null && walletConnectText != undefined) {
      $("#connectWalletBtn").text(trimmedAddress);
    }

    // $('#myTabContent').show();
  });

  // CONTRACT OBJECT INITIATE

  // onload automatic clicked connect wallet button
  $(window).on("load", function () {
    $("#connectWalletBtn").click();
  });

  // for wallet connect
  async function walletConnect() {
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        const polygonChainId = "0x89"; // Polygon mainnet chain ID
        if (chainId !== polygonChainId) {
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: polygonChainId }],
            });
          } catch (switchError) {
            if (switchError.code === 4902) {
              // Chain not added
              try {
                await window.ethereum.request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      chainId: polygonChainId,
                      chainName: "Polygon",
                      nativeCurrency: {
                        name: "Matic",
                        symbol: "MATIC",
                        decimals: 18,
                      },
                      rpcUrls: ["https://rpc-mainnet.maticvigil.com/"],
                      blockExplorerUrls: ["https://explorer.matic.network/"],
                    },
                  ],
                });
              } catch (addError) {
                console.error("Error adding Polygon network:", addError);
                return null;
              }
            } else {
              console.error("Error switching to Polygon network:", switchError);
              return null;
            }
          }
        }
        await window.ethereum.enable();
        const accounts = await window.web3.eth.getAccounts();
        return accounts[0] || null;
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        const accounts = await window.web3.eth.getAccounts();
        return accounts[0] || null;
      } else {
        alert(
          "Non-Ethereum browser detected. You should consider installing MetaMask!"
        );
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Example usage with async/await
  async function connectAndDisplayWalletAddress() {
    try {
      const walletAddress = await walletConnect();

      if (walletAddress) {
        web3 = new Web3(window.ethereum);

        // Initialize the contract object
        contract = new web3.eth.Contract(contractAbi, contractAddress);

        //------------------------- onload call read start-----------------------------------------------------------------------
        //3. avGetHelp start
        noParams("avGetHelp", "avGetHelpPara");
        // avGetHelp end
        //5. distShare start
        noParams("distShare", "distSharePara");

        // distShare end
        //8. findRemainPh start
        noParams("findRemainPh", "findRemainPhPara");
        // findRemainPh end
        //15. matchedPhId start
        noParams("matchedPhId", "matchedPhIdPara");
        // matchedPhId end
        //17. nextRoyalty start
        noParams("nextRoyalty", "nextRoyaltyPara");
        // nextRoyalty end
        //22. reserveContract start
        noParams("reserveContract", "reserveContractPara");
        // reserveContract end

        //23. routerAddress start
        noParams("routerAddress", "routerAddressPara");
        // routerAddress end

        //24. royalty_Index start
        noParams("royalty_Index", "royalty_IndexPara");
        // royalty_Index end

        //26. tokenAddress start
        noParams("tokenAddress", "tokenAddressPara");
        // tokenAddress end

        //29. totalGhOrder start
        noParams("totalGhOrder", "totalGhOrderPara");
        // totalGhOrder end

        //30. totalLinkID start
        noParams("totalLinkID", "totalLinkIDPara");
        // totalLinkID end

        //31. totalPhOrder start
        noParams("totalPhOrder", "totalPhOrderPara");
        // totalPhOrder end

        //32. usdAddress start
        noParams("usdAddress", "usdAddressPara");
        // usdAddress end

        //38. viewRoyalty start
        noParams("viewRoyalty", "viewRoyaltyPara");
        // viewRoyalty end
        //------------------------- onload call read End-----------------------------------------------------------------------

        //------------------------- onload call write start-----------------------------------------------------------------------

        //------------------------- onload call write end-----------------------------------------------------------------------

        walletAddressCopy = walletAddress;
        console.log("Connected wallet address:", walletAddress);
      } else {
        console.log("Failed to connect wallet.");
        walletAddressCopy;
        console.log(walletAddressCopy);
      }
      return walletAddress;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // trim
  function trimAddress(address) {
    if (
      typeof address !== "string" ||
      !address.startsWith("0x") ||
      address.length <= 10
    ) {
      return address;
    }

    const start = address.slice(0, 4);
    const end = address.slice(-4);

    return `${start}....${end}`;
  }

  // wei to eather
  // function weiToEther(weiAmount, decimalPlaces) {
  //   let etherValue = web3.utils.fromWei(weiAmount, "ether");
  //   return parseFloat(etherValue).toFixed(decimalPlaces);
  // }

  // validate input is filled or not
  function validateAndTab(inputId, error) {
    var inputField = $("#" + inputId);
    var errorElement = $("#" + error);

    if (inputField.val().trim() === "") {
      errorElement.text("⚠️ Please fill the input box.");
      return false; // Prevent further execution
    } else {
      errorElement.text("");
      return true; // Allow further execution
    }
  }

  function isAddress(value) {
    return /^0x[0-9a-fA-F]{40}$/.test(value);
  }

  function isInteger(value) {
    return /^\d+$/.test(value);
  }
  function isArray(data) {
    return Array.isArray(data);
  }

  function areAllKeysNumbers(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (isNaN(Number(key))) {
          return false;
        }
      }
    }
    return true;
  }

  async function submitBtn(
    inputId,
    inputId2 = "",
    resultMsg,
    errorMsg,
    functionName,
    transactionLink = "",
    writeCall = false
  ) {
    console.log(functionName);
    console.log(typeof functionName);
    //

    if (validateAndTab(inputId, errorMsg)) {
      console.log("validate");
      var _inputId = $("#" + inputId).val();
      var _resultMsg = $("#" + resultMsg);
      var _errorMsg = $("#" + errorMsg);

      if (inputId2 != "") {
        var _inputId2 = $("#" + inputId2).val();
      }
      // console.log(inputId2);
      // console.log(_inputId2);
      let result;
      try {
        if (writeCall) {
          var _transactionLink = $("#" + transactionLink);

          // console.log('abc');
          const writeAccounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          const writeAccount = writeAccounts[0];

          result = await contract.methods[functionName](_inputId).send({
            from: writeAccount,
            gasLimit: 3000000,
          });

          _transactionLink
            .attr("href", `https://polygonscan.com/tx/${result}`)
            .attr("target", "_blank");
          return;
        }

        if (_inputId2 === undefined) {
          console.log("single Para");
          console.log(_inputId + "id");
          console.log(functionName + "name");

          result = await contract.methods[functionName](_inputId).call();
          console.log(result);
        } else {
          result = await contract.methods[functionName](
            _inputId,
            _inputId2
          ).call();
          console.log("double Para");
        }

        console.log(typeof result);

        if (isAddress(result)) {
          console.log("Result is an address:", result);
          _resultMsg.text(result);
        } 
        else if (isInteger(result)) {
          console.log("Result is an integer:", result);

            _resultMsg.text(result);
          
        } 
        else if(isArray(result)){
          console.log("Array");
          _resultMsg.text("");
          console.log(result);
          if(result.length ===0){

            console.log("length nhi h");
            _resultMsg.append('[]');
          }
          
          let postFix = ',';
          for (const number of result) {
            if (result.indexOf(number)==result.length-1){
              postFix='';
           }
              _resultMsg.append(`[${number}${postFix}]`);
            }
      }
        else if (typeof result === "object") {
          console.log("myObject");
          _resultMsg.text("");
          let keyNum = areAllKeysNumbers(result);
          console.log(keyNum);

          

          for (const key in result) {

            if(functionName==='findGenUser'){
              if(key==0||key==1){
                continue;
              }
              else{
            _resultMsg.append(key + ": " + result[key] + "<br>"); // Append to _resultMsg

              }
              

            }
            else if (isNaN(key) || keyNum) {
              
              _resultMsg.append(key + ": " + result[key] + "<br>"); // Append to _resultMsg
            }

            if (keyNum) {
              _resultMsg.append(key + ": " + result[key] + "<br>");
            }

            // console.log(key);
            // console.log(typeof key);
          }
        } else {
          console.log("Result is neither an address nor an integer");
          _resultMsg.text(result);
        }

        // console.log(result);
      } catch (error) {
        _errorMsg.text("Error calling " + functionName + ": " + error.message);
      }
    }
  }

  async function noParams(
    functionName,
    paraId,
    transactionLink = "",
    writeCall = false
  ) {
    var _inputId = $("#" + paraId);
    //

    try {
      const totalLinkIDAccounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const totalLinkIDAccount = totalLinkIDAccounts[0];
      if (writeCall) {
        var _transactionLink = $("#" + transactionLink);

        totalLinkIDResult = await contract.methods[functionName]().send({
          from: totalLinkIDAccount,
          gasLimit: 3000000,
        });
        _transactionLink
          .attr("href", `https://polygonscan.com/tx/${totalLinkIDResult}`)
          .attr("target", "_blank");

        return;
      }
      var totalLinkIDResult = await contract.methods[functionName]().call({
        from: totalLinkIDAccount,
      });

      if (typeof totalLinkIDResult === "object") {
        let keyNum = areAllKeysNumbers(totalLinkIDResult);
        for (const key in totalLinkIDResult) {
          if (isNaN(key) && !keyNum) {
            _inputId.append(key + ": " + totalLinkIDResult[key] + "<br>"); // Append to _resultMsg
          }

          if (keyNum) {
            _inputId.append(key + ": " + totalLinkIDResult[key] + "<br>");
          }

          // console.log(key);
          // console.log(typeof key);
        }
        // console.log(totalLinkIDResult);
        // console.log(areAllKeysNumbers(totalLinkIDResult));
      } else {
        
          _inputId.text(totalLinkIDResult);
        
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  /*------------------------------------------------Read Page Start ------------------------------------------- */

  //1. activeLevelsView start
  $("#activeLevelsViewSubmit").click(async function (event) {
    event.preventDefault();
    console.log(walletAddressCopy);
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "activeLevelsViewInput",
        undefined,
        "activeLevelsViewPara",
        "activeLevelsViewErrorMessage",
        "activeLevelsView"
      );
    }
  });
  // activeLevelsView end

  //2. activeUser start
  $("#activeUserSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "activeUserInput",
        undefined,
        "activeUserPara",
        "activeUserErrorMessage",
        "activeUser"
      );
    }
  });
  // activeUser end

  //4. bonusInfos start
  $("#bonusInfosSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "bonusInfosInput",
        undefined,
        "bonusInfosPara",
        "bonusInfosErrorMessage",
        "bonusInfos"
      );
    }
  });
  // bonusInfos end


  //6. findGenUser start
  $("#findGenUserSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "findGenUserInput",
        undefined,
        "findGenUserPara",
        "findGenUserErrorMessage",
        "findGenUser"
      );
    }
    //   console.log(findGen);
  });
  // findGefindGenUser

  //7. findOrder start
  $("#findOrderSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "findOrderInput",
        undefined,
        "findOrderPara",
        "findOrderErrorMessage",
        "findOrder"
      );
    }
  });
  // findOrder end

  //9. getPrice start
  $("#getPriceSubmit").click(async function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "getPriceInput",
        undefined,
        "getPricePara",
        "getPriceErrorMessage",
        "getPrice"
      );
    }
  });
  // getPrice end

  //10. ghAddress start
  $("#ghAddressSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "ghAddressInput",
        undefined,
        "ghAddressPara",
        "ghAddressErrorMessage",
        "ghAddress"
      );
    }
  });
  // ghAddress end

  //11. ghInfos start
  $("#ghInfosSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "ghInfosInput",
        undefined,
        "ghInfosPara",
        "ghInfosErrorMessage",
        "ghInfos"
      );
    }
  });
  // ghInfos end

  //12. ghPotential start
  $("#ghPotentialSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "ghPotentialInput",
        undefined,
        "ghPotentialPara",
        "ghPotentialErrorMessage",
        "ghPotential"
      );
    }
  });
  // ghPotential end

  //13. linkExpireTime start
  $("#linkExpireTimeSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "linkExpireTimeInput",
        undefined,
        "linkExpireTimePara",
        "linkExpireTimeErrorMessage",
        "linkExpireTime"
      );
    }
  });
  // linkExpireTime end

  //14. linkInfos start
  $("#linkInfosSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "linkInfosInput",
        undefined,
        "linkInfosPara",
        "linkInfosErrorMessage",
        "linkInfos"
      );
    }
  });
  // linkInfos end

  //16. matureOrder start
  $("#matureOrderSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "matureOrderInput1",
        "matureOrderInput2",
        "matureOrderPara",
        "matureOrderErrorMessage",
        "matureOrder"
      );
    }
  });
  // matureOrder end

  //18. payPhValue start
  $("#payPhValueSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "payPhValueInput1",
        "payPhValueInput2",
        "payPhValuePara",
        "payPhValueErrorMessage",
        "payPhValue"
      );
    }
  });
  // payPhValue end

  //19. phAddress start
  $("#phAddressSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "phAddressInput",
        undefined,
        "phAddressPara",
        "phAddressErrorMessage",
        "phAddress"
      );
    }
  });
  // phAddress end

  //20. phGrowth start
  $("#phGrowthSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "phGrowthInput",
        undefined,
        "phGrowthPara",
        "phGrowthErrorMessage",
        "phGrowth"
      );
    }
  });
  // phGrowth end

  //21. phInfos start
  $("#phInfosSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "phInfosInput",
        undefined,
        "phInfosPara",
        "phInfosErrorMessage",
        "phInfos"
      );
    }
  });
  // phInfos end

  //25. royaltys start
  $("#royaltysSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "royaltysInput",
        undefined,
        "royaltysPara",
        "royaltysErrorMessage",
        "royaltys"
      );
    }
  });
  // royaltys end

  //27. totalDirect start
  $("#totalDirectSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "totalDirectInput",
        undefined,
        "totalDirectPara",
        "totalDirectErrorMessage",
        "totalDirect"
      );
    }
  });
  // totalDirect end

  //28. totalGains start
  $("#totalGainsSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "totalGainsInput",
        undefined,
        "totalGainsPara",
        "totalGainsErrorMessage",
        "totalGains"
      );
    }
  });
  // totalGains end

  //33. userInfos start
  $("#userInfosSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "userInfosInput",
        undefined,
        "userInfosPara",
        "userInfosErrorMessage",
        "userInfos"
      );
    }
  });
  // userInfos end

  //34. userLiveStatus start
  $("#userLiveStatusSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "userLiveStatusInput",
        undefined,
        "userLiveStatusPara",
        "userLiveStatusErrorMessage",
        "userLiveStatus"
      );
    }
  });
  // userLiveStatus end

  //35. UserPhView start
  $("#UserPhViewSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "UserPhViewInput",
        undefined,
        "UserPhViewPara",
        "UserPhViewErrorMessage",
        "UserPhView"
      );
    }
  });
  // UserPhView end

  //36. userRoyalty start
  $("#userRoyaltySubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "userRoyaltyInput",
        undefined,
        "userRoyaltyPara",
        "userRoyaltyErrorMessage",
        "userRoyalty"
      );
    }
  });
  // userRoyalty end

  //37. viewLink start
  $("#viewLinkSubmit").click(function (event) {
    event.preventDefault();
    if (walletAddressCopy === "") {
      alert("Please connect your wallet before submitting.");
      return;
    } else {
      submitBtn(
        "viewLinkInput",
        undefined,
        "viewLinkPara",
        "viewLinkErrorMessage",
        "viewLink"
      );
    }
  });
  // viewLink end

  /* ----------------------------------------Read Page End --------------------------------------------------- */

  /*------------------------------------------------Write Page Start ------------------------------------------- */
  // 1. cancelLink start
  $("#cancelLinkSubmit").click(function (event) {
    event.preventDefault();
    submitBtn(
      "cancelLinkInput",
      undefined,
      "cancelLinkPara",
      "cancelLinkErrorMessage",
      "cancelLink",
      "hash_1",
      true
    );
  });
  // cancelLink end

  // 2. claimRoyalty start
  $("#claimRoyaltySubmit").click(function (event) {
    event.preventDefault();
    noParams("claimRoyalty", "claimRoyaltyPara", "hash_2", true);
  });
  // claimRoyalty end

  // 3. linkPay start
  $("#linkPaySubmit").click(function (event) {
    event.preventDefault();
    noParams("linkPay", "linkPayPara", "hash_3", true);
  });
  // linkPay end

  // 4. makeGh start
  $("#makeGhSubmit").click(function (event) {
    event.preventDefault();
    submitBtn(
      "makeGhInput",
      undefined,
      "makeGhPara",
      "makeGhErrorMessage",
      "makeGh",
      "hash_4",
      true
    );
  });
  // makeGh end

  // 5. makePh start
  $("#makePhSubmit").click(function (event) {
    event.preventDefault();
    submitBtn(
      "makePhInput",
      undefined,
      "makePhPara",
      "makePhErrorMessage",
      "makePh",
      "hash_5",
      true
    );
  });
  // makePh end

  // 6. payLink start
  $("#payLinkSubmit").click(function (event) {
    event.preventDefault();
    submitBtn(
      "payLinkInput",
      undefined,
      "payLinkPara",
      "payLinkErrorMessage",
      "payLink",
      "hash_6",
      true
    );
  });
  // payLink end

  // 7. regUser start
  $("#regUserSubmit").click(function (event) {
    event.preventDefault();
    submitBtn(
      "regUserInput",
      undefined,
      "regUserPara",
      "regUserErrorMessage",
      "regUser",
      "hash_7",
      true
    );
  });
  // regUser end

  // 8. remainMatching start
  $("#remainMatchingSubmit").click(function (event) {
    event.preventDefault();
    submitBtn(
      "remainMatchingInput",
      undefined,
      "remainMatchingPara",
      "remainMatchingErrorMessage",
      "remainMatching",
      "hash_8",
      true
    );
  });
  // remainMatching end

  // 9. remainPay start
  $("#remainPaySubmit").click(function (event) {
    event.preventDefault();
    noParams("remainPay", "remainPayPara", "hash_9", true);
  });
  // remainPay end

  // 10. unlockedSelf start
  $("#unlockedSelfSubmit").click(function (event) {
    event.preventDefault();
    noParams("unlockedSelf", "unlockedSelfPara", "hash_10", true);
  });
  // unlockedSelf end
  /*------------------------------------------------Write Page End------------------------------------------- */

  /*------------------------------------------ABI Page Start---------------------------------------------------- */

  // #abiTextarea

  // console.log("abc");

  _abiTextarea = $("#abiTextarea").text(JSON.stringify(_abi));

  $("#copyAbiButton").click(function () {
    copyToClipboard(_abiTextarea, this);
    // abc=$(this).text();
    console.log($(this));
  });

  $("#copyButton").click(function () {
    var href = $(this).siblings("a").attr("href");
    copyToClipboard(href, this);
  });

  function copyToClipboard(text, btn) {
    var input = $("<input>");
    $("body").append(input);
    input.val(text).select();
    document.execCommand("copy");
    input.remove();
    console.log(btn);
    $(btn).text("Copied");
  }
});
