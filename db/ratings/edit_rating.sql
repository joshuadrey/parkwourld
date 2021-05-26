UPDATE rating
SET rating = $2
WHERE user_name = $4
SELECT * FROM rating
ORDER BY user_name;