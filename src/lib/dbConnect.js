import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI;
console.log('MONGODB_URI:', MONGODB_URI);

if (!MONGODB_URI) {
  
  throw new Error('Please define the MONGODB_URI environment variable');
}

mongoose.set('strictQuery', false);

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default dbConnect;
