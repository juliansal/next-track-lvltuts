import mongoose from 'mongoose'

const connectDb = handler => async (req, res) => {
	try {
		if (mongoose.connections[0].readyState !== 1) {
			await mongoose.connect(process.env.MONGO_URL, {
				useNewUrlParser: true,
				// useFindAndModify: false,
				useUnifiedTopology: true
			})
		}
	
		return handler(req, res)
		
	} catch (err) {
		console.log(err)
	}
}

const db = mongoose.connection

db.once('open', () => {
	console.log("Connected to mongo")
})

export default connectDb


