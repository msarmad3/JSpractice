var i = 0;
while(i<11){
    console.log("whileloop :"+i);
    i++;
}
var n = 0;
do{
    console.log("Dowhileloop :"+n)
    n++;
}while(n<11);

var j = 0;
for(j; j<11; j++){
    console.log("Forloop :"+j);
}

var person = {
    firstName: 'Sarmad',
    lastName: 'Khan',
    age: 25
};

for(var prop in person) {
    console.log(prop + ':' + person[prop]);
}

for(var x of person.firstName){
    console.log(x);
}