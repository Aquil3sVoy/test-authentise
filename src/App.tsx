import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { configureStore, getHistory } from "src/modules/store";
import { Provider } from "react-redux";
import RoutesComponent from "src/views/shared/routes/RoutesComponent";

const store = configureStore();

const App = (props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={getHistory()}>
        <AppInnerComponent />
      </ConnectedRouter>
    </Provider>
  );
};

const AppInnerComponent = (props) => {
  return (
    <div data-testid="root-component">
      <RoutesComponent />
    </div>
  );
};

export default App;
