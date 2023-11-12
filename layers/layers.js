var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });
var lyr_CurtisMillAreaHillshade_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "CurtisMillAreaHillshade",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CurtisMillAreaHillshade_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9888644.809429, 5301596.790147, -9882951.755098, 5307310.399210]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_CurtisMillAreaHillshade_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CurtisMillAreaHillshade_1];
