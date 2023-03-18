function new_Dictionary() {             
    var Airplane = {
        Era:"WWII",                             //assigning values to keys
        Type:"Fighter",                         //assigning values to keys
        MaxSpeed:"400 kph",                     //assigning values to keys
        ServiceSeiling:"20 km"                  //assigning values to keys
    };
    delete Airplane.ServiceCeiling                //removes SeviceCeiling KVP from dictionary before  gets displayed                        
    document.getElementById("Dictionary").innerHTML = Airplane.ServiceCeiling; //fidplayes chosen KVP     

}
