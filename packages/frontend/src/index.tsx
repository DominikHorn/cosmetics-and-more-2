import React from "react";
import ReactDOM from "react-dom";
import smoothscroll from "smoothscroll-polyfill";

import { App } from "./app";

// Initialize mapkit-js
const mapkitJWT =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjM4QkdOTlE5NjgifQ.eyJpc3MiOiJLNjZUVzdGUk4zIiwiaWF0IjoxNjAxMTQwMzYyLjE3MiwiZXhwIjoxNjMyNjc2MzYyLjE3Mn0.62zCnRGk8wM-TW_iBxao10YIQVW-GcGmUD-DjTeA-6sKyzRnZq11tMVAgAmVcjqkIrBq8Hc9m1hJeET5IkZMnA";
(window as any).mapkit.init({
  authorizationCallback: (done: (token: string) => void) => done(mapkitJWT),
});

smoothscroll.polyfill();
ReactDOM.render(<App />, document.getElementById("root"));
