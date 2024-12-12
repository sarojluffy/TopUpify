import { configureStore } from "@reduxjs/toolkit";
import bgScrl from "./slices/BgScroll";
export const store = configureStore({
  reducer: {
    Bgscroll: bgScrl,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
