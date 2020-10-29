import express from 'express';
import {tasksCollection} from '../config/DAL.js';

  exports.create = (req,res) => { 
    tasksCollection.insertOne(req.body)
    .then(result => {
      res.status(200).json('Success')
    })
    .catch(error => console.log(error))
  }

  exports.get = (req, res) => {
    tasksCollection.find().toArray()
      .then(results => {
        res.render('index', { tasks : results })
        console.log(results)
      })
      .catch(error => console.error(error))
  }

  exports.update = (req, res) => {
    tasksCollection.findOneAndUpdate(
      { "title": "orine",
      "description" : "bason"},
      {
        $set: {
          "title": req.body.title,
          "description": req.body.description
        }
      },
    )
    .then(result => {
      console.log(result)
      res.status(200).json('Success')
     })
    .catch(error => console.error(error))
  }  

  exports.deleteOne = (req, res) => {
      tasksCollection.findOneAndDelete(
        { title: req.body.title }
      )
        .then(result => {
          res.status(200).json(`Deleted task`)
        })
        .catch(error => console.error(error))
    }

