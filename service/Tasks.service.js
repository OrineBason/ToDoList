import { insertToDb, deleteInDb, findAllInDb ,updateInDb} from "../config/DAL.js";

function createTask (req, res) {
  insertToDb(req.body)
    .then(
      res.status(200).json("Success"))
    .catch((error) => console.log(error));
};

function getTasks(req, res) {
  findAllInDb()
    .then((results) => {
      console.log(results);
      res.render("index", { tasks: results });
    })
    .catch((error) => console.error(error));
};

function updateTask(req, res) {
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

function deleteOneTask (req, res){
  deleteInDb({ title: req.body.title })
    .then((result) => {
      res.status(200).json(`Deleted task`);
    })
    .catch((error) => console.error(error));
};

export {createTask, updateTask, deleteOneTask, getTasks}