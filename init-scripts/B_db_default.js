/**
 * 
 * Create database
 * 
 */
db = db.getSiblingDB('db_default');

/**
 * 
 * Create a test collection and insert some
 * fake data.
 * 
 */
db.createCollection('testCollection');
db.testCollection.insertMany(
  [
    { 
      name: "Document1", 
      value: "Value1" 
    },
    { 
      name: "Document2", 
      value: "Value2" 
    }
  ]
);