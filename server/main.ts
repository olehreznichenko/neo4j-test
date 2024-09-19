import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { router, createCallerFactory } from "./trpc";
import { userRouter } from "./controllers/user";

const appRouter = router({
  user: userRouter,
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(Bun.env.PORT, () =>
  console.log(`Listening on port ${Bun.env.PORT}`)
);

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

// const caller = createCallerFactory(appRouter)({});

// console.log(await caller.user.findFollowers({ username: "alice" })); // Carol

// console.log(
//   await caller.user.findShortestPath({ username1: "alice", username2: "eve" })
// );

// console.log(await caller.user.findUsersWithMoreThanNFollowers({ count: 1 })); // Carol and Eve

// console.log(await caller.user.findSuggestedFriends({ username: "alice" })); // will return Dave and Eve
