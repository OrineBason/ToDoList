import { insertToDb, deleteInDb, findInDb,updateInDb} from "../config/DAL.js";

exports.createTask = (req, res) => {
  insertToDb(req.body)
    .then(
      res.status(200).json("Success"))
    .catch((error) => console.log(error));
};

exports.getTask = (req, res) => {
  findInDb()
    .then((results) => {
      res.render("index", { tasks: results });
      console.log(results);
    })
    .catch((error) => console.error(error));
};

exports.update = (req, res) => {
    updateInDb(
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
  deleteInDb({ title: req.body.title })
    .then((result) => {
      res.status(200).json(`Deleted task`);
    })
    .catch((error) => console.error(error));
};