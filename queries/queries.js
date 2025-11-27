async function show3DS(db) {
    const games = db.collection("games");
    const result = await games.find({ Platform: "3DS" }).toArray();
    console.log("Jeux 3DS");
    console.log(result);
}

async function show3DS2011(db) {
    const games = db.collection("games");
    const result = await games.find({ Platform: "3DS", Year: "2011" }).toArray();
    console.log("Jeux 3DS sortis en 2011");
    console.log(result);
}

async function show3DS2011WithSales(db) {
    const games = db.collection("games");
    const result = await games.find(
        { Platform: "3DS", Year: "2011" },
        { projection: { Name: 1, Global_Sales: 1, _id: 0 } }
    ).toArray();
    console.log("Nom et global sales des jeux 3DS sortis en 2011");
    console.log(result);
}

async function showTop3DS2011(db) {
    const games = db.collection("games");
    const result = await games.find(
        { Platform: "3DS", Year: "2011" },
        { projection: { Name: 1, Global_Sales: 1, _id: 0 } }
    )
        .sort({ Global_Sales: -1 })
        .limit(3)
        .toArray();
    console.log("Top 3 des jeux les plus vendus sur 3DS sortis en 2011");
    console.log(result);
}

module.exports = {
    show3DS,
    show3DS2011,
    show3DS2011WithSales,
    showTop3DS2011
}