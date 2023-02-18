const recipeDB = require('../models/recipeDB');


//show all data
const recipe_list = (req, res) => {
  recipeDB.find({})
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
}

//view recipe by id 
const recipe_view = (req, res) => {
  const id = req.params.id;
  recipeDB.findById(id)
    .then((result) => {
      res.status(200).send(result)
    }).catch(err => res.status(400).send(err));
}

//add recipe
const recipe_add = (req, res) => {
  console.log(req.body);
  const recipe = new recipeDB(req.body);
  recipe.save()
    .then((result) => (
      res.status(200).send(result)
    )).catch(err => res.status(400).send(err));
}

//delete recipe
const recipe_delete = async (req, res) => {
  const id = req.params.id;
  const deleteRecipe = await recipeDB.findByIdAndDelete(id)
  if(!deleteRecipe){
    return res.status(404).send(`Recipe cant be deleted`);
  }
  res.status(200).send(`successfully deleted`);
}

//recipe to update
const recipe_update = async (req, res) => {
  let id = req.params.id
  let recipeUpdate = await recipeDB.findByIdAndUpdate(id, {
    _id: req.body.id,
    dish: req.body.dish,
    ingredients: req.body.ingredients,
    procedure: req.body.procedure,
    recipeImage: req.body.recipeImage
  })
  if(!recipeUpdate){
    return res.status(404).send(`recipe cant be updated`);
  }
  res.status(200).send(`updated successfully!`)
}


module.exports = {
  recipe_view,
  recipe_add,
  recipe_list,
  recipe_delete,
  recipe_update
}