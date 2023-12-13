import Article from "../Models/Articles.js";
import sequelize from "../Config/conn.js";

class ArticleController {
  // get all articles
  static async getAllArticles(req, res) {
    try {
      const getAll = await Article.findAll();
      res.status(200).json({
        data: getAll,
        status: 200,
        success: true,
        message: "All Articles found!",
      });
    } catch (err) {
      res.status(500).json({
        data: null,
        status: 500,
        success: false,
        message: err.message,
      });
    }
  }

  // get one article
  static async getOneArticle(req, res) {
    const { id } = req.params;
    try {
      const getArticle = await Article.findOne({ where: { id: id } });
      res.status(200).json(getArticle);
    } catch (err) {
      res.status(500).json({
        data: null,
        status: 500,
        success: false,
        message: err.message,
      });
    }
  }
  static async createArticle(req, res) {
    try {
      let newArticle = new Article(req.body); //an instance of campaign gotten from body to manipulate it
      if (req.file) {
        newArticle.image = req.file.path; //path key is already passed in the object sent in the body form through multer
      }
      const savedArticle = await newArticle.save(); //saving the manipulated instance to the db
      return res
        .status(201) //created
        .json({
          data: savedArticle.toJSON(), //used tojson() to show the data and not the instance details
          status: 201,
          success: true,
          message: "article added",
        });
    } catch (error) {
      return res
        .status(500) //internal server error
        .json({
          data: null,
          status: 500,
          success: false,
          message: `Couldn't add the article due to server error: ${error}`,
        });
    }
  }

  static async editArticle(req, res) {
    const { id } = req.params;
    try {
      const edited = await Article.update(req.body);
      if (req.file) {
        //-----------------------------------------------------------------first if statement openning
        const [row] = await Article.update(
          {
            image: req.file.path,
          },
          {
            where: {
              id: id,
            },
          }
        );
        res.status(200).json({ edited: edited });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }


  static async deleteArticle(req, res) {

    try{
        const { id } = req.params;
        const deleteArticle = await Article.destroy({where: {id:id}})
        res.status(200).json({ deleteArticle: deleteArticle});
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
  }
}

export default ArticleController;
