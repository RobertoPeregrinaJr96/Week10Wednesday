// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();

/**
 * BASIC PHASE 2, Step A - Instantiate SQLite and database
 *   - Database file: "data_source" environment variable
 *   - Database permissions: read/write records in tables
*/
// Your code here

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.DATA_SOURCE, sqlite3.OPEN_READWRITE);

/**
 * BASIC PHASE 2, Step B - List of all trees in the database
 *
 * Protocol: GET
 * Path: /
 * Parameters: None
 * Response: JSON array of objects
 *   - Object properties: height-ft, tree, id
 *   - Ordered by the height_ft from tallest to shortest
 */
// Your code here
router.get("/", (req, res) => {
    const sql = 'SELECT id,tree,height_ft FROM trees ORDER BY height_ft DESC;'

    const params = []
    // const params2 = [req.params.trees]
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    })
})
/**
 * BASIC PHASE 3 - Retrieve one tree with the matching id
 *
 * Path: /:id
 * Protocol: GET
 * Parameter: id
 * Response: JSON Object
 *   - Properties: id, tree, location, height_ft, ground_circumference_ft
 */
// Your code here
router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM trees where id = ?;'
    const params = [req.params.id]

    db.get(sql, params, (err, row,next) => {
        if (err) {
            res.json(err)
        } else {
            res.json(row)
        }
    })

})
/**
 * INTERMEDIATE PHASE 4 - INSERT tree row into the database
 *
 * Path: /trees
 * Protocol: POST
 * Parameters: None
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here

/**
 * INTERMEDIATE PHASE 5 - DELETE a tree row from the database
 *
 * Path: /trees/:id
 * Protocol: DELETE
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here

/**
 * INTERMEDIATE PHASE 6 - UPDATE a tree row in the database
 *
 * Path: /trees/:id
 * Protocol: PUT
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here

// Export class - DO NOT MODIFY
module.exports = router;
