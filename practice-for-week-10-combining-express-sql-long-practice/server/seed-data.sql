-- BASIC PHASE 1A - DROP and CREATE table
-- Your code here

DROP TABLE IF EXISTS trees;

CREATE TABLE trees (
    id INTEGER NOT NULL AUTOINCREMENT,
    tree VARCHAR(32),
    location VARCHAR(64),
    height_ft INTEGER FLOAT(4,1),
    ground_circumference_ft INTEGER FLOAT(4,1)
);


-- BASIC PHASE 1B - INSERT seed data
-- Your code here

INSERT INTO trees (id,tree,location,height_ft,ground_circumference_ft)
VALUES('6','Monroe','Sequoia National Park',247.8,91.3);

SELECT * FROM trees
