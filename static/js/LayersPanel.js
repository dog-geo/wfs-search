/*************************************************************************************************************************************************
/	Layers Panel
/	Create the components that make up the Layers Panel:
/		- Quick-Pick Data Services combo box
/		- Base Url input box
/		- Layer tree (see Main.js)
/		- Status display
/		- Remove Layer button
/************************************************************************************************************************************************/

// Create the top toolbar consisting of:
// 	- The Quick-Pick Data Services combo box
//	- Base Url input box
function CreateDataServicesToolbar(){
	var dataServicesToolbar = [];
	
	// Create the Quick-Pick Data Services combo box
	dataServicesToolbar.push([{
		width:			175, 
		//width:        194,  // Width without the Url button
		xtype:          'combo',
		mode:           'local',
		value:          'Quick-Pick Data Services:',
		triggerAction:  'all',
		forceSelection: false,
		editable:       false,                                
		fieldLabel:     'Title',
		name:           'title',
		displayField:   'name',
		valueField: 	'value',
		store: 			new Ext.data.JsonStore({
			fields: ['name', 'value'],
			data: [
				//{name: 'AZActiveFaults', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/AZActiveFaults/MapServer/WFSServer'}, // !!!!!! PARSING ERRROR !!!!!
				{name: 'AZaqSpringChemistry', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/AZaqSpringChemistry/MapServer/WFSServer'},
				{name: 'AZaqWellChemistry', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/AZaqWellChemistry/MapServer/WFSServer'},
				{name: 'AZBoreholeTemperatures', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/AZBoreholeTemperatures/MapServer/WFSServer'},
				{name: 'AZDrillStemTests', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/AZDrillStemTests/MapServer/WFSServer'},
				{name: 'AZThermalSprings', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/AZThermalSprings/MapServer/WFSServer'},
				{name: 'AZVolcanicVents', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/AZVolcanicVents/MapServer/WFSServer'},
				{name: 'AZWellHeaders', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/AZWellHeaders/MapServer/WFSServer'},
				{name: 'AZWellLogs', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/AZWellLogs/MapServer/WFSServer'},
				{name: 'AZCaActiveFaults', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/CaActiveFaults/MapServer/WFSServer'},
				{name: 'CAaqSpringChemistry', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/CAaqSpringChemistry/MapServer/WFSServer'},
				{name: 'CAaqWellChemistry', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/CAaqWellChemistry/MapServer/WFSServer'},
				{name: 'CABoreholeTemperatures', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/CABoreholeTemperatures/MapServer/WFSServer'},
				{name: 'CAGeothermalAreas', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/CAGeothermalAreas/MapServer/WFSServer'},
				{name: 'CaThermalSprings', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/CaThermalSprings/MapServer/WFSServer'},
				{name: 'CAVolcanicVents', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/CAVolcanicVents/MapServer/WFSServer'},
				{name: 'CAWellHeaders', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/CAWellHeaders/MapServer/WFSServer'},
				{name: 'COaqSpringChemistry', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/COaqSpringChemistry/MapServer/WFSServer'},
				{name: 'COBoreholeTemperatures', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/COBoreholeTemperatures/MapServer/WFSServer'},
				{name: 'COThermalSprings', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/COThermalSprings/MapServer/WFSServer'},
				{name: 'FLBoreholeTemperatures', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/FLBoreholeTemperatures/MapServer/WFSServer'},
				{name: 'IDWellheaders', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/IDWellheaders/MapServer/WFSServer'},
				{name: 'NEBoreholeTemperatures', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/NEBoreholeTemperatures/MapServer/WFSServer'},
				{name: 'OKBoreholeLithIntervals', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/OKBoreholeLithIntervals/MapServer/WFSServer'},
				{name: 'OKBoreholeTemperatures', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/OKBoreholeTemperatures/MapServer/WFSServer'},
				{name: 'ORBoreholeTemperatures', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/ORBoreholeTemperatures/MapServer/WFSServer'},
				{name: 'ORThermalSprings', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/ORThermalSprings/MapServer/WFSServer'},
				{name: 'ORWellHeaders', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/ORWellHeaders/MapServer/WFSServer'},
				{name: 'TXBoreholeTemperatures', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/TXBoreholeTemperatures/MapServer/WFSServer'},
				{name: 'TXWellHeaders', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/TXWellHeaders/MapServer/WFSServer'},
				{name: 'UTActiveFaults', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/UTActiveFaults/MapServer/WFSServer'},
				{name: 'UTaqSpringChemistry', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/UTaqSpringChemistry/MapServer/WFSServer'},
				{name: 'UTBoreholeTemperatures', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/UTBoreholeTemperatures/MapServer/WFSServer'},
				{name: 'UTDrillStemTests', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/UTDrillStemTests/MapServer/WFSServer'},
				{name: 'UTThermalSprings', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/UTThermalSprings/MapServer/WFSServer'},
				{name: 'UTVolcanicVents', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/UTVolcanicVents/MapServer/WFSServer'},
				{name: 'WABoreholeLithIntervals', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/WABoreholeLithIntervals/MapServer/WFSServer'},
				{name: 'WAGeothermalAreas', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/WAGeothermalAreas/MapServer/WFSServer'},
				{name: 'WAWellLogs', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/WAWellLogs/MapServer/WFSServer'},
				{name: 'WYThermalSprings', value: 'http://services.azgs.az.gov/arcgis/services/aasggeothermal/WYThermalSprings/MapServer/WFSServer'}
			]
		}),
		listeners: {
			'select': function(combo, record){
				//console.log(record.data.name);
				GetCapabilities(this.getValue());
			}
		}
	}]);
	
	// Create a button to open the Base Url input box
	dataServicesToolbar.push([{
		text: "Url",
	    //icon: '../lib/ext-3.4.0/examples/menu/list-items.gif',
        cls: 'x-btn-icon',
        tooltip: 'Enter a base url.',
		menu: new Ext.menu.Menu({
			items: [{
				text: 'Enter a base url, e.g. http://services.azgs.az.gov/arcgis/services/aasggeothermal/CAaqSpringChemistry/MapServer/WFSServer'
			},{
				xtype:'textfield',
				fieldLabel: 'Base Url',
				name: 'baseUrl',
				width: 650,
				listeners: {
					'specialkey': function(elem,evnt){
						// If the 'Enter' key is pressed get the layers for the url
						if(evnt.getKey() == 13)	{
							GetCapabilities(elem.el.dom.value);
						}
					}
				}
			}]
		})
	}]);
	
	return dataServicesToolbar;
}

// Create the statusbar for displaying Ready or Loading & the Remove Layer button
function CreateStatusbar(){
	return new Ext.ux.StatusBar({
		id: 'basic-statusbar',
		text: 'Ready',
		iconCls: 'x-status-valid',
		items: [{
			text: 'Remove Layer',
			tooltip: 'Remove highlighted layer from layers list.',
			handler: function (){
				RemoveLayer();
			}
		}]
	})
}

// Remove a layer from the layer list
function RemoveLayer() {
	//console.log(checkedLayers.length+" layers before remove");
	
	// If a layer (activeLayer) has been selected remove it
	if (activeLayer != undefined) {
		
		// If the layer being removed is checked
		if (IsIn(checkedLayers, activeLayer) == true) {
			//console.log(checkedFeatures);
			
			// Remove activeLayer from checkedLayers array
			checkedLayers.splice(checkedLayers.indexOf(activeLayer), 1);
			ToggleLegend();
			
			// Remove features in activeLayer from checkedFeatures array
			for (var i=0; i < checkedFeatures.length; i++) {
				if (checkedFeatures[i].layer.name == activeLayer.name) {
					checkedFeatures.splice(i, 1);
					i--;
				}
			}
		}
		//console.log(checkedLayers.length+" layers after remove");
		//console.log(checkedFeatures);
		
		// Remove features in activeLayer from selFeatures array
		for (var i=0; i < selFeatures.length; i++) {
			if (selFeatures[i].layer.name == activeLayer.name) {
				selFeatures.splice(i, 1);
				i--;
			}
		}		
		
		// Remove all features from activeLayer
		activeLayer.removeAllFeatures();
		
		//activeLayer.destroy();
		// Remove activeLayer
		map.removeLayer(activeLayer, false);
		
		// activeLayer is now undefined
		activeLayer = undefined;
		
		ResetLayersExtent();
		ZoomToLayersExtent();
	}
	else {
		// If the basemaps are the only layers
		if (map.getNumLayers() == 3)
			alert("Add a layer first.");
		else
			alert("Select a layer to remove.");
	}
}

// Set cursor to wait and statusbar to loading
function Busy() {
	document.body.style.cursor = 'wait';
	var sb = Ext.getCmp('basic-statusbar');
	sb.showBusy();
}

// Set cursor to default and statusbar to ready
function Ready() {
	document.body.style.cursor = 'default';
	var sb = Ext.getCmp('basic-statusbar');
	sb.setStatus({
		text: 'Ready',
		iconCls: 'x-status-valid'
	});
}