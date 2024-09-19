import follow from "@queries/followers.cql";
import nFollowers from "@queries/n-followers.cql";
import shortestPath from "@queries/shortest-path.cql";
import suggestedFriends from "@queries/suggested-friends.cql";
import { query } from "db";

/**
 * Find all users who follow a specific user.
 * @param username
 */
export async function findFollowers(username: string) {
  const result = await query(follow, { username });

  return result.records.map((record) => {
    const { name, username, age } = record.get("u").properties;
    return {
      name,
      username,
      age: age.toNumber(),
    };
  });
}

/**
 * Find users who are followed by more than N users.
 * @param count
 */
export async function findUsersWithMoreThanNFollowers(count: number) {
  const result = await query(nFollowers, { count });

  return result.records.map((record) => {
    const { name, username, followersCount } = record.toObject();
    return {
      name,
      username,
      followersCount: followersCount.toNumber(),
    };
  });
}

/**
 * Find shortest path between two users.
 * Upper limit of relationships is 5.
 * @param username1
 * @param username2
 */
export async function findShortestPath(username1: string, username2: string) {
  const result = await query(shortestPath, { username1, username2 });

  return result.records?.[0].get("p");
}

/**
 * Find suggested friends for a user.
 * @param username
 * @returns
 */
export async function findSuggestedFriends(username: string) {
  const result = await query(suggestedFriends, { username });

  return result.records.map((record) => ({
    username: record.get("username"),
    name: record.get("name"),
  }));
}
