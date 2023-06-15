export const homepage= async (req, res) =>{
  try {

    
    res.render("index", {
      title : "Cooking Blog - Home"
    })
  } catch (error) {
    res.status(500).send(error.msg || "Error occured")
  }
}

/* 
 Get / explore-latest

 explorelatest.ejs
*/
export const exploreLatest = async (req, res)=>{
  try {

    
    res.render("explorelatest", {
      title : "Cooking Blog - Latest Recipes"
    })
  } catch (error) {
    res.status(500).send(error.msg || "Error occured")
  }

}


/* 
 Get / explore-random/
 exploreRandom.ejs
*/
export const exploreRandom = async (req, res)=>{
  try {

    
    res.render("exploreRandom", {
      title : "Cooking Blog - Random Recipes"
    })
  } catch (error) {
    res.status(500).send(error.msg || "Error occured")
  }
}

/* 
 Post / search
 searchTerm.ejs
*/
export const SearchTerm = async (req, res)=>{
  try {

    
    res.render("searchTerm", {
      title : "Cooking Blog - Search"
    })
  } catch (error) {
    res.status(500).send(error.msg || "Error occured")
  }

}

/* 
 Get / recipe/:id
 recipe.ejs
*/
export const recipe = async (req, res)=>{
  try {

    
    res.render("recipe", {
      title : "recipe name"
    })
  } catch (error) {
    res.status(500).send(error.msg || "Error occured")
  }
}


/* 
 Get / catagory
 exploreCatagories.ejs
*/
export const exploreCatagories = async (req, res)=>{
  try {

    
    res.render("exploreCatagories", {
      title : "Cooking Blog Catagories"
    })
  } catch (error) {
    res.status(500).send(error.msg || "Error occured")
  }
}

/* 
 Get / catagory/:id
 catagory.ejs
*/
export const catagory = async (req, res)=>{
  try {

    
    res.render("catagory", {
      title : "Cooking Blog Catagories"
    })
  } catch (error) {
    res.status(500).send(error.msg || "Error occured")
  }
}
