const express = require('express');

const Seeds = require('./db.js');

const router = express.Router();

router.get('/api/posts', (req, res) => {
    try {
        const seeds = await Seeds.find(req.query);
        res.status(200).json(hubs);
      } catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
            error: "The posts information could not be retrieved.",
        });
      }
});

router.get('/api/posts/:id', (req, res) => {
    try {
        const seed = await Seeds.findById(req.params.id);
    
        if (seed) {
          res.status(200).json(seed);
        } else {
          res.status(404).json({ message: "The post with the specified ID does not exist." });
        }
      } catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
            error: "The post information could not be retrieved.",
        });
      }
 });

router.post('/api/posts', (req, res) => {
    try {
        const seed = await Seeds.add(req.body);
        res.status(201).json(seed);
      } catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
            error: "There was an error while saving the post to the database",
        });
      }
});
 
router.delete('./api/posts/:id', (req, res) => {
     const {id} = req.params;

     db
     .remove(id)
     .then(deleted => {
         if(deleted === 0) {
             res.status(404).json({ message: "The post with the specified ID does not exist." })
         }
         res.status(204).json.end()
     })
     .catch(err => {
         res.status(500).json({ error: "The post could not be removed" })
     });
});

router.put('/api/post/:id', (req, res) => {
    try {
        const seed = await Seeds.update(req.params.id, req.body);
        if (seed) {
            res.status(200).json(hub);
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." });
        }
    } catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
            error: "The post information could not be modified.",
        });
    }
});


 module.exports = router;