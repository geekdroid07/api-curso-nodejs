module.exports = {
	port: process.env.PORT || 3000,
	db: "mongodb://crix07:"+process.env.MONGO_PASS+"@cluster0-shard-00-00-jxdd3.mongodb.net:27017,cluster0-shard-00-01-jxdd3.mongodb.net:27017,cluster0-shard-00-02-jxdd3.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
}