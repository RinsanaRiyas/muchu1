ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([76.477627, 10.607269, 76.588079, 10.681902]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ALATHUR1_1 = new ol.format.GeoJSON();
var features_ALATHUR1_1 = format_ALATHUR1_1.readFeatures(json_ALATHUR1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ALATHUR1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALATHUR1_1.addFeatures(features_ALATHUR1_1);
var lyr_ALATHUR1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALATHUR1_1, 
                style: style_ALATHUR1_1,
                popuplayertitle: 'ALATHUR1',
                interactive: true,
    title: 'ALATHUR1<br />\
    <img src="styles/legend/ALATHUR1_1_0.png" /> ANANGATTUPARAMBU<br />\
    <img src="styles/legend/ALATHUR1_1_1.png" /> BANK ROAD<br />\
    <img src="styles/legend/ALATHUR1_1_2.png" /> ERATTAKULAM<br />\
    <img src="styles/legend/ALATHUR1_1_3.png" /> KATTUSSERY<br />\
    <img src="styles/legend/ALATHUR1_1_4.png" /> KEEZHPADAM<br />\
    <img src="styles/legend/ALATHUR1_1_5.png" /> KUMBALAKKODE<br />\
    <img src="styles/legend/ALATHUR1_1_6.png" /> KUNNAKKAD<br />\
    <img src="styles/legend/ALATHUR1_1_7.png" /> MALAMALMUKKU<br />\
    <img src="styles/legend/ALATHUR1_1_8.png" /> MALIKAPARAMBU<br />\
    <img src="styles/legend/ALATHUR1_1_9.png" /> MARKET<br />\
    <img src="styles/legend/ALATHUR1_1_10.png" /> MARUTHANGADE<br />\
    <img src="styles/legend/ALATHUR1_1_11.png" /> NARIYAMPARAMBU<br />\
    <img src="styles/legend/ALATHUR1_1_12.png" /> PARAKKUNNAM<br />\
    <img src="styles/legend/ALATHUR1_1_13.png" /> PERUNGULAM<br />\
    <img src="styles/legend/ALATHUR1_1_14.png" /> PUTHIYANGAM<br />\
    <img src="styles/legend/ALATHUR1_1_15.png" /> THEKKUMURI<br />\
    <img src="styles/legend/ALATHUR1_1_16.png" /> THRIPPALUR<br />\
    <img src="styles/legend/ALATHUR1_1_17.png" /> VENGANNUR<br />\
    <img src="styles/legend/ALATHUR1_1_18.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ALATHUR1_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ALATHUR1_1];
lyr_ALATHUR1_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', 'TOTAL POP': 'TOTAL POP', });
lyr_ALATHUR1_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', 'TOTAL POP': 'TextEdit', });
lyr_ALATHUR1_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', 'TOTAL POP': 'no label', });
lyr_ALATHUR1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});