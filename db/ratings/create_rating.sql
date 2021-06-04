INSERT INTO rating 
(name, rating, comment, date_created, user_name) 
VALUES
($1, $2, $3, $4, $5)
RETURNING *;