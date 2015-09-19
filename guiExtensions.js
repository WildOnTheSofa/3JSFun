initializeExtension(gui){

	gui.getController = function(gui, object, property)
	{
		for (var i = 0; i < gui.__controllers.length; i++)
		{
			var controller = gui.__controllers[i];
			if (controller.object == object && controller.property == property)
				return controller;
		}
	return null;
	}


	gui.disable = function(gui, object, property){
		getController(gui, object, property).domElement.setAttribute("disabledGUI " + object + " " + property, "");
	}

	gui.enable = function(gui, object, property){
		getController(gui, object, property).domElement.removeAttribute("disabledGUI " + object + " " + property);
	}

	gui.enabled = function(gui, object, property){
		if(getController(gui, object, property).domElement.hasAttribute("disabledGUI " + object + " " + property)){
			return false;
		}
		return true;
	}
}
window.onload = initializeExtension; 
