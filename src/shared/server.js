import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 3000;
mongoose
  .connect('mongodb://root:root@mongo:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    dbName: 'api_interactions',
    authSource: 'admin',
  })
  .then(() => {
    // eslint-disable-next-line
    app.listen(PORT, () => console.log(`server Listenin at port ${PORT}`));
  })
  .catch((err) => console.log('Mongo Error', { err }));
