const { MongoClient } = require('mongodb')

var url = "mongodb+srv://rpineda:pacha2023@cluster0.tk3tvfe.mongodb.net/";
const client = new MongoClient(url);

async function run() {
    try {
      
      // Get the database and collection on which to run the operation
      const database = client.db("sample_mflix");
      const movies = database.collection("movies");
      // Query for a movie that has the title 'The Room'
      const query = { title: 'Back to the Future' };
      const options = {
        // Sort matched documents in descending order by rating
        sort: { "imdb.rating": -1 },
        // Include only the `title` and `imdb` fields in the returned document
        projection: { _id: 0, title: 1, imdb: 1 },
      };
      // Execute query
      const movie = await movies.findOne(query, options);
      // Print the document returned by findOne()
      console.log(movie);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);