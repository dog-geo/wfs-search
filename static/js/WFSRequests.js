// WFS requests made to the server

// Requst the GetCapabilities XML from the server to determine available layers
function GetCapabilities(baseUrl){
	
	// If the select box toggle is pressed, undepress it
	if (selectBox == true) {
		var sb = Ext.getCmp('select_box');
		sb.toggle(false);
	}
	
	// Get the WFS Capabilities from the server
	try{
		Busy();
		OpenLayers.Request.GET({
			url: baseUrl+'?SERVICE=WFS&version=1.1.0&REQUEST=GetCapabilities&namespace=wfs',
			async: false,
			callback: function(resp){
				Ready();
				// Response OK
				if (resp.status == 200) {
					// Format the response as WFS Capabilities
					var CapFormat = new OpenLayers.Format.WFSCapabilities();
					var cap = CapFormat.read(resp.responseText);
					//console.log(cap)
					if (cap.error.success != undefined) {
						if (cap.error.success == false)
							alert("There was a problem with the url.");
					}
					else {	
						// Get the feature layers
						GetLayers(cap, baseUrl)
					}
					
					//console.log(wfsLayers);
				}
				else if (resp.status == 404){
					alert("Requested resource not available. Try again later.")
				}
				else{
					alert("Invalid url.");
				}
			}
		})
	}
	catch (e){
		Ready();
	}	
}

// Get the feature layers for the selected data service
function GetLayers(cap, baseUrl){
	// Get the titile of the data service
	var dataServiceTitle = cap.serviceIdentification.title;
	
	// Check if there are any feature types in the data service
	if (cap.featureTypeList.featureTypes.length == 0)
		alert("There are no feature types in '" + dataServiceTitle + "'.");

	else{		
		// Get each feature layer listed in the capabilities
		for (var i = 0; i < cap.featureTypeList.featureTypes.length; i++) {
			var featureName = cap.featureTypeList.featureTypes[i].name;
			var featureNS = cap.featureTypeList.featureTypes[i].featureNS;
			
			hits = undefined;
			// Get the number of features in the layer
			GetHits(baseUrl, featureName);
		
			var r = true;
			if (hits > 2500)
				r = confirm("There are "+hits+" "+featureName+" features. They make take awhile to draw. Hit cancel, zoom to a smaller area, then turn on the set extent toggle on the toolbar. Draw anyway?");
			if (hits == 0){
				if (bounds != undefined)
					alert("There were 0 "+featureName+"s features returned. Try changing the set extent.");
				else
					alert("There were 0 "+featureName+"s features returned. There may be a problem with the server.");
				r = false;
			}

			if (r == true) {
				// Create the server request for the layer
				wfsLayers[l] = new OpenLayers.Layer.Vector(featureName+" ("+dataServiceTitle+")", {
					strategies: [new OpenLayers.Strategy.Fixed()],
					protocol: new OpenLayers.Protocol.WFS({
						//version: "1.1.0",                            //  !!!!!!!!!!!!!! Features aren't drawn if use 1.1.0 !!!!!!!!!!!!!!!!!!
						url: baseUrl,
						featureType: featureName,
						featureNS: featureNS,
						geometryName: "shape"
					}),
					styleMap: SetStyle(),
					visibility: false
				});
				//console.log(bounds);
				if (bounds != undefined) {
					bboxFilter = new OpenLayers.Filter.Spatial({
						type: OpenLayers.Filter.Spatial.BBOX,
						value: bounds
					});
					wfsLayers[l].filter = bboxFilter;
				}
			
				map.addLayer(wfsLayers[l]);
				MakeSelectable();
				//console.log(map);
				
				// Set the number of features as the title in the legend
				wfsLayers[l].events.register("featureadded", wfsLayers[l], function (e) {
					e.object.styleMap.styles.default.rules[0].title = e.object.features.length.toString() + " features";
				});
				
				// Set the cursor to busy while the layer is loading
				wfsLayers[l].events.register("loadstart", wfsLayers[l], function (e) {
					Busy();
				});
				
				// Set the cursor back to the default after layer has been loaded
				wfsLayers[l].events.register("loadend", wfsLayers[l], function (e) {
					Ready();
					//console.log(e);
					if ((e.object == undefined) || (e.object.features.length == 0)) {
						alert(featureName+" wasn't loaded correctly. There maybe a problem with the server.");
						//map.removeLayer(e.object);
						//activeLayer = undefined;
						//l--;
						//console.log(wfsLayers);
					}
				});
				
				l++;
			}
			else
				GetSubregion(cap.featureTypeList.featureTypes[i]);
		}
	}	
}

// Request the number of hits (number of features) from the server
function GetHits(baseUrl, featureName){
	// If bounds have not been set with the set extent toggle, find the number of hits without limiting by bounds,
	// but if bounds have been set then find the number of hits within the bounds
	if (bounds == undefined)
		var hitsUrl = baseUrl + "?service=wfs&version=1.1.0&request=GetFeature&typeName="+featureName+"&resultType=hits";
	else
		var hitsUrl = baseUrl + "?service=wfs&version=1.1.0&request=GetFeature&typeName="+featureName+"&resultType=hits&BBOX="+bounds.left+","+bounds.bottom+","+bounds.right+","+bounds.top;
	
	try {
		OpenLayers.Request.GET({
			url: hitsUrl,
			async: false,
			callback: function(resp) {
				// Response OK
				if (resp.status == 200) {				
					//console.log(resp);
					if (resp.responseXML != null) {
						var xmlHits = resp.responseXML.documentElement;
						hits = xmlHits.attributes.getNamedItem("numberOfFeatures").nodeValue;
					}
				}
				else if (resp.status == 404){
					alert("Requested resource not available. Try again later.")
				}
				else{
					alert("Invalid url.");
				}
			}
		});
	}
	catch (e) {
		alert("Problem determining the number of hits");
	}
}

// Call DescribeFeatureType to get list of attributes for the active layer
function GetAttributes(protocol){
	var baseUrl = protocol.url;
	OpenLayers.Request.GET({
		url: baseUrl+'?SERVICE=WFS&version=1.1.0&REQUEST=DescribeFeatureType&namespace=wfs'+'&typeName='+protocol.featureType,
		async: false,
		success: function(resp) {
			// Format the response as WFS Capabilities
			var DesFormat = new OpenLayers.Format.WFSDescribeFeatureType();
			var des = DesFormat.read(resp.responseText);
			
			// Get the number of attributes and the attributes themselves
			layerAttributes = des.featureTypes[0].properties;
		}
	});
}

function GetSubregion(featureType) {	
	// Get the bounds for the feature
	var featBounds =  new OpenLayers.Bounds(featureType.bounds.left, featureType.bounds.bottom, featureType.bounds.right, featureType.bounds.top);

	// Transform then zoom to the bounds
	map.zoomToExtent(featBounds.transform(wgs84, googleMercator));
}