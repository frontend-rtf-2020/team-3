const { Router } = require("express");
const User = require("../models/User");
const Table = require("../models/Table");
const { check, validationResult } = require("express-validator");
const router = Router();
const objectId = require("mongodb").ObjectID;

// /api/table
router.post("", [check("tableId", "").exists()], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Bad data",
      });
    }
    const { tableId } = req.body;

    const table = await Table.findOne({ _id: tableId });
    if (!table) {
      return res.status(400).json({ message: "This table not exist" });
    }

    const users = await User.find({ _id: { $in: table.users } });

    const cutUsers = users.map((user) => {
      return { id: user._id, email: user.email, name: user.name };
    });

    const frontTable = {
      name: table.name,
      description: table.description,
      users: cutUsers,
      columns: table.columns,
      tags: table.tags,
      _id: table._id,
    };

    res.send(frontTable);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// /api/table/addColumn
router.post(
  "/addColumn",
  [
    check("tableId", "").exists(),
    check("name", "").exists(),
    check("description", "").exists(),
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
      const { tableId, name, description } = req.body;

      const column = {
        name: name,
        description: description,
        tasks: [],
      };

      Table.updateOne(
        { _id: tableId },
        { $push: { columns: column } },
        (err, data) => {}
      );

      return res.status(201).json({ message: "Колонка добавлена" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

// /api/table/addTask
router.post(
  "/addTask",
  [
    check("tableId", "").exists(),
    check("column", "").exists(),
    check("name", "").exists(),
    check("description", "").exists(),
    check("owner", "").exists(),
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
      const { tableId, column, name, description, owner } = req.body;

      const task = {
        name: name,
        description: description,
        owner: new objectId(owner),
        tags: [],
      };

      Table.updateOne(
        { _id: tableId, "columns.name": column },
        { $push: { "columns.$.tasks": task } },
        (err, data) => {
          if (err) res.status(500).json({ message: "Something went wrong" });
          res.status(201).json({ message: "Таблица добавлена" });
        }
      );
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

// /api/table/deleteColumn
router.post(
  "/deleteColumn",
  [check("tableId", "").exists(), check("column", "").exists()],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Bad data",
        });
      }
      const { tableId, column } = req.body;

      await Table.updateOne(
        { _id: tableId },
        { $pull: { columns: { name: column } } }
      );
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

// /api/table/deleteTask
router.post(
  "/deleteTask",
  [
    check("tableId", "").exists(),
    check("column", "").exists(),
    check("task", "").exists(),
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
      const { tableId, column, task } = req.body;

      Table.updateOne(
        { _id: tableId, "columns.name": column },
        { $pull: { "columns.$.tasks": { name: task } } },
        (err, data) => {}
      );
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

// /api/table/updateTable
router.post(
  "/updateTable",
  [
    check("tableId", "").exists(),
    check("name", "").exists(),
    check("description", "").exists(),
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
      const { tableId, name, description } = req.body;

      const table = await Table.findOneAndUpdate(
        { _id: tableId },
        { $set: { name: name, description: description } }
      );

      const objTableId = new objectId(tableId);
      await User.updateMany(
        { _id: { $in: table.users }, "tables.id": objTableId },
        {
          $set: {
            "tables.$": {
              name: name,
              id: objTableId,
              description: description,
            },
          },
        }
      );
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

// /api/table/updateColumn
router.post(
  "/updateColumn",
  [
    check("tableId", "").exists(),
    check("column", "").exists(),
    check("name", "").exists(),
    check("description", "").exists(),
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
      const { tableId, column, name, description } = req.body;

      await Table.updateOne(
        { _id: tableId, "columns.name": column },
        {
          $set: {
            "columns.$.name": name,
            "columns.$.description": description,
          },
        }
      );
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

// /api/table/updateTask
router.post(
  "/updateTask",
  [
    check("tableId", "").exists(),
    check("column", "").exists(),
    check("task", "").exists(),
    check("name", "").exists(),
    check("description", "").exists(),
    check("owner", "").exists(),
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
      const { tableId, column, task, name, description, owner } = req.body;

      const newTask = {
        name: name,
        description: description,
        owner: new objectId(owner),
        tags: [],
      };

      Table.updateOne(
        { _id: tableId },
        {
          $set: {
            "columns.$[column].tasks.$[task]": newTask,
          },
        },
        { arrayFilters: [{ "column.name": column }, { "task.name": task }] },
        (err, data) => {}
      );
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

// /api/table/removeUser
router.post(
  "/removeUser",
  [check("tableId", "").exists(), check("userId", "").exists()],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Bad data",
        });
      }
      const { tableId, userId } = req.body;

      await Table.updateOne({ _id: tableId }, { $pull: { users: userId } });

      await User.updateOne(
        { _id: userId },
        { $pull: { tables: { id: new objectId(tableId) } } }
      );
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

// /api/table/addUser
router.post(
  "/addUser",
  [
    check("tableId", "").exists(),
    check("email", "Enter your email").normalizeEmail().isEmail(),
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

      const { email, tableId } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).json({ message: "User is not exist" });
      }

      const table = await Table.findOne({ _id: tableId });

      await Table.updateOne({ _id: tableId }, { $push: { users: user._id } });

      await User.updateOne(
        { _id: user._id },
        {
          $push: {
            tables: {
              id: new objectId(tableId),
              name: table.name,
              description: table.description,
            },
          },
        }
      );

      return res.send({ id: user._id, name: user.name, email: user.email });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

// /api/table/changeColumn

module.exports = router;
