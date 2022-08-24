var x;
x=25;
document.write("x="+x);

var y = 40;
document.write("     &nbsp; &nbsp; y="+y);

let dob = "12/03/1983";

let notNumber = "78";

document.write("   dob = "+dob);
document.write("   notNumber = "+notNumber);

document.write( "  "+typeof(x));
document.write( "  "+typeof(y));
document.write( "  "+typeof(dob));
document.write( "  "+typeof(notNumber)+" &nbsp; &nbsp;");

x=90;
y=75;

dob = 20;
notNumber= 'z';

a=75;
b=false;
c='e';
d="Name";

var employee = new Object();
employee.id = 101;
employee.fname = "Bob";
employee.lname = "Builder";
employee.gender = "Male";

for(let x in employee){
    document.write(employee[x]+" ");
}