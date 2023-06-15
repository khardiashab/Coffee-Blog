import expressEjsLayouts from "express-ejs-layouts";
import express  from "express";

const app = express()

const port = process.env.PORT || 8800

app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))
app.use(expressEjsLayouts)

app.set("view engine", "ejs")
app.set("layout", "./layouts/main.ejs")

// routes 
import routes from "./server/routes/recipieRouter.js"

app.use("/", routes)

app.listen(port, ()=>console.log(`App is running on port:${port}`))