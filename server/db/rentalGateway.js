const MongoClient           = require('mongodb');

const MONGO_DOCKER_LOCAL    = 'mongodb://mongo:27017';
const MONGO_DOCKER          = process.env.AWS_DNS;

const MONGO                 = MONGO_DOCKER
const MONGO_DB              = 'happy-bnb';
const DB_COLLECTION         = 'Rental';


module.exports = {
    getAllRentals : (c, callback) => {
        MongoClient.connect(MONGO, (err, db) => {
            if (err) throw err;
            var dbo = db.db(MONGO_DB);
            dbo.collection(DB_COLLECTION).find().toArray((err, result) => {
                if (err) throw err;
                db.close();
                callback(result.filter(el => {
                    if (c){
                        return (el.category === c);
                    } else {
                        return el;
                    }
                }));
                return;
            });
        });
    }
    
}
