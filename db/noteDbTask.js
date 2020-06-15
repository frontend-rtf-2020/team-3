const objectId = require("mongodb").ObjectID;

class Task {
    constructor(id, name, description, owner, tags) {
        this.id = id; //objectId
        this.name = name; // string
        this.description = description; // string
        this.owner = owner; // objectId
        this.tags = tags; // array
    }
}

// Теги

function AddTask(tablesCollection, tableId, columnNumber, name, description) {
    const tableObjId = new objectId(tableId);

    const task = {
        name: name,
        description: description,
        owner: undefined,
        tags: []
    }

    tablesCollection.findOne({_id: tableObjId}, function (err, table) {
        if(err) console.log(err);

        const columns = table.columns;
        columns[columnNumber].tasks.push(task);

        tablesCollection.updateOne({_id: tableObjId}, {$set : {columns: columns}}, function (err, obj) {
            if(err) console.log(err);
        });
    });
}

function SetTuskOwner(tablesCollection, tableId, columnNumber, tuskNumber, ownerId) {
    const tableObjId = new objectId(tableId);

    tablesCollection.findOne({_id: tableObjId}, function (err, table) {
        if(err) console.log(err);

        const columns = table.columns;
        columns[columnNumber].tasks[tuskNumber].owner = new objectId(ownerId);

        tablesCollection.updateOne({_id: tableObjId}, {$set : {columns: columns}}, function (err, obj) {
            if(err) console.log(err);
        });
    });
}

function RenameTask(tablesCollection, tableId, columnNumber, tuskNumber, newName) {
    const tableObjId = new objectId(tableId);

    tablesCollection.findOne({_id: tableObjId}, function (err, table) {
        if(err) console.log(err);

        const columns = table.columns;
        columns[columnNumber].tasks[tuskNumber].name = newName;

        tablesCollection.updateOne({_id: tableObjId}, {$set : {columns: columns}}, function (err, obj) {
            if(err) console.log(err);
        });
    });
}

function ChangeDescriptionTask(tablesCollection, tableId, columnNumber, tuskNumber, newDescription) {
    const tableObjId = new objectId(tableId);

    tablesCollection.findOne({_id: tableObjId}, function (err, table) {
        if(err) console.log(err);

        const columns = table.columns;
        columns[columnNumber].tasks[tuskNumber].description = newDescription;

        tablesCollection.updateOne({_id: tableObjId}, {$set : {columns: columns}}, function (err, obj) {
            if(err) console.log(err);
        });
    });
}

function DeleteTask(tablesCollection, tableId, columnNumber, tuskNumber) {
    const tableObjId = new objectId(tableId);

    tablesCollection.findOne({_id: tableObjId}, function (err, table) {
        if(err) console.log(err);

        const columns = table.columns;
        columns[columnNumber].tasks.splice(tuskNumber, 1);

        tablesCollection.updateOne({_id: tableObjId}, {$set : {columns: columns}}, function (err, obj) {
            if(err) console.log(err);
        });
    });
}