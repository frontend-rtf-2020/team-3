const objectId = require("mongodb").ObjectID;

function GetUsers(usersCollection) {
    usersCollection.find({}).toArray(function(err, docs){
        if(err) return console.log(err);
        return docs;
    });
}

function GetUser(usersCollection, userId) {
    const id = new objectId(userId);
    usersCollection.findOne({_id: id}, function(err, user){

        if(err) return console.log(err);
        return user;
    });
}

function GetUserTables(usersCollection, tablesCollection, userId) {
    const id = new objectId(userId);
    usersCollection.findOne({_id: id}, function(err, user){

        if(err) return console.log(err);

        const tables = [];
        user.tables.forEach(table => {
            const tableId = new objectId(table);
            tablesCollection.findOne({_id:tableId}, function (err, table) {
                if(err) return console.log(err);
                tables.push(table);
            })
        });
        return tables;
    });
}