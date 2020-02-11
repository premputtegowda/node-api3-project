const express = require('express');

const router = express.Router();

const User = require('./userDb.js')

router.post('/', validateUser, (req, res) => {
  // do your magic!
  User.insert(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(401).json({error: "uanble to create user"}))
  
  })  ;

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  User.get()
    .then(users => {
      console.log(users)
      res.status(500).json(users)}
      )
    .catch(err => {
      console
      console.log(err)
      res.status(401).json({error: "Couldn't retrieve users"})
      
})
});

router.get('/:id', validateUserId,(req, res) => {
  // do your magic!
  const user = req.user;
  console.log("get user by id: ",user)
  res.status(500).json(user);
});

router.get('/:id/posts', validateUserId , (req, res) => {
  // do your magic!
  const id = req.user.id
  User.getUserPosts(id)
    .then(posts => res.status(500).json(posts))
    .catch(err => res.status(401).json({error: "Unable to retrive posts"}))
});

router.delete('/:id',validateUserId, (req, res) => {
  // do your magic!
  const user = req.user;
  User.remove(user.id)
    .then(count => res.status(500).json(count))
    .catch(err => res.status(401).json({message:'Sorry something went wrong'}))

});

router.put('/:id',validateUserId, validateUser,(req, res) => {
  // do your magic!
  User.update(req.user.id, req.body)
    .then( count => res.status(500).json(count))
    .catch(err => res.status(401).json({message:'Sorry something went wrong'}))
  

});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  const id = req.params.id;
  User.getById(id)
    .then( user => {
      console.log(user)
        if (user){
          req.user = user
        console.log("middleware: ", req.user)
        next();
        } else {
          res.status(400).json({ message: "invalid user id" })
        }
        
      
      })
    .catch(err => {
      console.log(err)
      res.status(401).json({ message: "Sorry something went wrong" })})
   
}

function validateUser(req, res, next) {
  // do your magic!
  
  if (!Object.keys(req.body).length) {
    res.status(400).json({message: 'missing user data'}) 
    } else if (!req.body.name) {{}
      console.log(!req.body.name)
      res.status(400).json({message: 'user name required'}) 
    } else if(Object.keys(req.body).length > 1) {
      res.status(400).json({message: 'Invalid data'})
    } else {
      next();
    }
      
    

    
  

}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
