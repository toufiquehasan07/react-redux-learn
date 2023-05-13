import React from "react";
import store from "../store";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  getBugsByUserId,
} from "../store/bugs";
import { projectAdded } from "../store/projects";
import { userAdded } from "../store/users";

const unsubscribe = store.subscribe(() => {
  console.log("Store state changed: ", store.getState());
});

function Home() {
  // add user
  store.dispatch(userAdded({ name: "user1" }));
  store.dispatch(userAdded({ name: "user2" }));
  store.dispatch(userAdded({ name: "user3" }));
  store.dispatch(userAdded({ name: "user4" }));

  // // add bug
  store.dispatch(bugAdded({ description: "Bug 1", userId: 3 }));
  store.dispatch(bugAdded({ description: "Bug 2", userId: 2 }));
  store.dispatch(bugAdded({ description: "Bug 3", userId: 3 }));
  store.dispatch(projectAdded({ name: "Project 1", userId: 4 }));

  const bugsAssignToUser3 = getBugsByUserId(3)(store.getState());
  console.log("Info: ", bugsAssignToUser3);

  // unsubscribe();

  const x = getUnresolvedBugs(store.getState());
  const y = getUnresolvedBugs(store.getState());
  console.log("Info: ", x === y); // shere same memory location when bug list doesn't change

  return (
    <div>
      <h1>React Redux Learn!</h1>
    </div>
  );
}

export default Home;
