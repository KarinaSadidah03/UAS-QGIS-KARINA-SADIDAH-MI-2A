var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AreaPerumahan_1 = new ol.format.GeoJSON();
var features_AreaPerumahan_1 = format_AreaPerumahan_1.readFeatures(json_AreaPerumahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPerumahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPerumahan_1.addFeatures(features_AreaPerumahan_1);
var lyr_AreaPerumahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPerumahan_1, 
                style: style_AreaPerumahan_1,
                popuplayertitle: 'Area Perumahan',
                interactive: true,
                title: '<img src="styles/legend/AreaPerumahan_1.png" /> Area Perumahan'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_KavlingTanah_3 = new ol.format.GeoJSON();
var features_KavlingTanah_3 = format_KavlingTanah_3.readFeatures(json_KavlingTanah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KavlingTanah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KavlingTanah_3.addFeatures(features_KavlingTanah_3);
var lyr_KavlingTanah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KavlingTanah_3, 
                style: style_KavlingTanah_3,
                popuplayertitle: 'Kavling Tanah',
                interactive: true,
    title: 'Kavling Tanah<br />\
    <img src="styles/legend/KavlingTanah_3_0.png" /> 10A<br />\
    <img src="styles/legend/KavlingTanah_3_1.png" /> 10B<br />\
    <img src="styles/legend/KavlingTanah_3_2.png" /> 10C<br />\
    <img src="styles/legend/KavlingTanah_3_3.png" /> 10D<br />\
    <img src="styles/legend/KavlingTanah_3_4.png" /> 10E<br />\
    <img src="styles/legend/KavlingTanah_3_5.png" /> 10F<br />\
    <img src="styles/legend/KavlingTanah_3_6.png" /> 11A<br />\
    <img src="styles/legend/KavlingTanah_3_7.png" /> 11B<br />\
    <img src="styles/legend/KavlingTanah_3_8.png" /> 11C<br />\
    <img src="styles/legend/KavlingTanah_3_9.png" /> 11D<br />\
    <img src="styles/legend/KavlingTanah_3_10.png" /> 11E<br />\
    <img src="styles/legend/KavlingTanah_3_11.png" /> 11F<br />\
    <img src="styles/legend/KavlingTanah_3_12.png" /> 12A<br />\
    <img src="styles/legend/KavlingTanah_3_13.png" /> 12B<br />\
    <img src="styles/legend/KavlingTanah_3_14.png" /> 12C<br />\
    <img src="styles/legend/KavlingTanah_3_15.png" /> 12D<br />\
    <img src="styles/legend/KavlingTanah_3_16.png" /> 12E<br />\
    <img src="styles/legend/KavlingTanah_3_17.png" /> 12F<br />\
    <img src="styles/legend/KavlingTanah_3_18.png" /> 13A<br />\
    <img src="styles/legend/KavlingTanah_3_19.png" /> 13B<br />\
    <img src="styles/legend/KavlingTanah_3_20.png" /> 13C<br />\
    <img src="styles/legend/KavlingTanah_3_21.png" /> 13D<br />\
    <img src="styles/legend/KavlingTanah_3_22.png" /> 14A<br />\
    <img src="styles/legend/KavlingTanah_3_23.png" /> 14B<br />\
    <img src="styles/legend/KavlingTanah_3_24.png" /> 14C<br />\
    <img src="styles/legend/KavlingTanah_3_25.png" /> 14D<br />\
    <img src="styles/legend/KavlingTanah_3_26.png" /> 1A<br />\
    <img src="styles/legend/KavlingTanah_3_27.png" /> 1B<br />\
    <img src="styles/legend/KavlingTanah_3_28.png" /> 1C<br />\
    <img src="styles/legend/KavlingTanah_3_29.png" /> 1D<br />\
    <img src="styles/legend/KavlingTanah_3_30.png" /> 1E<br />\
    <img src="styles/legend/KavlingTanah_3_31.png" /> 1F<br />\
    <img src="styles/legend/KavlingTanah_3_32.png" /> 1G<br />\
    <img src="styles/legend/KavlingTanah_3_33.png" /> 2A<br />\
    <img src="styles/legend/KavlingTanah_3_34.png" /> 2B<br />\
    <img src="styles/legend/KavlingTanah_3_35.png" /> 2C<br />\
    <img src="styles/legend/KavlingTanah_3_36.png" /> 2D<br />\
    <img src="styles/legend/KavlingTanah_3_37.png" /> 2E<br />\
    <img src="styles/legend/KavlingTanah_3_38.png" /> 2F<br />\
    <img src="styles/legend/KavlingTanah_3_39.png" /> 2G<br />\
    <img src="styles/legend/KavlingTanah_3_40.png" /> 3A<br />\
    <img src="styles/legend/KavlingTanah_3_41.png" /> 3B<br />\
    <img src="styles/legend/KavlingTanah_3_42.png" /> 3C<br />\
    <img src="styles/legend/KavlingTanah_3_43.png" /> 3D<br />\
    <img src="styles/legend/KavlingTanah_3_44.png" /> 3E<br />\
    <img src="styles/legend/KavlingTanah_3_45.png" /> 3F<br />\
    <img src="styles/legend/KavlingTanah_3_46.png" /> 3G<br />\
    <img src="styles/legend/KavlingTanah_3_47.png" /> 4A<br />\
    <img src="styles/legend/KavlingTanah_3_48.png" /> 4B<br />\
    <img src="styles/legend/KavlingTanah_3_49.png" /> 4C<br />\
    <img src="styles/legend/KavlingTanah_3_50.png" /> 4D<br />\
    <img src="styles/legend/KavlingTanah_3_51.png" /> 4E<br />\
    <img src="styles/legend/KavlingTanah_3_52.png" /> 4F<br />\
    <img src="styles/legend/KavlingTanah_3_53.png" /> 4G<br />\
    <img src="styles/legend/KavlingTanah_3_54.png" /> 5A<br />\
    <img src="styles/legend/KavlingTanah_3_55.png" /> 5B<br />\
    <img src="styles/legend/KavlingTanah_3_56.png" /> 5C<br />\
    <img src="styles/legend/KavlingTanah_3_57.png" /> 5D<br />\
    <img src="styles/legend/KavlingTanah_3_58.png" /> 5E<br />\
    <img src="styles/legend/KavlingTanah_3_59.png" /> 5F<br />\
    <img src="styles/legend/KavlingTanah_3_60.png" /> 5G<br />\
    <img src="styles/legend/KavlingTanah_3_61.png" /> 6A<br />\
    <img src="styles/legend/KavlingTanah_3_62.png" /> 6B<br />\
    <img src="styles/legend/KavlingTanah_3_63.png" /> 6C<br />\
    <img src="styles/legend/KavlingTanah_3_64.png" /> 6D<br />\
    <img src="styles/legend/KavlingTanah_3_65.png" /> 6E<br />\
    <img src="styles/legend/KavlingTanah_3_66.png" /> 6F<br />\
    <img src="styles/legend/KavlingTanah_3_67.png" /> 6G<br />\
    <img src="styles/legend/KavlingTanah_3_68.png" /> 7A<br />\
    <img src="styles/legend/KavlingTanah_3_69.png" /> 7B<br />\
    <img src="styles/legend/KavlingTanah_3_70.png" /> 7C<br />\
    <img src="styles/legend/KavlingTanah_3_71.png" /> 7D<br />\
    <img src="styles/legend/KavlingTanah_3_72.png" /> 7E<br />\
    <img src="styles/legend/KavlingTanah_3_73.png" /> 7F<br />\
    <img src="styles/legend/KavlingTanah_3_74.png" /> 7G<br />\
    <img src="styles/legend/KavlingTanah_3_75.png" /> 8A<br />\
    <img src="styles/legend/KavlingTanah_3_76.png" /> 8B<br />\
    <img src="styles/legend/KavlingTanah_3_77.png" /> 8C<br />\
    <img src="styles/legend/KavlingTanah_3_78.png" /> 8D<br />\
    <img src="styles/legend/KavlingTanah_3_79.png" /> 8E<br />\
    <img src="styles/legend/KavlingTanah_3_80.png" /> 8F<br />\
    <img src="styles/legend/KavlingTanah_3_81.png" /> 9A<br />\
    <img src="styles/legend/KavlingTanah_3_82.png" /> 9B<br />\
    <img src="styles/legend/KavlingTanah_3_83.png" /> 9C<br />\
    <img src="styles/legend/KavlingTanah_3_84.png" /> 9D<br />\
    <img src="styles/legend/KavlingTanah_3_85.png" /> 9E<br />\
    <img src="styles/legend/KavlingTanah_3_86.png" /> 9F<br />\
    <img src="styles/legend/KavlingTanah_3_87.png" /> <br />'
        });
var format_Fasilitas_4 = new ol.format.GeoJSON();
var features_Fasilitas_4 = format_Fasilitas_4.readFeatures(json_Fasilitas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_4.addFeatures(features_Fasilitas_4);
var lyr_Fasilitas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_4, 
                style: style_Fasilitas_4,
                popuplayertitle: 'Fasilitas',
                interactive: true,
    title: 'Fasilitas<br />\
    <img src="styles/legend/Fasilitas_4_0.png" /> Lapangan<br />\
    <img src="styles/legend/Fasilitas_4_1.png" /> Masjid<br />\
    <img src="styles/legend/Fasilitas_4_2.png" /> Taman<br />\
    <img src="styles/legend/Fasilitas_4_3.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_AreaPerumahan_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_KavlingTanah_3.setVisible(true);lyr_Fasilitas_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AreaPerumahan_1,lyr_Jalan_2,lyr_KavlingTanah_3,lyr_Fasilitas_4];
lyr_AreaPerumahan_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_Jalan_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_KavlingTanah_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_Fasilitas_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_AreaPerumahan_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_KavlingTanah_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Fasilitas_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_AreaPerumahan_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_KavlingTanah_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_Fasilitas_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_Fasilitas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});