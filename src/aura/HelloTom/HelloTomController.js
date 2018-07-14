({

    handleClickMe : function(component, event) {
        
		var attLabelValue = component.get("v.lblHello");
		var attInputValue = component.get("v.inpName");

//        alert("attLabelValue: " + attLabelValue);
//        alert("attInputValue: " + attInputValue);
        
        if(attInputValue == null || attInputValue == ''){
//            alert("EMPTY: The input text is empty!");
            component.set("v.lblHello", 'Hello ...');
        }
        else{ 
//            alert("VALUE: " + "Hello " + attInputValue);
            component.set("v.lblHello", 'Hello ' + attInputValue);
        } 
	}

})
