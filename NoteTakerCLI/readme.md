# CLI Terminal based Note taking app

## About the app
This app makes use of the npm "yargs" module to create custom CLI terminal commands for adding, removing, listing and reading notes from/into a json file.
The name of the json file will be "notes.json"
The file handling is done using the core "fs" module.
The console log styling is done using npm "chalk" module.

## Installation
run "npm install" to install the necessary dependencies.

## How to use the commands:
1. add
$ node app add --title='title of your note'  --body=='body of the note'
Required arguments: title, body

2. remove
$ node app remove --title='title of the note to be removed'
Required arguments: title

3. list
$ node app list
Required arguments: None

4. read
$ node app read --title='title of the note to read'
Required arguments: None

