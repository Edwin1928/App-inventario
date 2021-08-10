const mongoose = require('mongoose');
//mongodb://productos-app:c52eafa0411c513f42af51d98cb20d99@dokku-mongo-productos-app:27017/productos_app
mongoose.connect('mongodb://127.0.0.1:27017/productos_app?authSource=productos_app&gssapiServiceName=mongodb', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db=>console.log('DB is connect'))
.catch(err=>console.log(err));