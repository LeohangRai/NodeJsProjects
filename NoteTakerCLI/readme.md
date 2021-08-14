# CLI Terminal based Note taking app

## About the app
This app makes use of the npm "yargs" module to create custom CLI terminal commands for adding, removing, listing and reading notes from/into a json file.
The name of the json file will be "notes.json"
The file handling is done using the core "fs" module.
The console log styling is done using npm "chalk" module.

## Installation
run "npm install" to install the necessary dependencies.

## How to use the commands:
1. add <br>
$ node app add --title='title of your note'  --body=='body of the note' <br>
Required arguments: title, body <br> <br>

2. remove <br>
$ node app remove --title='title of the note to be removed' <br>
Required arguments: title <br><br>

3. list <br>
$ node app list <br>
Required arguments: None <br><br>

4. read <br>
$ node app read --title='title of the note to read' <br>
Required arguments: None <br><br>

