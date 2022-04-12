import mongoose from 'mongoose'

const { MONGODB_URI } = process.env;

(async () => {

    try {

        const connection = await mongoose.connect(`${MONGODB_URI}`)

        console.log(`database ${connection.connection.name} is running`);
        
        
    } catch (error) {
        console.log(error);
    }

})()