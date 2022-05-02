const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
    Comment.findAll({
        where: {
            id: req.params.id
        }
        //include user data
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(404).json(err);
    });

});

router.get('/:id', (req, res) => {
    Comment.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', withAuth, (req, res) => {
    //check the session
    if(req.session) {

    
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    }
});

module.exports = router;