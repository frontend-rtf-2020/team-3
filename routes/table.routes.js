const { Router } = require("express");
const User = require("../models/User");
const Table = require("../models/Table")
const { check, validationResult } = require("express-validator");
const router = Router();

// /api/table
router.get(
    "/table",
    [
        // !
        !check("id", "Empty id").isEmpty()
    ]
),
    async (req, res) =>{
        try {
            console.log(req.body);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Bad data",
                });
            }
            const { id } = req.body;

            const table = await Table.findOne({ _id: id });
            if (!table) {
                return res.status(400).json({ message: "This table not exist" });
            }

            res.send(table);

            //res.status(201).json({ message: "New user has been created" });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong" });
        }
    }

// /api/table/addColumn
// /api/table/addTask

// /api/table/deleteColumn
// /api/table/deleteTask

// /api/table/updateColumn
// /api/table/updateTask
// /api/table/updateTable

// /api/table/deleteUser
// /api/table/addUser

// /api/table/changeColumn
// Балванка
// Изменит/применить, удалить/отмена

router.post(
    "/tables/add",
    [
        check("owner"),
        check("name"),
        check("description")
    ],
    async (req, res) => {
        try {
            console.log(req.body);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Bad data",
                });
            }
            const { owner, name, description } = req.body;

            const table = new Table(
                {
                    owner: owner,
                    name: name,
                    description: description,
                    users: [owner],
                    columns: []
                });
            await table.save();

            res.status(201).json({ message: "Таблица добавлена" });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong" });
        }
    }
);

module.exports = router;
