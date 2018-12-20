//hero.js文件

//引入mongoose模块
const mongoose = require('mongoose');
//这一句是连接上数据库
//这里的myDbs是数据库的名字，不是表的名字
mongoose.connect('mongodb://localhost:27017/myblogss');
const db = mongoose.connection;
db.on('error',() => console.log('Mongo connection error'));
db.once('open',() =>{
	console.log('Mongo connection successed')
});
module.exports = db;

//定义数据模型，可以看到，我们下面创建了一个表，表中的数据有name、age、sex等字段，并且这些字段的数据类型也定义了，最后将model导出即可
const noteSchema = mongoose.Schema({
  title :String,
  brief : String,
  detail : String,
  time :{ type:Date, default:Date.now },
  zan : String,
  classify : String,
  imgArr:[],
  view:String
  
}, { collection: 'notes'})
//这里mongoose.Schema最好要写上第二个参数，明确指定到数据库中的哪个表取数据，我这里写了myhreo，目的就是为了以后操作数据要去myhreo表中。
//这里不写第二个参数的话，后面你会遇到坑。

//导出model模块
const Note = module.exports = db.model('note',noteSchema);

