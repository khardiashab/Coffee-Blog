import express from "express"
const router = express.Router()
import { homepage, exploreCatagories, exploreRandom, exploreLatest, SearchTerm, catagory, recipe } from "../controllers/recipieController.js"

router.get("/", homepage)
router.get("/explore-latest", exploreLatest)
router.get("/explore-random", exploreRandom)
router.get("/catagory", exploreCatagories)
router.get("/catagory/:id", catagory )
router.post("/search", SearchTerm )
router.get("/recipe/:id", recipe )

export default router