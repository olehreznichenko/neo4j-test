import * as userService from "@services/user";
import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const userRouter = router({
  findSuggestedFriends: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => {
      const users = await userService.findSuggestedFriends(input.username);

      return users;
    }),

  findUsersWithMoreThanNFollowers: publicProcedure
    .input(z.object({ count: z.number() }))
    .query(async ({ input }) => {
      const users = await userService.findUsersWithMoreThanNFollowers(
        input.count
      );

      return users;
    }),

  findShortestPath: publicProcedure
    .input(z.object({ username1: z.string(), username2: z.string() }))
    .query(async ({ input }) => {
      const path = await userService.findShortestPath(
        input.username1,
        input.username2
      );
      return path;
    }),
  findFollowers: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => {
      const users = await userService.findFollowers(input.username);

      return users;
    }),
});
