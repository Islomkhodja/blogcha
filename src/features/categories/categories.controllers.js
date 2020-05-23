class CategoriesControllers {
  constructor({ categoryService }) {
    this.categoriesService = categoryService;
  }

  async getAll(req, res, next) {
    try {
      const categories = await this.categoriesService.getAllCategories();
      res.json(categories);
    } catch (err) {
      next(err);
    }
  }

  async getOne(req, res, next) {
    try {
      const category = await this.categoriesService.getCategoryById(
        req.params.categoryId
      );
      res.json(category);
    } catch (err) {
      next(err);
    }
  }

  async getCategoryByIdWithPosts(req, res, next) {
    try {
      const category = await this.categoriesService.getCategoryByIdWithPosts(
        req.params.categoryId
      );
      res.json(category);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async add(req, res, next) {
    try {
      const obj = req.body;
      const category = await this.categoriesService.addCategory(obj);
      res.json(category);
    } catch (err) {
      next(err);
    }
  }

  async edit(req, res, next) {
    try {
      const id = req.params.categoryId;
      const obj = req.body;
      const category = await this.categoriesService.editCategory(id, obj);
      res.json(category);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const id = req.params.categoryId;
      const deletedCategory = await this.categoriesService.deleteCategory(id);
      res.json(deletedCategory);
    } catch (err) {
      next(err);
    }
  }
}

exports.CategoriesControllers = CategoriesControllers;
