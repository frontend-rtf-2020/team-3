const objectId = require("mongodb").ObjectID;

class Table  {
    constructor(id, name, owner, users, description, columns) {
        this.id = id; //objectId
        this.owner = owner; //string
        this.name = name; //string
        this.users = users; //array
        this.description = description; //string
        this.columns = columns; //array
    }
}

// Менять местами колонки

function AddTable(usersCollection, tablesCollection, userId, tableName, description) {
    const userObjId = new objectId(userId);

    const table = {
        name: tableName,
        description: description,
        owner: userObjId,
        users: [userObjId],
        columns: []
    };

    let tableId;
    tablesCollection.insertOne(table, function (err, result) {
        if(err) return console.log(err);
        tableId = result.ops[0]._id;
    });

    usersCollection.update({_id: userObjId}, {$push : {tables : tableId}},
        function (err, result) {
            if(err) return console.log(err);
        });
}

function ChangeTableName(tablesCollection, tableId, newName) {
    const tableObjId = new objectId(tableId);
    tablesCollection.update({_id: tableObjId}, {$set : {name : newName}}, function (err, res) {
        if(err) return console.log(err);
    })
}

function ChangeTableDescription(tablesCollection, tableId, newDescription) {
    const tableObjId = new objectId(tableId);
    tablesCollection.update({_id: tableObjId}, {$set : {description : newDescription}}, function (err, res) {
        if(err) return console.log(err);
    })
}

function GetTableUsers(usersCollection, tablesCollection, tableId) {
    const tableObjId = new objectId(tableId);

    const users = [];
    tablesCollection.findOne({_id: tableObjId}, function (err, table) {
        if(err) return console.log(err);
        table.users.forEach( userId => {
            usersCollection.findOne({_id: userId}, function (err, user) {
                users.push(user);
            });
        });
    });
    return users;
}

function AddUserInTable(tablesCollection, tableId, userId) {
    const tableObjId = new objectId(tableId);

    tablesCollection.update({_id: tableObjId}, {$push : {users : new objectId(userId)}},
        function (err, result) {
            if(err) return console.log(err);
        });
}

function GetTable(tablesCollection, tableId) {
    const tableObjId = new objectId(tableId);

    let table;
    tablesCollection.findOne({_id: tableObjId}, function (err, t) {
        if(err) return console.log(err);
        table = t;
    });

    return table;
}

function DeleteTableUser(usersCollection, tablesCollection, userId, tableId) {
    const userObjId = new objectId(userId);
    const tableObjId = new objectId(tableId);

    usersCollection.findOne({_id: userObjId}, function (err, user) {
        if(err) console.log(err);

        const tables = user.tables.filter(x => x.toString() !== tableObjId.toString());

        usersCollection.updateOne({_id: userObjId}, {$set: {tables: tables}},function (err, user) {
            if(err) console.log(err);
        });
    });

    tablesCollection.findOne({_id: tableObjId}, function (err, table) {
        if(err) console.log(err);

        const users = table.users.filter(x => x.toString() !== userObjId.toString());

        tablesCollection.updateOne({_id: tableObjId}, {$set: {users: users}},function (err, table) {
            if(err) console.log(err);
        });
    });
}

function DeleteTable(usersCollection, tablesCollection, tableId){
    const tableObjId = new objectId(tableId);

    tablesCollection.findOne({_id: tableObjId}, function (err, table) {
        if(err) console.log(err);

        table.users.forEach(userId => {
            const  userObjId = new objectId(userId);

            usersCollection.findOne({_id: userObjId}, function (err, user) {
                if(err) console.log(err);

                const tables = user.tables.filter(x => x.toString() !== tableObjId.toString());

                usersCollection.updateOne({_id: userObjId}, {$set: {tables: tables}},function (err, user) {
                    if(err) console.log(err);
                });
            });
        });
    });

    tablesCollection.deleteOne({_id: tableObjId}, function (err, table) {
        if(err) console.log(err);
    });
}


