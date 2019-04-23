const express = require('express');

const Seeds = require('./post.js');

const router = express.Router();

router.get('/api/posts', (req, res) => {
   db 
   .find()
   .then(posts => {
       res.json(posts)
   })
   .catch(err => {
       res.status(500).json({ error: "The posts information could not be retrieved." })
   });
});

router.get('/api/posts/:id', (req, res) => {
    db 
    .findById(id)
    .then(posts => {
        res.json(posts)
    })
    .catch(err => {
        res.status(404).json({ message: "The post with the specified ID does not exist." })
    });
 });

router.post('/api/posts', (req, res) => {
     const newPost = req.body;
     console.log('request body:', newPost);
     db
     .inset(newPost)
     .then(posts => {
         res.status(201).json(posts)
     })
     .catch(err => {
         res.status(500).json({ error: "There was an error while saving the post to the database"  })
     });
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
     const {id} = req.params;
     const post = req.body;

     if(!post.title || !post.contents)
        return res.status(400).json({ errorMessage: "Please provide title and contents for the post."  })
        .end();

    db
    .update(id, post)
    .then(post => {
        if(!post)
            return res.status(404).json({ message: "The post with the specified ID does not exist." });
            return res.status(200).json(psot);
    })
    .catch(err => {
        res.status(500).json({ error: "The post information could not be modified." })
    });
});


 module.exports = router;