var funct = (function () {
    // private stuff goes here
    
    return {

        checkSelect: function (selected, ansID, inputID) {

            if (inputID != isNaN) {
                var cw = document.getElementById(inputID).value
                document.getElementById(ansID).value = funct.calculate(selected, cw);     //display the answer
            }
            else {
                document.getElementById(ansID).value = "0 No number inputed";     //display the answer

            }

        },

        processSelect: function (selectID, ansID, inputID) {
         //   var z = selectID.selectID.selectedIndex
            //       var x = document.getElementById(selectID).selectedIndex;

           
            var selected = selectID.value;
            var n = selectID.selectedIndex;
                      
            var cw = document.getElementById(inputID).value
            var ans = 0;
       /*     switch(n)
            {

            // this stuff is commented out so we can use it again somewhere else.
                case 0:
                    //  execute code block 1
                    break;
                case 1:
                    
                    
                    break;
                case 2:
                  //  execute code block 2
                    break;
                default:

                   
                  //  code to be executed if n is different from case 1 and 2
            }

            
            document.getElementById(ansID).value = "";
            switch (selected) {
                case "pk":
                    ans = Converter.convertFromImperialToMetric(cw);
                    break;
                case "kp":

                    ans = Converter.convertFromMetricToImperial(cw);
                    break;
                case "ci":
                    ans = Converter.convertFromCentimetersToInches(cw);
                    break;
                case "ic":
                    ans = Converter.convertFromInchesToCentimeters(cw); 
                    break;
                case "mk":
                    ans = Converter.convertFromMilesToKilometers(cw);
                    break;
                case "km":
                    ans = Converter.convertFromKilometersToMiles(cw);
                    break;
                    
                default:

                    ans = "Error No Concersion";

                    //  code to be executed if n is different from case 1 and 2
            } */

            document.getElementById(ansID).value = funct.calculate(selected,cw);     //display the answer

      //      alert("In here !!!!!" + selectID.value + "    ") ;

     //       var y = document.getElementById(selectID).options;
     //       alert("Index: " + y[x].index + " is " + y[x].text);

        },

        calculate1: function (selected,cw) {


           
            switch (selected) {
                case "pk":
                    return Converter.convertFromImperialToMetric(cw);
                    break;
                case "kp":

                    return Converter.convertFromMetricToImperial(cw);
                    break;
                case "ci":
                    return Converter.convertFromCentimetersToInches(cw);
                    break;
                case "ic":
                    return Converter.convertFromInchesToCentimeters(cw);
                    break;
                case "mk":
                    return Converter.convertFromMilesToKilometers(cw);
                    break;
                case "km":
                    return Converter.convertFromKilometersToMiles(cw);
                    break;

                default:

                    return "Error ! No Conversion";

                    //  code to be executed if n is different from case 1 and 2
            }


            
        },

        removePnl: function (pnlID, changepnl,imageName) {
      
            document.getElementById(changepnl).src = imageName;
            document.getElementById(pnlID).style.visibility = 'hidden';
           


        }


    }


})();