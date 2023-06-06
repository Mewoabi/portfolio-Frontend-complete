const express = require('express');
const app = express();
const port = 5000; // Change the port number if necessary

// Set up middleware to parse JSON requests
app.use(express.json());

// Define routes here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://127.0.0.1:27017/portfolio'; // Replace 'portfolio' with your desired database name

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.log('Error connecting to the database:', err);
  } else {
    const db = client.db();
    console.log('Connected to the database');

    // Define your routes and other functionality that interacts with the database here

    // Example route for getting services
app.get('/api/service/services', (req, res) => {
  const servicesCollection = db.collection('services');
  servicesCollection.find().toArray((err, services) => {
    if (err) {
      console.log('Error retrieving services:', err);
      res.status(500).json({ error: 'Failed to retrieve services' });
    } else {
      res.json(services);
    }
  });
});

// Example route for getting experiences
app.get('/api/experience/experiences', (req, res) => {
  const experiencesCollection = db.collection('experiences');
  experiencesCollection.find().toArray((err, experiences) => {
    if (err) {
      console.log('Error retrieving experiences:', err);
      res.status(500).json({ error: 'Failed to retrieve experiences' });
    } else {
      res.json(experiences);
    }
  });
});

    // Close the database connection when the server is stopped
    process.on('SIGINT', () => {
      client.close();
      console.log('Disconnected from the database');
      process.exit();
    });
  }
});

  
