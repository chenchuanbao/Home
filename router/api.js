//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块


//const Hero = require("../models/user");
const Note = require("../models/note");
const User = require("../models/user");
//文章---------------------------------------------------------------------
// 添加一个文章信息路由
router.post("/note", (req, res) => {
  //使用Note model上的create方法储存数据
  Note.create(req.body, (err, note) => {
    if (err) {
      res.json(err);
    } else {
      res.json(note);
    }
  });
});


// 查询所有文章信息路由
router.get("/note", (req, res) => {
  Note.find({})
    .sort({time: -1 })
    .then(notes => {
      res.json(notes);
    })
    .catch(err => {
      console.log(2);
      res.json(err);
    });
});


// 通过ObjectId查询单个文章信息路由
router.get("/note/:id", (req, res) => {
  Note.findById(req.params.id)
    .then(note => {
      res.json(note);
    })
    .catch(err => {
      res.json(err);
    });

});

// 通过ObjectId查询关键词信息路由
router.get("/so", (req, res) => {
  Note.find({title:/key/})
    .then(note => {
      res.json(note);
    })  
    .catch(err => {
      res.json(err);
    });

});



//用户---------------------------------------------------------------------

router.post("/user", (req, res) => {
  //使用User model上的create方法储存数据
  User.create(req.body, (err, user) => {
    if (err) {
      res.json(err);
    } else {
      res.json(user);
    }
  });
});



// 通过ObjectId查询单个用户信息路由
router.post("/login", (req, res) => {
  User.findOne({uname:req.body.uname})
    // .then(user => {
    //   res.json(user);
    // })
    .then(user => res.send(`${user.password}`))
    .catch(err => {
      res.json(err);
    });

});



module.exports = router;

