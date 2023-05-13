import React from "react";
import store from "../store";
import { bugAdded, bugRemoved, bugResolved } from "../store/bugs";

const unsubscribe = store.subscribe(() => {
  console.log("Store state changed: ", store.getState());
});

function Home() {
  // // add bug
  store.dispatch(bugAdded({ description: "Bug 1" }));
  store.dispatch(bugAdded({ description: "Bug 2" }));
  store.dispatch(bugAdded({ description: "Bug 3" }));

  // unsubscribe();

  // remove bug
  store.dispatch(bugRemoved({ id: 2 }));

  // bug resolved
  store.dispatch(bugResolved({ id: 3 }));

  return (
    <div>
      <h1>React Redux Learn!</h1>
    </div>
  );
}

export default Home;
