({

    handleClickMe : function(component, event) {
        
		var attLabelValue = component.get("v.lblHello");
		var attInputValue = component.get("v.inpName");

        if(attInputValue == null || attInputValue == ''){
            component.set("v.lblHello", 'Hello ...');
        }
        else{ 
            component.set("v.lblHello", 'Hello ' + attInputValue);
        } 
	}

})