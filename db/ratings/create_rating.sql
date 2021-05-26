INSERT INTO rating 
(name, rating, date_created, user_name) 
VALUES
($1, $2, $3, $4)
RETURNING *;