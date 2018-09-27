var umbrella = '';

umbrella = {
    color = red,
    height = 6,
    isOpen = false,
    open = function umbrella (son) {
        if (umbrella.isOpen === true) {
            return "yeah this umbrella is definitely open for business";
        }
        else  {
           umbrella.isOpen = true;
             return "yo brother this umbrella is already open my guy!";
         }
    }
    
}


