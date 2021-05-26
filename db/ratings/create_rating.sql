INSERT INTO rating 
(name, rating, date_created, locations_id, user_name) 
VALUES
($1, $2, $3, $4, $5)
RETURNING *;