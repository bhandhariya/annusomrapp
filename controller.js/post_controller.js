var Post=require('../model/post_model');

exports.createPost=function(req,res,next){
    var data=req.body;
    var post=new Post({
        name:data.name,
        post:data.post,
        date:Date.now()
    });
    post.save(function(err,pp){
        if(!err && pp){
            res.send(pp)
        }else{
            res.send(err)
        }
    })
}
exports.getAll=function(req,res){
    Post.find().exec(function(err,pp){
        if(!err && pp){
            res.send(pp)
        }else{
            res.send(err)
        } 
    })
}

exports.vote=function(req,res){
    var data=req.body;
    console.log(data);
    Post.findByIdAndUpdate(data.id,{vote:data.vote}).exec(function(err,pp){
        if(!err && pp){
            res.send(pp)
        }else{
            res.send(err)
        } 
    })
}