const {Router} = require("express")

const {createPost,getPosts,getPost,editPost,deletePost} = require('../controllers/postControllers')


const authMiddleware = require("../middleware/authMiddleware")


const router = Router()

router.post("/",createPost)
router.get("/",getPosts)
router.get("/:id",getPost)
router.patch('/:id',editPost,authMiddleware)
router.delete('/:id',deletePost,authMiddleware)



module.exports = router