console.log("starting app.js");

const yargs = require ('yargs')
const notes = require ('./notes.js')

//console.log(process.argv);
var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if(command === "add" ){
    console.log('adding note');
    notes.addingNote(title, body);
} else if (command === "remove"){
    console.log("removing note");
    notes.removeNote(title);
}else if (command === "read"){
    console.log("reading  note");
    notes.readNote(title);
}else if (command === "list"){
    console.log("listing all notes");
    notes.list();
}else {
    console.log("unknown command was used !");
}
//console.log(title, body, command);

//console.log(yargs.argv);