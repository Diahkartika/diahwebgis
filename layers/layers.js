var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_2, 
                style: style_building_2,
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_building_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_building_2];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:city': 'addr:city', });
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'pump:unit': 'pump:unit', 'addr:housenumber': 'addr:housenumber', 'operator': 'operator', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'man_made': 'man_made', 'office': 'office', 'admin_level': 'admin_level', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'sport': 'sport', 'leisure': 'leisure', 'evacuation_center': 'evacuation_center', 'religion': 'religion', 'ground_floor:height': 'ground_floor:height', 'amenity': 'amenity', 'addr:full': 'addr:full', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'access:roof': 'access:roof', 'addr:city': 'addr:city', 'type': 'type', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'addr:city': '', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'pump:unit': '', 'addr:housenumber': '', 'operator': '', 'addr:street': '', 'addr:postcode': '', 'man_made': '', 'office': '', 'admin_level': '', 'school:type_idn': '', 'operator:type': '', 'sport': '', 'leisure': '', 'evacuation_center': '', 'religion': '', 'ground_floor:height': '', 'amenity': '', 'addr:full': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'access:roof': '', 'addr:city': '', 'type': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:city': 'no label', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'pump:unit': 'no label', 'addr:housenumber': 'no label', 'operator': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'man_made': 'no label', 'office': 'no label', 'admin_level': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'sport': 'no label', 'leisure': 'no label', 'evacuation_center': 'no label', 'religion': 'no label', 'ground_floor:height': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'access:roof': 'no label', 'addr:city': 'no label', 'type': 'no label', });
lyr_building_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});