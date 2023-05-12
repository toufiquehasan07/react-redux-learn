import React from "react";
import store from "../store";
import { bugAdded, bugRemoved, bugResolved } from "../store/bugs";

const unsubscribe = store.subscribe(() => {
  console.log("Store state changed: ", store.getState());
});

function Home() {
  // // add bug
  store.dispatch(bugAdded("Bug 1"));
  store.dispatch(bugAdded("Bug 2"));
  store.dispatch(bugAdded("Bug 3"));

  // unsubscribe();

  // remove bug
  store.dispatch(bugRemoved(1));

  // bug resolved
  store.dispatch(bugResolved(3));

  return (
    <div>
      <h1>React Redux Learn!</h1>
    </div>
  );
}

export default Home;
