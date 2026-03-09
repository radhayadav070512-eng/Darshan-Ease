const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

dotenv.config();

async function testLogin() {
    try {
        console.log('Connecting to DB...');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected.');

        const email = 'sittusinghh01@gmail.com';
        const password = '123'; // Assuming this is the password used during signup

        console.log(`Searching for user: ${email}`);
        const user = await User.findOne({ email }).select('+password');
        
        if (!user) {
            console.log('User not found.');
            process.exit(0);
        }

        console.log('User found. Comparing passwords...');
        // Manually compare to see if it's the model method or bcrypt itself
        try {
            const isMatch = await user.matchPassword(password);
            console.log('Match result:', isMatch);
        } catch (matchErr) {
            console.error('Error in matchPassword:', matchErr);
        }

    } catch (err) {
        console.error('Fatal error in script:', err);
    } finally {
        await mongoose.disconnect();
        process.exit(0);
    }
}

testLogin();
