const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const queries = require("./queries/queries");

async function main() {
    try {
        await client.connect();
        const db = client.db("exercice");

        await queries.show3DS(db);
        await queries.show3DS2011(db);
        await queries.show3DS2011WithSales(db);
        await queries.showTop3DS2011(db);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().then(r => console.log("Fin")).catch(console.error);

