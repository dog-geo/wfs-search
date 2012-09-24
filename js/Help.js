// Items in the drop-down help menu on the Map Panel Toolbar

// Help Menu Item - Help using this application
function HelpUsingApp(){
	new Ext.Window({
		title: 'Using the Application',
		layout: 'fit',
		closable: true,
		closeAction: 'hide',
		maximizable: true,
		width: 500,
		height: 500,
		items: [{
			xtype: 'panel',
			autoScroll: true,
			html: '<html> <b>NGDS Data-Getter</b><br><br> This program searches catalogs for features based on a keyword and/or defined map extent. It then displays the features on a map, allows for the selection of features, and can create a table of selected features.<br><br>  This program contains the following parts:<br> 1. The Catalog Search<br> 2. The Data Service Toolbar<br> 3. The Layer Tree<br> 4. The Map Panel Toolbar<br> 5. The Map Panel<br> 6. The Legend<br><br>  <b>1. The Catalog Search</b><br> The Catalog Search allows for the search of several prominent catalogs for features which can be mapped and queried. Select the catalog and type of search to be performed from the drop-down menus. Check or uncheck the box depending on whether or not the search should only look for data services containing features within the current map extent. Mouseover an item in the resulting list to see a pop-up with more information about the data service. To add the layer(s) from that data service, click on the data service and then click the Add Layer button below the list. <br><br>  <b>2. The Data Service Toolbar</b><br> The Data Service Toolbar allows for the selection of data services to retrieve. There are two options for specifying the location of a desired data service.<br> 1. The Quick-Pick Data Service Drop-down Menu - Select a data service from the drop-down menu and its layers will be added to the layer tree.<br> 2. Base Url Input - Click the button to the right of the data service drop-down menu. Input a base url as in the example. Press enter. Layers will be added to the tree.<br><br>  <b>3. The Layer Tree</b><br> The Layer Tree lists the layers that available to be show in the map. Check the box next to the layer name to retrieve the layer and make it visible. Uncheck the box to hide the layer. Drag and drop the layer names to change the order of the layers. Click on the name of a layer to highlight the layer in blue and set that layer as the active layer. The Layer Tree panel can be expanded or collapsed by clicking on the arrows. Remove a layer by selecting a layer to make it the active layer and then clicking the Remove Layer button at the bottom of the layer tree panel. Also at the bottom is a status bar which indicates if a layer is currently loading. <br><br>  <b>4. The Map Panel Toolbar</b><br> The Map Panel Toolbar provides additonal functionality for the the Map Panel. It has the following capabilities:<br> <b>max extent</b>: Zoom to the max extent of the baselayer.<br> <b>zoom layer</b>: Zoom to the extent of the active layer.<br> <b>previous/next</b>: Navigate through the history of map views.<br> <b>set extent</b>: Depress to set the working extent of the map to the current view. Any new data services selected will only retrieve features within that extent.<br> <b>select box</b>: Draw a box to select multiple features. <br> <b>clear selected</b>: Unselect all selected features.<br> <b>show popups</b>: When depressed, clicking on a feature will bring up a popup with information about that feature. Close the popup window by clicking the feature again or by clicking the x in the corner of the popup window. Close all open popups by undepressing the show popups toggle button.<br> <b>measure</b>: Click on the map to start a distance measurement. Double-click to finish the measurment and get a popup with the distance.<br> <b>create table</b>: Create a table in another browser window containing the data for the selected features in the checked layer(s).<br><br>  <b>5. The Map Panel</b><br> The Map Panel displays the locations of the features in the checked layer(s). The Map Panel has the following capabilities:<br> <b>Adjust Zoom</b>: Use the slider in the top left corner of the map or double-click on an area to zoom in. Alternatively, hold down the Shift key and draw a box to zoom in.<br> <b>Pan</b>: Click on the up/down, left/right buttons in the top left corner. Alternatively, as long as the select box button is not depressed, click the map and drag.<br> <b>Select Feature(s)</b>: Click on a feature to select it. It will turn yellow. Alternatively, depress the select box button on the toolbar to select multiple features by drawing a box.<br> <b>Unselect Feature(s)</b>: Click on a feature to unselect it. Alternatively, click on the clear selected button in the toolbar to unslected all features.<br><br>  <b>6. The Legend</b><br> The legend is in a collapsible panel to the right of the map. Expand or collapse the legend by clicking on the arrows.'
			}
		]
	}).show();	
}

// Help Menu Item - Report Bugs/Request Features 
/*function helpBugsFeatures(){
	new Ext.Window({
		title: 'Report Bugs/ Request Features',
		layout: 'fit',
		closable: true,
		closeAction: 'hide',
		maximizable: true,
		width: 500,
		height: 500,
		items: [{
			xtype: 'panel',
			autoScroll: true,
			html: '<b> Future Features </b> <br> 1. Integration with Catalog Services <br> 2. Advanced Layer Tree <br><br>  <br><br> Report a bug or request a feature:<br> <a href="mailto:jalisdairi@gmail.com?subject=WFSClient">Send Email</a>'
			}
		]
	}).show();	
}*/

// Help Menu Item - About this application
function HelpAbout(){
	new Ext.Window({
		title: 'About this Application',
		layout: 'fit',
		closable: true,
		closeAction: 'hide',
		maximizable: true,
		width: 500,
		height: 500,
		items: [{
			xtype: 'panel',
			autoScroll: true,
			html: 'Version 1.0 (September 2012) Updates:<br> 1. Added the Catalog Search.<br> 2. Changed the zoom slider.<br> 3. Added a scale.<br> 4. Added an overlay map.<br> 5. Added additional base maps.<br> 6. Added the current cordinates of the mouse pointer to the map.<br> 6. Added the distance measure tool.<br> 7. Added the Remove Layer button.<br> 8. Added the option to set the extent of the map to only retreive features within that extent.<br> 9. Added the ability to make a single table with data from across multiple data services.<br> <br> Version 0.2 (23 August 2012) Updates:<br> 1. Added the ability to zoom to the active layer. <br> 2. Added the select box button to the toolbar so the ability to click and drag the map remains active unless the select box button is depressed. <br> 3. When the show popups button is undepressed all popups are cleared from the map display.<br> <br> Version 0.1 (10 July 2012)<br> Initial Release<br> <br> This program was created by Jessica Good Alisdairi for the Arizona Geological Survey (AZGS), the US Geoscience Information Network (USGIN) and the National Geothermal Data System (NGDS).<br><br>  This program uses OpenLayers, GeoExt and ExtJs.<br> <a href="http://openlayers.org/">OpenLayers</a><br> <a href="http://http://geoext.org/">GeoExt</a><br> <a href="http://dev.sencha.com/deploy/ext-3.4.0/">Ext JS</a><br>  <br><br> Report a bug or request a feature:<br> <a href="mailto:jalisdairi@gmail.com?subject=WFSClient">Send Email</a>'
			}
		]
	}).show();	
}