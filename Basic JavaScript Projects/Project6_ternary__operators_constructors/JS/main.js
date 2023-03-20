function Voters_ageFunction() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are allowed";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote!";
}


                //constructor function 
function Member(Name, Age) {
    this.Member_Name = Name;
    this.Member_Age = Age;
}
var person1 = new Member("Jason", 7)
//the function to display the results of constructor
function Addperson() {
    document.getElementById("New_and_This").innerHTML= 
    "The new person's name and age is " + person1.Member_Name + " /" + person1.Member_Age + "years old.";
}

        //Nested function
function GetAgentName () {
    var Agentname = "Bond! James Bond!";

    function Begining_Function () {
        Fullsentence =  "My name is " + Agentname;
        document.getElementById("Nested_Function").innerHTML = Fullsentence;
}
Begining_Function()

}

