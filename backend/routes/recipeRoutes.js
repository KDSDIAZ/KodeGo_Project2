const router = require('express').Router();
const recipeCon = require('../controllers/recipeCon');

//view all recipes
//localhost:8000/recipes/view
router.get('/recipes/view', recipeCon.recipe_list);

//View recipes by id
//localhost:8000/recipes/view/id
router.get('/recipes/view/:id', recipeCon.recipe_view);

//add recipes route //!ADD JWT -REQ
//localhost:8000/recipes/add
router.post('/recipes/add', recipeCon.recipe_add);

//delete recipe by id
//localhost:8000/recipes/delete/:id
router.post('/recipes/delete/:id', recipeCon.recipe_delete);

//update data
//localhost:8000/recipes/update/:id
router.post('/recipes/update/:id', recipeCon.recipe_update);

module.exports = router;