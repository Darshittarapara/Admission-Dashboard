import mongoose from "mongoose";

export const createConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://rs7746897_db_user:GM3ezBgPF80oaIb9@cluster0.ilsyskv.mongodb.net/University-admission?appName=Cluster0');
        console.log('connection build')
    } catch (error) {
      console.error(error)   
    }
}