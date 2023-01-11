const {connect} = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017/mamahome'
async function connectWithDB() {
	try {
		await connect(DB_URL);
		console.log("connect with DB");
	} catch(err) {
		console.log("Not connected with DB",err);
	}
}
 
module.exports = { connectWithDB }