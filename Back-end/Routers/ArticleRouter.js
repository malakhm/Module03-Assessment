import express from 'express';
import ArticleController from '../Controllers/ArticlesController.js'
import {upload} from "../Config/cloudinary.js";

const articleRouter = express.Router();

articleRouter.get('/', ArticleController.getAllArticles)
articleRouter.get('/:id', ArticleController.getOneArticle)
articleRouter.post('/', upload.single('image'),ArticleController.createArticle)
articleRouter.put('/:id',  upload.single('image'),ArticleController.editArticle)
articleRouter.delete('/:id', ArticleController.deleteArticle)
export default articleRouter