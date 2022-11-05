import { Router } from "express";
import {
  getPosts,
  createPost,
  getPost,
  deletePost,
  updatePost
} from "../controllers/post.controller";
const router = Router();

/** 
* @swagger
* components:
  schemas:
    Posts:
      Type: object
      properties:
        id: 
          type:string
          description: the auto-generated id of posts
        
*/


/** 
* @swagger
* /:
*  get:
*   summary: Return a list of posts
*   responses:
*   200:
*     description: the list of posts
*     content:
*     application/json:
*        schema:
*          type: array
*          items:
*            type: object
*/

router.route("/")
  .get(getPosts)
  .post(createPost);

router.route("/:postId")
  .get(getPost)
  .delete(deletePost)
  .put(updatePost);
  
export default router;
