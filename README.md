# Exercice MongoDB – Requêtes simples

## 1. Importer les données

Commande exécutée pour importer le fichier `console_games.json` :

```bash
mongoimport --db exercice --collection games --file "../data/console_games.json" --jsonArray


## 2. Requêtes MongoDB

Lancer les requêtes suivantes dans le terminal :

```javascript
use exercice;
// 1. Trouver tous les jeux 3DS
db.games.find({ Platform: "3DS" })
// 2. Trouver tous les jeux 3DS sortis en 2011
db.games.find({ Platform: "3DS", Year: "2011" })
// 3. Trouver tous les jeux 3DS sortis en 2011 avec leur nom et leur nombre d exemplaires vendus
db.games.find({ Platform: "3DS", Year: "2011" }, {Name: 1, Global_Sales: 1, _id: 0})
// 4. Trouver les 3 jeux les plus vendus sur 3DS en 2011
db.games.find({ Platform: "3DS", Year: "2011" }, {Name: 1, Global_Sales: 1, _id: 0}).sort({ Global_Sales: -1 }).limit(3)
```

## 3. Installation 

```bash 
npm init -y
npm install mongodb
```

## 4. Lancement du script

```bash
node index.js
```