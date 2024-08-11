
/**
 * 
 * Create database
 * 
 */
db = db.getSiblingDB('db_default');

/**
 * 
 * Create a user and assign the `readWrite` role
 * 
 */
db.createUser(
  {
    user: "Grw4Ng8fPX",
    pwd: "O7FTzIhTMN",
    roles: [
      { 
        role: "readWrite",
        db: "db_default" 
      },
      "readWrite",
    ]
  }
);