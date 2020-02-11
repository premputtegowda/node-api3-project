const express = require('express');

const router = express.Router();

const Post = require('./postDb')

router.get('/', (req, res) => {
  Post.get()
    .then(posts => {
     
      res.status(500).json(posts)}
      )
    .catch(err => {
      console.log(err)
      res.status(401).json({error: "Couldn't retrieve posts"})
      
})
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
  const id = req.params.id;

  
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
