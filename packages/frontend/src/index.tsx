import React from "react";
import ReactDOM from "react-dom";
import smoothscroll from "smoothscroll-polyfill";

import { App } from "./app";

// Initialize mapkit-js
const mapkitJWT =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkFKNFQ0VTJSTkwifQ.eyJpc3MiOiJLNjZUVzdGUk4zIiwiaWF0IjoxNjM4ODA1NTk1LjY5OSwiZXhwIjoxNjcwMzQxNTk1LjY5OX0.-t3RhnFpQb8WMR_dUuHKckXEjK7kETLdxtMgg1CiKHy3iedqsuqjfsVTWu3Oc90QV6MzWaSaUxcP8NLIY4_6Gg";
(window as any).mapkit.init({
  authorizationCallback: (done: (token: string) => void) => done(mapkitJWT),
});

smoothscroll.polyfill();
ReactDOM.render(<App />, document.getElementById("root"));
