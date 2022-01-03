var APP_DATA = {
  "scenes": [
    {
      "id": "0-street-view",
      "name": "Street view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.072050381469328,
        "pitch": -0.2175908879182593,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -2.524925540682135,
          "pitch": 0.16237670780486546,
          "rotation": 0,
          "target": "1-inside-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-inside-gate",
      "name": "Inside gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7170771269369283,
        "pitch": -0.15198500179102936,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -0.934618818230426,
          "pitch": 0.17998881502527908,
          "rotation": 3.141592653589793,
          "target": "0-street-view"
        },
        {
          "yaw": -2.1025897988745292,
          "pitch": 0.06552322950467726,
          "rotation": 3.141592653589793,
          "target": "2-right-corner"
        },
        {
          "yaw": 2.201201305512811,
          "pitch": -0.021926776441342,
          "rotation": 1.5707963267948966,
          "target": "8-main-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-right-corner",
      "name": "Right corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.8429676715857113,
        "pitch": -0.0881399339344835,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 0.13609577557909702,
          "pitch": 0.03515368813692632,
          "rotation": 3.141592653589793,
          "target": "1-inside-gate"
        },
        {
          "yaw": 2.156749704194466,
          "pitch": 0.11037886614250958,
          "rotation": 3.141592653589793,
          "target": "3-right-middle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-right-middle",
      "name": "Right middle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.825269651262337,
        "pitch": -0.06977744769813476,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 1.8710876216578587,
          "pitch": 0.06681337369637319,
          "rotation": 3.141592653589793,
          "target": "2-right-corner"
        },
        {
          "yaw": -1.0760133929971065,
          "pitch": 0.12001987756248944,
          "rotation": 3.141592653589793,
          "target": "4-right-far-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-right-far-corner",
      "name": "Right far corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2895177865965657,
        "pitch": -0.1293009451990308,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -0.08221894123310314,
          "pitch": 0.09004331717728675,
          "rotation": 3.141592653589793,
          "target": "3-right-middle"
        },
        {
          "yaw": 1.7515970834727677,
          "pitch": 0.08953023628981782,
          "rotation": 3.141592653589793,
          "target": "5-bbq-dining-room"
        },
        {
          "yaw": 0.818601476158916,
          "pitch": 0.03258258030959027,
          "rotation": 0,
          "target": "13-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bbq-dining-room",
      "name": "BBQ-Dining room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.67778484924213,
        "pitch": 0.04765362963786046,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 0.5212451689311308,
          "pitch": 0.0444601692113995,
          "rotation": 3.141592653589793,
          "target": "4-right-far-corner"
        },
        {
          "yaw": -2.381128772307809,
          "pitch": 0.0798689526863825,
          "rotation": 3.141592653589793,
          "target": "6-back-garden"
        },
        {
          "yaw": 2.756737368495494,
          "pitch": -0.04957830935866525,
          "rotation": 0,
          "target": "12-dining-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7310440568218812,
          "pitch": 1.030370830827934,
          "title": "Well",
          "text": "Large deep water well - abundant pure free water&nbsp;"
        },
        {
          "yaw": 2.498170164872212,
          "pitch": -0.05009358251811946,
          "title": "Dining room",
          "text": "Easy dining room access from BBQ area"
        }
      ]
    },
    {
      "id": "6-back-garden",
      "name": "Back garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.085866501285647,
        "pitch": 0.12536620032267365,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -3.093599517167931,
          "pitch": 0.07259936987833981,
          "rotation": 9.42477796076938,
          "target": "5-bbq-dining-room"
        },
        {
          "yaw": -0.3262830429240573,
          "pitch": 0.1713437102102393,
          "rotation": 3.141592653589793,
          "target": "7-garage"
        },
        {
          "yaw": -1.3441788686063099,
          "pitch": 0.03454182748556178,
          "rotation": 4.71238898038469,
          "target": "9-kitchen-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-garage",
      "name": "Garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1444434193472155,
        "pitch": -0.04135653450843435,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -1.9550119347177102,
          "pitch": 0.00838310220737526,
          "rotation": 3.141592653589793,
          "target": "5-bbq-dining-room"
        },
        {
          "yaw": -0.8338081945289701,
          "pitch": 0.03468616118219714,
          "rotation": 4.71238898038469,
          "target": "9-kitchen-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-main-door",
      "name": "Main door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.28266257042797,
        "pitch": 0.06059620457995152,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -0.3520878247801953,
          "pitch": 0.022720164453186698,
          "rotation": 3.141592653589793,
          "target": "7-garage"
        },
        {
          "yaw": 0.03788540748207758,
          "pitch": 0.059498962634599195,
          "rotation": 7.853981633974483,
          "target": "9-kitchen-door"
        },
        {
          "yaw": 0.9822459848148277,
          "pitch": 0.011025486157432596,
          "rotation": 0,
          "target": "14-main-entrance"
        },
        {
          "yaw": 2.7427728787878927,
          "pitch": 0.0952397974109136,
          "rotation": 3.141592653589793,
          "target": "1-inside-gate"
        },
        {
          "yaw": 2.0599650932900353,
          "pitch": -0.42169630355482823,
          "rotation": 0,
          "target": "30-bd5-far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-kitchen-door",
      "name": "Kitchen door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.16523827237816135,
        "pitch": -0.03580684816088464,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -2.0948017836026764,
          "pitch": 0.09253909409562766,
          "rotation": 3.141592653589793,
          "target": "7-garage"
        },
        {
          "yaw": 0.37023380606956735,
          "pitch": 0.04503879865166738,
          "rotation": 4.71238898038469,
          "target": "10-kitchen"
        },
        {
          "yaw": 0.8357037843414101,
          "pitch": 0.06789127767286374,
          "rotation": 4.71238898038469,
          "target": "8-main-door"
        },
        {
          "yaw": 0.9960065412585131,
          "pitch": 0.07210037904421185,
          "rotation": 3.141592653589793,
          "target": "1-inside-gate"
        },
        {
          "yaw": -1.0785941577733897,
          "pitch": 0.04927496002320808,
          "rotation": 3.141592653589793,
          "target": "6-back-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0834792721728839,
        "pitch": 0.19709209222999746,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 2.6524988677723904,
          "pitch": -0.027347699180621632,
          "rotation": 1.5707963267948966,
          "target": "9-kitchen-door"
        },
        {
          "yaw": 0.18998564138612473,
          "pitch": -0.023415953939590395,
          "rotation": 5.497787143782138,
          "target": "12-dining-room"
        },
        {
          "yaw": -1.0145774447828693,
          "pitch": -0.01593109055775166,
          "rotation": 5.497787143782138,
          "target": "11-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5017136018335187,
        "pitch": 0.17077112199803324,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 2.631317018620255,
          "pitch": -0.07202754274305434,
          "rotation": 0.7853981633974483,
          "target": "10-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-dining-room",
      "name": "Dining room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.3054305982038628,
        "pitch": 0.20630161497232358,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 2.0832188146984603,
          "pitch": -0.023598182567184267,
          "rotation": 0.7853981633974483,
          "target": "10-kitchen"
        },
        {
          "yaw": -1.0214662657809068,
          "pitch": 0.02493380785573862,
          "rotation": 0.7853981633974483,
          "target": "5-bbq-dining-room"
        },
        {
          "yaw": 1.0023277746898955,
          "pitch": 0.06032364152166991,
          "rotation": 3.141592653589793,
          "target": "13-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-sitting-room",
      "name": "Sitting room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9844159413040678,
        "pitch": 0.18798931509618555,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -2.9141932882879207,
          "pitch": 0.04875649247601643,
          "rotation": 3.141592653589793,
          "target": "12-dining-room"
        },
        {
          "yaw": 3.109465625700474,
          "pitch": 0.01830100034317894,
          "rotation": 5.497787143782138,
          "target": "10-kitchen"
        },
        {
          "yaw": 2.2680330152401407,
          "pitch": -0.0157785493760354,
          "rotation": 3.141592653589793,
          "target": "14-main-entrance"
        },
        {
          "yaw": 2.1547719064383983,
          "pitch": -0.7789678610101927,
          "rotation": 3.141592653589793,
          "target": "24-attic-hall-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-main-entrance",
      "name": "Main entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.411695673368598,
        "pitch": 0.2347408674194078,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 1.4063591633964396,
          "pitch": -0.02231491351873771,
          "rotation": 0,
          "target": "8-main-door"
        },
        {
          "yaw": -1.8864536384239994,
          "pitch": 0.16911503262839744,
          "rotation": 3.141592653589793,
          "target": "13-sitting-room"
        },
        {
          "yaw": 2.904518444813463,
          "pitch": 0.1127744605375689,
          "rotation": 5.497787143782138,
          "target": "21-stairs"
        },
        {
          "yaw": 0.4167317607016088,
          "pitch": -0.014448562410739996,
          "rotation": 0,
          "target": "15-wc1"
        },
        {
          "yaw": -0.5272054674505711,
          "pitch": -0.02748253349492913,
          "rotation": 0,
          "target": "16-bed-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1288472343703457,
          "pitch": -0.07312656831728503,
          "title": "Wine cellar",
          "text": "Text"
        }
      ]
    },
    {
      "id": "15-wc1",
      "name": "WC1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3800480264697832,
        "pitch": 0.3002266499643156,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 2.2767035491372596,
          "pitch": -0.13694046186248698,
          "rotation": 0,
          "target": "14-main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bed-hall",
      "name": "Bed-Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.189740960027639,
        "pitch": 0.2303093435362964,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -1.2398417881550152,
          "pitch": 0.036871919115345264,
          "rotation": 0,
          "target": "14-main-entrance"
        },
        {
          "yaw": -2.6309068467760817,
          "pitch": -0.03897112575389805,
          "rotation": 0,
          "target": "17-wc2"
        },
        {
          "yaw": 1.9809993386112685,
          "pitch": -0.0018187672684319978,
          "rotation": 0,
          "target": "18-bed1"
        },
        {
          "yaw": 1.1422351680541833,
          "pitch": -0.015573438480757318,
          "rotation": 0,
          "target": "19-bed2"
        },
        {
          "yaw": -0.0870305866956329,
          "pitch": -0.040668611524314,
          "rotation": 0,
          "target": "20-bed3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-wc2",
      "name": "WC2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.8761169584539665,
        "pitch": 0.2980578580656932,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 2.473226234016499,
          "pitch": -0.12508715743583032,
          "rotation": 0,
          "target": "16-bed-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bed1",
      "name": "Bed1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.9887009439565375,
        "pitch": 0.2506479371261854,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 2.5360342186325235,
          "pitch": 0.0032476847281692756,
          "rotation": 0,
          "target": "16-bed-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bed2",
      "name": "Bed2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.6815679605419298,
        "pitch": 0.23716557104735791,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -1.593838719872947,
          "pitch": 0.020470474929449978,
          "rotation": 0,
          "target": "16-bed-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-bed3",
      "name": "Bed3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.3789884913013868,
        "pitch": 0.28169723203492936,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -0.9277959718885924,
          "pitch": -0.013843787260169549,
          "rotation": 0,
          "target": "16-bed-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-stairs",
      "name": "Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.2261133263769572,
        "pitch": 0.0356838825589989,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 1.9315107807207381,
          "pitch": -0.15137113574541772,
          "rotation": 2.356194490192345,
          "target": "14-main-entrance"
        },
        {
          "yaw": -2.0675235560847334,
          "pitch": -0.4019833399193402,
          "rotation": 0.7853981633974483,
          "target": "22-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-landing",
      "name": "Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.8242727232317204,
        "pitch": 0.024789356419073982,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 1.1376040088780357,
          "pitch": 0.4724018252239741,
          "rotation": 3.141592653589793,
          "target": "21-stairs"
        },
        {
          "yaw": 0.6567324366914189,
          "pitch": 0.05347902400580651,
          "rotation": 3.141592653589793,
          "target": "23-attic-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-attic-hall",
      "name": "Attic Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5327913895179037,
        "pitch": 0.11040429888529601,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -2.7228878803692638,
          "pitch": 0.4437385658243951,
          "rotation": 3.141592653589793,
          "target": "22-landing"
        },
        {
          "yaw": 2.2257104210921685,
          "pitch": -0.053673086313695606,
          "rotation": 0,
          "target": "27-bd5-hall"
        },
        {
          "yaw": 1.655182737177598,
          "pitch": 0.15720938053876488,
          "rotation": 3.141592653589793,
          "target": "24-attic-hall-corner"
        },
        {
          "yaw": 1.088376238820917,
          "pitch": 0.2287606353063687,
          "rotation": 3.141592653589793,
          "target": "13-sitting-room"
        },
        {
          "yaw": -1.6344615071890871,
          "pitch": -0.009773333436900344,
          "rotation": 0,
          "target": "25-bd4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-attic-hall-corner",
      "name": "Attic Hall corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.3112234839729169,
        "pitch": 0.2940823843931746,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -0.09531427836013862,
          "pitch": 0.4894811650325348,
          "rotation": 3.141592653589793,
          "target": "23-attic-hall"
        },
        {
          "yaw": 0.17441423887091823,
          "pitch": 0.008245954785657261,
          "rotation": 0,
          "target": "25-bd4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-bd4",
      "name": "Bd4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.128120734152887,
        "pitch": 0.2216108782042383,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -1.134757000360917,
          "pitch": -0.01957251658669179,
          "rotation": 0,
          "target": "26-bd4-balcony"
        },
        {
          "yaw": 1.3249864978777044,
          "pitch": -0.08391513801394268,
          "rotation": 0,
          "target": "23-attic-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-bd4-balcony",
      "name": "Bd4 balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.3884627262000855,
        "pitch": 0.3062942184413018,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 2.720379284885823,
          "pitch": 0.27048521551926896,
          "rotation": 3.141592653589793,
          "target": "6-back-garden"
        },
        {
          "yaw": 1.4346349319452045,
          "pitch": -0.0902540098723641,
          "rotation": 0,
          "target": "25-bd4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-bd5-hall",
      "name": "Bd5 hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.2953645221954062,
        "pitch": -0.0027543729354526647,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 1.1381492893496414,
          "pitch": -0.17524282297513594,
          "rotation": 0,
          "target": "28-wc3"
        },
        {
          "yaw": 0.23395135100566655,
          "pitch": 0.010889315495585805,
          "rotation": 3.141592653589793,
          "target": "29-bd5-near"
        },
        {
          "yaw": -2.6363124940555736,
          "pitch": 0.23847548568335597,
          "rotation": 3.141592653589793,
          "target": "23-attic-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-wc3",
      "name": "WC3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.21937935459661162,
        "pitch": 0.5424744709838354,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -2.175970423020594,
          "pitch": -0.17993399087315964,
          "rotation": 0,
          "target": "27-bd5-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-bd5-near",
      "name": "Bd5 near",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.31601819592324176,
        "pitch": 0.011017491741810659,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": 0.2138959015000932,
          "pitch": -0.0026329719377873317,
          "rotation": 3.141592653589793,
          "target": "30-bd5-far"
        },
        {
          "yaw": 1.3357626846953927,
          "pitch": 0.03798355942379139,
          "rotation": 1.5707963267948966,
          "target": "8-main-door"
        },
        {
          "yaw": -2.5334480472410164,
          "pitch": 0.05540539850023407,
          "rotation": 3.141592653589793,
          "target": "27-bd5-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-bd5-far",
      "name": "Bd5 far",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.8199413347445788,
        "pitch": 0.2631678141054934,
        "fov": 1.4956245039507043
      },
      "linkHotspots": [
        {
          "yaw": -2.6044404963760073,
          "pitch": 0.04229975287640286,
          "rotation": 3.141592653589793,
          "target": "29-bd5-near"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
