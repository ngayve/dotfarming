import express from 'express'
import sql from './db.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/data', (req, res) => {
//     res.send('Route is working!');
//   });

app.get('/data', async (req, res) => {
    try {
        console.log("fetching data");
      // Query the database
      const result = await sql`SELECT * FROM event;`;
      console.log("after result", result);
      res.json(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})