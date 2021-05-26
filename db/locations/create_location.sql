INSERT INTO locations
(name, image)
VALUES
($1, $2)
RETURNING *;