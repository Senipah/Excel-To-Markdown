import App from "./components/App";
import { AppContainer } from "react-hot-loader";
import { Provider, themes } from "@fluentui/react-northstar";
import * as React from "react";
import * as ReactDOM from "react-dom";
/* global AppCpntainer, Component, document, Office, module, require */

let isOfficeInitialized = false;

const title = "Excel to Markdown Add-in";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider theme={themes.teams}>
        <Component title={title} isOfficeInitialized={isOfficeInitialized} />
      </Provider>
    </AppContainer>,
    document.getElementById("container")
  );
};

/* Render application after Office initializes */
Office.initialize = () => {
  isOfficeInitialized = true;
  render(App);
};

if ((module as any).hot) {
  (module as any).hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    render(NextApp);
  });
}
