var app1=require("express")
app=app1() 
var bodyParser=require("body-parser")
app.set("view engine","ejs")
app.use(app1.static("public"))
app.use(bodyParser.urlencoded({extended:false}))
const PORT=process.env.PORT||3030
app.listen(3000,function(req,res){
    console.log("here now")
})
app.get("/",function(req,res){
    res.render("Home")
})
app.post("/Poems",function(req,res){
    res.redirect("Poems")
})

app.get("/Poems",function(req,res){
    res.render("Poems")
})
app.get("Stories",function(req,res){
    res.render("Stories")
})
app.post("/Poem1",function(req,res){
     res.redirect("Poem1")
})
app.get("/Poem1",function(req,res){
    res.render("Poem1")
})
app.post("/Poem2",function(req,res){
    res.redirect("Poem2")
})
app.get("/Poem2",function(req,res){
   res.render("Poem2")
})
app.post("/Poem3",function(req,res){
    res.redirect("Poem3")
})
app.get("/Poem3",function(req,res){
   res.render("Poem3")
})
app.post("/Poem4",function(req,res){
    res.redirect("Poem4")
})
app.get("/Poem4",function(req,res){
   res.render("Poem4")
})