MATCH (user1:User { username: $username1 }), (user2:User {username: $username2}), p = shortestPath((user1)-[:FOLLOWS*..5]-(user2)) RETURN p;
