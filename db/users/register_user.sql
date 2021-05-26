INSERT INTO users 
(user_name, password)
VALUES
($1, $2)
RETURNING *;