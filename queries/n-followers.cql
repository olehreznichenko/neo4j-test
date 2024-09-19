MATCH (follower:User)-[:FOLLOWS]->(u:User) WITH u, COUNT(follower) AS followersCount WHERE followersCount > $count RETURN u.username as username, u.name as name, followersCount;
