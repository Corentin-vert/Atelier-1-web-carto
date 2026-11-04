ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([846139.714394, 6249217.320319, 890441.548651, 6283155.210319]);
var wms_layers = [];

var lyr_PlanIGNJ1_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https%3A%2F%2Fdata.geopf.fr%2Fwms-r%2Fwms%3FVERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Plan IGN J+1',
                            popuplayertitle: 'Plan IGN J+1',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGNJ1_0, 0]);
var lyr_Ortho20cm_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https%3A%2F%2Fdata.geopf.fr%2Fwms-r%2Fwms%3FVERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortho 20 cm',
                            popuplayertitle: 'Ortho 20 cm',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho20cm_1, 0]);
var format_communescommune_2 = new ol.format.GeoJSON();
var features_communescommune_2 = format_communescommune_2.readFeatures(json_communescommune_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_communescommune_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communescommune_2.addFeatures(features_communescommune_2);
var lyr_communescommune_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_communescommune_2, 
                style: style_communescommune_2,
                popuplayertitle: 'communes — commune',
                interactive: true,
                title: '<img src="styles/legend/communescommune_2.png" /> communes — commune'
            });
var format_ports_existants_3 = new ol.format.GeoJSON();
var features_ports_existants_3 = format_ports_existants_3.readFeatures(json_ports_existants_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ports_existants_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ports_existants_3.addFeatures(features_ports_existants_3);
cluster_ports_existants_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ports_existants_3
});
var lyr_ports_existants_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ports_existants_3, 
                style: style_ports_existants_3,
                popuplayertitle: 'ports_existants',
                interactive: true,
                title: '<img src="styles/legend/ports_existants_3.png" /> ports_existants'
            });
var format_Lignebateaubusligne_de_bateau_bus_4 = new ol.format.GeoJSON();
var features_Lignebateaubusligne_de_bateau_bus_4 = format_Lignebateaubusligne_de_bateau_bus_4.readFeatures(json_Lignebateaubusligne_de_bateau_bus_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Lignebateaubusligne_de_bateau_bus_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lignebateaubusligne_de_bateau_bus_4.addFeatures(features_Lignebateaubusligne_de_bateau_bus_4);
var lyr_Lignebateaubusligne_de_bateau_bus_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lignebateaubusligne_de_bateau_bus_4, 
                style: style_Lignebateaubusligne_de_bateau_bus_4,
                popuplayertitle: 'Ligne bateau bus — ligne_de_bateau_bus',
                interactive: true,
    title: 'Ligne bateau bus — ligne_de_bateau_bus<br />\
    <img src="styles/legend/Lignebateaubusligne_de_bateau_bus_4_0.png" /> 239 - 1063<br />\
    <img src="styles/legend/Lignebateaubusligne_de_bateau_bus_4_1.png" /> 1063 - 2096<br />\
    <img src="styles/legend/Lignebateaubusligne_de_bateau_bus_4_2.png" /> 2096 - 2437<br />\
    <img src="styles/legend/Lignebateaubusligne_de_bateau_bus_4_3.png" /> 2437 - 3585<br />\
    <img src="styles/legend/Lignebateaubusligne_de_bateau_bus_4_4.png" /> 3585 - 4870<br />' });
var format_embarcadere_potentielsfiltr1_5 = new ol.format.GeoJSON();
var features_embarcadere_potentielsfiltr1_5 = format_embarcadere_potentielsfiltr1_5.readFeatures(json_embarcadere_potentielsfiltr1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_embarcadere_potentielsfiltr1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_embarcadere_potentielsfiltr1_5.addFeatures(features_embarcadere_potentielsfiltr1_5);
cluster_embarcadere_potentielsfiltr1_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_embarcadere_potentielsfiltr1_5
});
var lyr_embarcadere_potentielsfiltr1_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_embarcadere_potentielsfiltr1_5, 
                style: style_embarcadere_potentielsfiltr1_5,
                popuplayertitle: 'embarcadere_potentiels — filtr1',
                interactive: true,
    title: 'embarcadere_potentiels — filtr1<br />\
    <img src="styles/legend/embarcadere_potentielsfiltr1_5_0.png" /> Bonne emprise foncière mais éloignement à plus de 400 m des commodités<br />\
    <img src="styles/legend/embarcadere_potentielsfiltr1_5_1.png" /> Emprise foncière supérieure à 5000 m² et bonne connexion aux commodités les plus proches<br />\
    <img src="styles/legend/embarcadere_potentielsfiltr1_5_2.png" /> Faible emprise foncière et éloignement à plus de 400 m des commodités<br />' });
var group_Travail = new ol.layer.Group({
                                layers: [lyr_PlanIGNJ1_0,lyr_Ortho20cm_1,lyr_communescommune_2,lyr_ports_existants_3,lyr_Lignebateaubusligne_de_bateau_bus_4,lyr_embarcadere_potentielsfiltr1_5,],
                                fold: 'open',
                                title: 'Travail'});

lyr_PlanIGNJ1_0.setVisible(true);lyr_Ortho20cm_1.setVisible(true);lyr_communescommune_2.setVisible(true);lyr_ports_existants_3.setVisible(true);lyr_Lignebateaubusligne_de_bateau_bus_4.setVisible(true);lyr_embarcadere_potentielsfiltr1_5.setVisible(true);
var layersList = [group_Travail];
lyr_communescommune_2.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'code_insee_du_canton': 'code_insee_du_canton', 'code_insee_de_l_arrondissement': 'code_insee_de_l_arrondissement', 'code_insee_de_la_collectivite_terr': 'code_insee_de_la_collectivite_terr', 'code_insee_du_departement': 'code_insee_du_departement', 'code_insee_de_la_region': 'code_insee_de_la_region', 'population': 'population', 'superficie_cadastrale': 'superficie_cadastrale', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'code_postal': 'code_postal', 'nom_officiel': 'nom_officiel', 'chef_lieu_d_arrondissement': 'chef_lieu_d_arrondissement', 'chef_lieu_de_collectivite_terr': 'chef_lieu_de_collectivite_terr', 'chef_lieu_de_departement': 'chef_lieu_de_departement', 'chef_lieu_de_region': 'chef_lieu_de_region', 'capitale_d_etat': 'capitale_d_etat', 'date_du_recensement': 'date_du_recensement', 'organisme_recenseur': 'organisme_recenseur', 'code_siren': 'code_siren', 'codes_siren_des_epci': 'codes_siren_des_epci', 'lien_vers_chef_lieu': 'lien_vers_chef_lieu', 'liens_vers_autorite_administrative': 'liens_vers_autorite_administrative', });
lyr_ports_existants_3.set('fieldAliases', {'fid': 'fid', 'nom': 'Nom', });
lyr_Lignebateaubusligne_de_bateau_bus_4.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'nb_passager_jour': 'Nombre de passager par jour', });
lyr_embarcadere_potentielsfiltr1_5.set('fieldAliases', {'fid': 'fid', 'hub_dist_routes': 'Distance de la route la plus proche (en m)', 'hub_dist_parking': 'Distance au parking le plus proche (en m)', 'surf': 'Surface (en m²)', 'Potentiel': 'Potentiel', });
lyr_communescommune_2.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'code_insee_du_canton': 'TextEdit', 'code_insee_de_l_arrondissement': 'TextEdit', 'code_insee_de_la_collectivite_terr': 'TextEdit', 'code_insee_du_departement': 'TextEdit', 'code_insee_de_la_region': 'TextEdit', 'population': 'Range', 'superficie_cadastrale': 'Range', 'date_creation': 'DateTime', 'date_modification': 'DateTime', 'date_d_apparition': 'DateTime', 'date_de_confirmation': 'DateTime', 'code_postal': 'TextEdit', 'nom_officiel': 'TextEdit', 'chef_lieu_d_arrondissement': 'CheckBox', 'chef_lieu_de_collectivite_terr': 'CheckBox', 'chef_lieu_de_departement': 'CheckBox', 'chef_lieu_de_region': 'CheckBox', 'capitale_d_etat': 'CheckBox', 'date_du_recensement': 'DateTime', 'organisme_recenseur': 'TextEdit', 'code_siren': 'TextEdit', 'codes_siren_des_epci': 'TextEdit', 'lien_vers_chef_lieu': 'TextEdit', 'liens_vers_autorite_administrative': 'TextEdit', });
lyr_ports_existants_3.set('fieldImages', {'fid': 'Hidden', 'nom': 'TextEdit', });
lyr_Lignebateaubusligne_de_bateau_bus_4.set('fieldImages', {'fid': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'nb_passager_jour': 'Range', });
lyr_embarcadere_potentielsfiltr1_5.set('fieldImages', {'fid': 'Hidden', 'hub_dist_routes': 'Range', 'hub_dist_parking': 'Range', 'surf': 'Range', 'Potentiel': 'TextEdit', });
lyr_communescommune_2.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'code_insee': 'no label', 'code_insee_du_canton': 'no label', 'code_insee_de_l_arrondissement': 'no label', 'code_insee_de_la_collectivite_terr': 'no label', 'code_insee_du_departement': 'no label', 'code_insee_de_la_region': 'no label', 'population': 'no label', 'superficie_cadastrale': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'code_postal': 'no label', 'nom_officiel': 'inline label - always visible', 'chef_lieu_d_arrondissement': 'no label', 'chef_lieu_de_collectivite_terr': 'no label', 'chef_lieu_de_departement': 'no label', 'chef_lieu_de_region': 'no label', 'capitale_d_etat': 'no label', 'date_du_recensement': 'no label', 'organisme_recenseur': 'no label', 'code_siren': 'no label', 'codes_siren_des_epci': 'no label', 'lien_vers_chef_lieu': 'no label', 'liens_vers_autorite_administrative': 'no label', });
lyr_ports_existants_3.set('fieldLabels', {'nom': 'inline label - always visible', });
lyr_Lignebateaubusligne_de_bateau_bus_4.set('fieldLabels', {'nb_passager_jour': 'inline label - always visible', });
lyr_embarcadere_potentielsfiltr1_5.set('fieldLabels', {'hub_dist_routes': 'inline label - always visible', 'hub_dist_parking': 'inline label - always visible', 'surf': 'inline label - always visible', 'Potentiel': 'inline label - always visible', });
lyr_embarcadere_potentielsfiltr1_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});