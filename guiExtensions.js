function initializeExtension(gui){

	gui.getController = function(object, property)
	{
		for (var i = 0; i < gui.__controllers.length; i++)
		{
			var controller = gui.__controllers[i];
			if (controller.object == object && controller.property == property)
				return controller;
		}
	return null;
	}

	gui.setColor = function(object, property, color){
		getController(object, property).color.setColor(color);
	}


	gui.disable = function(object, property){
		getController(gui, object, property).domElement.setAttribute("disabledGUI " + object + " " + property, "");
	}

	gui.enable = function(object, property){
		getController(gui, object, property).domElement.removeAttribute("disabledGUI " + object + " " + property);
	}

	gui.enabled = function(object, property){
		if(getController(gui, object, property).domElement.hasAttribute("disabledGUI " + object + " " + property)){
			return false;
		}
		return true;
	}
}
window.onload = initializeExtension;
