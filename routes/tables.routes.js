const { Router } = require("express");
const User = require("../models/User");
const Table = require("../models/Table")
const { check, validationResult } = require("express-validator");
const router = Router();

// /api/tables
router.post(
    "",
    [
        check("id", "").exists()
    ],
    async (req, res) =>{
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Bad data",
                });
            }
            const { id } = req.body;
            const user = await User.findOne({ _id: id });
            if (!user) {
                return res.status(400).json({ message: "This user not exist" });
            }

            res.send(user.tables);

        } catch (error) {
            res.status(500).json({ message: "Something went wrong" });
        }
    }
);

// /api/tables/add
router.post(
    "/add",
    [
        check("owner", "").exists(),
        check("name", "Нет имени").exists(),
        check("description", "Нет описания").exists()
    ],
    async (req, res) => {
        try {
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
                    columns: [],
                    tags: []
                });

            const answer = await table.save();

            if (!answer) {
                return res.status(400).json({ message: "Таблица не создана" });
            }

            await User.update({_id: owner}, {
                $push: {
                    tables: { id: answer._id, name: name, description: description}
                }
            });

            res.send(answer._id);
        } catch (error) {
            res.status(500).json({ message: "Something went wrong" });
        }
    }
);

module.exports = router;
