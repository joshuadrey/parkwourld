INSERT INTO locations
(name, pay, image)
VALUES
($1, $2, $3)
RETURNING *;