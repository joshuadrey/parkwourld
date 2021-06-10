UPDATE rating
SET name = $2,
rating = $4,
comment = $3
WHERE id = $1;

