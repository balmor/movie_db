import React, { FC } from "react";
import ReactDOM from "react-dom";

const App: FC<{test: string}> = ({ test }) => (
  <div>
    <h1>My React and TypeScript App!</h1>
    <h2>{test}</h2>
  </div>
);

ReactDOM.render(
  <App test="foo" />,
  document.getElementById("app")
);
