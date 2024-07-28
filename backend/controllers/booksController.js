const path = require('path');
const csv = require('csvtojson');
const booksFomJSON = require('../data/books.json');

module.exports.getAllBooks = async (req, res, next) => {
   try {
      const csvFilePath = path.join(__dirname, '..', 'data', 'books.csv');
      const booksFromCSV = await csv().fromFile(csvFilePath);

      const mergedData = booksFomJSON.map((bookJSON) => {
         const findReference = booksFromCSV.find((bookCSV) => +bookCSV.id === +bookJSON.id);
         return { ...bookJSON, rating: +findReference.rating };
      });

      return res.status(200).send(mergedData);
   } catch (err) {
      return res.status(500).send({ error: 'Server Error!' });
   }
};
