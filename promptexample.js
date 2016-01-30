// var prompt = require('prompt');
// prompt.start();


// prompt.get(['year','month','day'], function(err, result) {
//   console.log("The date you entered is " + result.month + "/" + result.day + "/" + result.year );
// });

var prompt = require('prompt');
prompt.start();

prompt.get(['first_name', 'last_name', 'age', 'time_of_siting'], function(err, result) {
    
    var report = `FBI aliens sighting report:

    Eye witness name is ${result.first_name} ${result.last_name} at age: ${result.age}
    According to eye witness sighting happened sometime around ${result.time_of_siting} near Burbank
    Another possible witness includes a person by the name of Alice
    The sighting is described as: Some monster thingy and the witness's initial thoughts are: WOAH MAN!
    This is the witness's 11th encounter

    Report conclusion: Complete`;

    console.log(report);
});