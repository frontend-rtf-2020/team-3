const objectId = require("mongodb").ObjectID;

class Column {
    constructor(id, name, tasks) {
        this.id = id; //objectId
        this.name = name; //string
        this.tasks = tasks; // array
    }
}

function AddColumn(tablesCollection, tableId, name) {
    const tableObjId = new objectId(tableId);

    const column = {
        name: name,
        tasks: []
    }

    tablesCollection.updateOne({_id: tableObjId}, {$push: {columns: column}}, function (err, obj) {
        if(err) console.log(err);
    });

}

function RenameColumn(tablesCollection, tableId, columnNumber, newName) {
    const tableObjId = new objectId(tableId);

    tablesCollection.findOne({_id: tableObjId}, function (err, table) {
        if(err) console.log(err);

        const columns = table.columns;
        columns[columnNumber].name = newName;
        tablesCollection.updateOne({_id: tableObjId}, {$set: {columns: columns}}, function (err, obj) {
            if(err) console.log(err);
        });
    });
}

function DeleteColumn(tablesCollection, tableId, columnNumber) {
    const tableObjId = new objectId(tableId);

    tablesCollection.findOne({_id: tableObjId}, function (err, table) {
        if(err) console.log(err);

        const columns = table.columns;
        columns.splice(columnNumber,1);
        tablesCollection.updateOne({_id: tableObjId}, {$set: {columns: columns}}, function (err, obj) {
            if(err) console.log(err);
        });
    });
}

function SwapColumns(tablesCollection, tableId, column1, column2) {
    const tableObjId = new objectId(tableId);

    tablesCollection.findOne({_id: tableObjId}, function (err, table) {
        if(err) console.log(err);

        const columns = table.columns;
        const c = columns[column1];
        columns[column1] = columns[column2];
        columns[column2] = c;
        tablesCollection.updateOne({_id: tableObjId}, {$set: {columns: columns}}, function (err, obj) {
            if(err) console.log(err);

        });
    });
}