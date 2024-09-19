MATCH (user:User { username: $username })-[:FOLLOWS]->(followed:User)-[:FOLLOWS]->(suggested:User)
WHERE NOT (user)-[:FOLLOWS]->(suggested) AND user <> suggested
RETURN DISTINCT suggested.username as username, suggested.name as name;
