/*CR: Don't import things you don't need - These things can be solved if you add ESlint.
Furthermore - The name of the file isn't indicative. Should be Tasks.service.js, or Tasks.Controller.js
*/
import express from "express";
import { tasksCollection } from "../config/DAL.js";

exports.create = (req, res) => {
  /*CR: Like last time, you directly use the mongo instance here.
    If I would have told you to change to elastic search. How many file you would have to change?
    Spoiler - You need to change both DAL.js and tasks.js.
    The Rule of Thumb should be changing only 1 file, and 1 file only.

    Think about it. If you can't come up with a solution we may happily disccus it together.
  */
  tasksCollection
    .insertOne(req.body)
    //CR: You don't use the result here
    .then((result) => {
      res.status(200).json("Success");
    })
    .catch((error) => console.log(error));
};

/*CR: The "get/update/deleteOne" isn't indicative enough for my taste.
      I would have written those as functions then export them at the end since there are many.
*/
exports.get = (req, res) => {
  tasksCollection
    .find()
    .toArray()
    .then((results) => {
      res.render("index", { tasks: results });
      console.log(results);
    })
    .catch((error) => console.error(error));
};

exports.update = (req, res) => {
  tasksCollection
    .findOneAndUpdate(
      { title: "orine", description: "bason" },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      }
    )
    .then((result) => {
      console.log(result);
      res.status(200).json("Success");
    })
    .catch((error) => console.error(error));
};

exports.deleteOne = (req, res) => {
  tasksCollection
    .findOneAndDelete({ title: req.body.title })
    .then((result) => {
      res.status(200).json(`Deleted task`);
    })
    .catch((error) => console.error(error));
};
