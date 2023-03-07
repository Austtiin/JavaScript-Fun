

var Confirm = document.getElementById("Cal")
var slider = document.getElementById("range");
var output = document.getElementById("rangeValue");
output.innerHTML = slider.value;
var i;




slider.oninput = function() {
  output.innerHTML = this.value;
  pass = this.value;
}

function Count2()
{
    var slider = document.getElementById("range");
    var output = document.getElementById("rangeValue");
    for (let i = 0; i < slider.output; i++)
    {
    document.getElementById("CalButton").innerHTML += "Count is: " + i + "" +"<br>";
    }
    
}


function ODDEVEN(i)
{

    var x = "";

    switch (i) {
        case 1:
            x  = "ODD";
            break;

        case  2:
            x  = "Even";
            break;

        case 3:
            x  = "ODD";
                break;
    
        case  4:
            x  = "Even";
            break;
    
        case 5:
            x  = "ODD";
            break;
    
        case  6:
            x  = "Even";
            break;
        case 7:
            x  = "ODD";
            break;
        
        case  8:
            x  = "Even";
             break;
        
        case 9:
            x  = "ODD";
            break;
        
        case  10:
            x  = "Even";
            break;
        default:
            break;
    }
    return x;
}


function Count()
{
    for (let i = 0; i < 11; i++)
    {
    document.getElementById("CountButton").innerHTML += "Count is: " + i + "" + ODDEVEN(i) +"<br>";
    }
    
}


function DisplayButton()
{
    const Names = ["Accounting", "Algebra", "Programming", "Art", "Data Anylytics"]

 Names.forEach(element => {
    document.getElementById("DisplayButton").innerHTML += "<br>" + "Word is: " + element + "," +  +"<br>";
 });
}





