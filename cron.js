import cron from 'node-cron';
import sql from './db.js'
import { getNftBalance } from './blockchain.js';

cron.schedule('*/1 * * * *', async () => {
    console.log("Running NFT balance update every 1 minute...");
    try {
        //console.log("fetching data");
        // Query the database
        const result = await sql`SELECT address,dot_farming, dot_balance FROM balance;`;
        //const result = await sql`SELECT * FROM event;`;
        console.log("after result", result);
        //res.json(result);
        // Test get NFT balance
        const nftBalance = await getNftBalance('0xb2e15c901733573b4b3818bd804f70fd74ddb916');
        console.log("nftBalance", nftBalance);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});