const fs = require('fs')
const chalk = require('chalk')

//Defining the loadNotes funciton because we have to load the json files data multiple times, frequently
const loadNotes = function () {
    //if the json file already has some data
    //load the data
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataString = dataBuffer.toString()
        const notes = JSON.parse(dataString)
        return notes
    }
    //if there is no data inside the json file
    //just return a new JSON array to store objects
    catch (e) {
        return []
    }
}

//Defining the saveNotes functon because we have to save new data (which will overwrite previous data) into our json file
const saveNotes = function (newJsonData) {
    //The newJsonData arg passed into this function will be in json object format
    //So we have to first stringify it before writing it into the file using fs.writeFileSync()
    const dataString = JSON.stringify(newJsonData);
    fs.writeFileSync('notes.json', dataString)
}


//Function for adding notes
const addNote = function (title, body) {
    //fetching the data of our notes.json file using the loadNotes() function we created above
    //This will either load the array of note objects or just an empty array in case there is no note in the notes.json file
    const notes = loadNotes();

    //Checking if the note title is already taken
    const duplicateNotes = notes.filter((note) => note.title == title)
    if (duplicateNotes.length === 0) {
        //notes is a json arrray, so we can push a new note object into it as
        notes.push({ title: title, body: body })
        //now save the new/modified json data into our notes.json file using the saveNotes() function we created above
        saveNotes(notes);
        console.log(chalk.green`Saving the note:` + `\nTitle: ${title}\nBody: ${body}`)
    }
    else {
        console.log(chalk.red("Sorry, the title is already taken!"))
    }
}


//Function for removing notes
function removeNote(title) {
    const notes = loadNotes();
    const noteToDelete = notes.find((note) => note.title == title)
    if (noteToDelete !== undefined) {
        notes.splice(notes.indexOf(noteToDelete), 1)
        saveNotes(notes);
        console.log(chalk.green`Removed the note with the title: ${JSON.stringify(noteToDelete.title)}`)
    }
    else {
        console.log(chalk.red('There is no note with the specified title.'))
    }
}


//Function to list the notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes are:"))
    notes.forEach(note => {
        console.log(note.title)
    });
}


//Function to read notes
const readNote = (title) => {
    const notes = loadNotes()

    //Find the note with the given title from the notes array
    //If the note with given title doesn't exist, the arr.find() method will return 'undefined'
    const reqNote = notes.find((note) => note.title === title)

    //if the notes.find() method does not return 'undefined'
    if (reqNote) {
        console.log(chalk.green`${reqNote.title}`)
        console.log(`${reqNote.body}`)
    }
    else {
        console.log(chalk.red(`There is no note with the title "${title}"`))
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}