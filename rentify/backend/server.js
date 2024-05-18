const app = require('./app'); // Import your Express application from app.js

const PORT = process.env.PORT || 3000;

console.log(app); // Add this line
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

