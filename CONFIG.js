//--------------------------------------------------
//General Config Settings
//--------------------------------------------------

config = {}
config['domoticz_ip'] = 'http://192.168.6.245:8080';
config['app_title'] = 'Dashticz V3';
config['domoticz_refresh'] = '5';
config['dashticz_refresh'] = '60';
config['user_name'] = 'JakeOfOz'
config['pass_word'] = 'SonjaDeKat'

config['use_favorites'] = 0;  //Request all Domoticz Devices, not only favorites
config['auto_positioning'] = 0;  // Use 0 this if you have defined your own columns


//--------------------------------------------------
//Definition of buttons
//--------------------------------------------------
buttons = {}
buttons.buienradar = {width:12, isimage:true, refresh:60, btnimage: 'https://image.buienradar.nl/2.0/image/animation/RadarMapRainNL?height=300&w$

//--------------------------------------------------
//Definition of blocks
//--------------------------------------------------
blocks = {}

//Huidige stand van de meter voor vandaag
blocks['P1 Smart Meter'] = {
    idx: 1,
    title: 'Totaalverbruik',
    type: 'dial',
    width: 3,
    min: -10,
    max: 10,
    showring: true,
    showunit: true,
    shownumbers: true,
    last_update: false,
    animation: false
}



//Netto huidig verbruik op de meter
blocks['Verbruik'] = {
    idx: '1_1',
    title: 'Netto verbruik',
    width: 4,
}


//Grafiek warmtepomp modulatie
blocks['Warmtepomp'] = {
    title: 'Modulatie warmtepomp',
    devices: [85],
    graph: ['bar'],
    datasetColors: ['blue'],
    range: 'today',
    height: '200px',
    width: 12,
}

//Instelling thermostaat woonkamer
blocks['Thermostat'] = {
    idx: 105,
    title: 'Thermostaat',
    width: 12,
}

//Temperatuur gemeten door thermostaat
blocks['TempIndoor'] = {
    idx: 104,
    title: 'Woonkamer',
    width: 12,
}

//Temperatuur gemeten door warmtepomp buiten
blocks['TempOutdoor'] = {
    idx: 79,
    title: 'BuitenTemp',
    width: 12,
}

//Huidige oplevering zonnepanelen
blocks['SolarEdge'] = {
    idx: 36,
    type: 'dial',
    title: 'Zonnepanelen',
    width: 3,
    animation: false,
    last_update: false,
    decimals: 0,
    values: [
        {
         idx: 41,
         value: 'CounterToday',
         label: 'Totaal',
         unit: 'kWh',
         decimals: 2,
        }],
}

//Grafiek oplevering zonnepanelen vandaag
blocks['SolarEdgePower'] = {
    devices: [41],
    graph: 'bar',
    datasetColors: ['green'],
    range: 'today',
    height: '300px',
    width: 9
}

/*
//Temperaturen binnen buiten grafiek
blocks['Temps'] = {
    title: 'Temperatures',
    devices: [79,104],
    graph: ['line','line'],
    datasetColors: ['red','green'],
    range: 'today',
    height: '200px',
    width: 9,
    legend: {
        te_79: "Outside",
        te_104: "Indoor"
    }
}
*/


blocks['smartMeter'] = {
    devices: [1],
    width: 12,
    height: '300px',
    graph: ['bar','line','line'],
    custom: {
        "Today": {
        range: 'today',
        filter: 'today',
        data: {
            nett: 'd.v_1+d.v2_1-d.r1_1-d.r2_1',
            usage: 'd.v_1+d.v2_1',
            generation: '-d.r1_1-d.r2_1'
        }
        }
    },
    datasetColors: ['gray','red','green']
}




//--------------------------------------------------
//Definition of columns
//--------------------------------------------------
columns = {}

columns[1] = {
    width: 9,
    blocks : [
        'P1 Smart Meter',
        'SolarEdge',
        'Verbruik',
        'SolarEdgePower',
        'Temps',
        'Warmtepomp',
        'smartMeter',
        ],
}

columns[2] = {
    width: 3,
    blocks: [
        'Thermostat',
        'TempIndoor',
        'TempOutdoor',
        buttons.buienradar,
        ]
}


//--------------------------------------------------
//Definitions of screens
//--------------------------------------------------
screens = {}
screens[1] = {
  background: 'bg4.jpg',
  columns: [1, 2]
}
