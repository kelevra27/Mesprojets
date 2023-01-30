const express = require('express');
const router = express.Router();
const isAdmin = require("../middleware/isAdmin");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, file.originalname + '-' + Date.now() + '.' + extension)
    }
})
const upload = multer({ storage: storage });

const isObjectId = require('../middleware/isObjectId');
const game_controller = require('../controllers/game.controller');


router.post('/create', upload.single("image"), game_controller.game_create);
router.post('/:id/addcomment', game_controller.game_comment);
router.get('/all', game_controller.game_all);
router.get('/:id', isObjectId, game_controller.game_details);
router.put('/:id/update', isObjectId, game_controller.game_update);
router.delete('/:id/delete', isObjectId, game_controller.game_delete);
router.delete('/:id/deletecomment',isAdmin  ,game_controller.comment_delete);


module.exports = router;

/**
 * @api {get} /games/:id Request a game information
 * @apiName GetGame
 * @apiGroup Game
 *
 * @apiParam {Number} id Games unique ID.
 *
 * @apiSuccess {String} name Name of the Game.
 * @apiSuccess {String} price  Price of the Game.
 * @apiSuccess {String} description  Description of the Game.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "FIFA",
 *       "price": "70 €",
 *       "description" : "There are even domestic leagues, such as Barclays FA Women’s Super League and Division 1 Arkema, which will allow you to play through career mode as a female player for the first time."
 *     }
 * 
 * 
 */

/**
 * @api {post} /games/create Add a new game
 * @apiName PostGame
 * @apiGroup Game
 * 
 * @apiBody {String} name Name of the Game.
 * @apiBody {String} price  Price of the Game.
 * @apiBody {String} description  Description of the Game.
 *
 * @apiSuccessExample {json} Success-Response:
 *                 { "content": "Game Created successfully" }
 * 
 *  @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Not Found
 *     {
 *       "error": "Internal server error"
 *     }
 * 
 */

/**
 * @api {put} /games/:id/update Edit a game
 * @apiName EditGame
 * @apiGroup Game
 * 
 *  * @apiParam {Number} id Games unique ID.
 * @apiBody {String} name Name of the Game.
 * @apiBody {String} price  Price of the Game.
 * @apiBody {String} description  Description of the Game.
 *
 *
 * @apiSuccess {String} content String representing the update
 * @apiSuccessExample {json} Success-Response:
 *                 { "content": "Game udpated." }
 * 
 * 
 */


/**
 * @api {delete} /games/:id/delete Delete a game
 * @apiName DeleteGame
 * @apiGroup Game
 * 
 * @apiParam {Number} id Games unique ID.
 *
 *
 * @apiSuccess {String} content String representing the delete status
 * @apiSuccessExample {json} Success-Response:
 *                 { "content": "Game deleted." }
 */


/**
 * @api {post} /isAdmin Check if User is admin
 * @apiName UserisAdmin
 * @apiGroup User
 * 
 * @apiHeader token user accessToken
 * 
 * @apiSuccessExample {json} Success-Response:
 *                 { "content": "Hi, Admin" }
 * 

 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Not Found
 *     {
 *       "error": "Error not alowed"
 *     }
 *  * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 403 Not Found
 *     {
 *       "error": "Forbidden"
 *     }
 * 
 */

/**
 * @api {delete} /users Delete a User
 * @apiName DeleteUser
 * @apiGroup User
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 *                 { "content": "user deleted" }
 * 
 * 
 */

/**
 * @api {put} /users Edit a properties
 * @apiName EditUser
 * @apiGroup User
 * 
 * @apiBody {String} username Username of the User.
 * @apiBody {String} password Password of the User.
 * @apiBody {String} email Email of the User.
 *
 *
 * @apiSuccess {String} content String representing the update
 * @apiSuccessExample {json} Success-Response:
 *                 { "content": "OK" }
 * 
 *  * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User not found"
 *     }
 * 
 */

/**
 * @api {get} /users Request a user information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiHeader token user accessToken
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "something went wrong !"
 *     }
 */

/**
 * @api {delete} /:id/deletecomment Delete a Comment
 * @apiName DeleteComment
 * @apiGroup Comment
 * 
 * @apiParam {Number} id Comment unique ID.
 * 
 * @apiSuccess {String} content String representing the delete status
 * @apiSuccessExample {json} Success-Response:
 *                 { "content": "Deleted successfully!" }
 * 
 * 
 */


 /**
 * @api {post}  /:id/addcomment Add a comment
 * @apiName PostComment
 * @apiGroup Comment
 * 
 * @apiBody {String} comment Comment.
 * @apiParam {Number} id Comment unique ID.
 *
 * @apiSuccessExample {json} Success-Response:
 *                 { "content": "OK" }
 */