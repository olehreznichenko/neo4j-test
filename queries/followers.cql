MATCH (u:User)-[:FOLLOWS]->(_:User { username: $username }) RETURN u;
