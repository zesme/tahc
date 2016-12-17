import * as React from "react";
import * as ReactRouter from "react-router";
import { Provider } from "react-redux";

// Layout
import { MainLayout } from "./components/layouts/main-layout";

// Container
import { ChatContainer } from "./components/containers/chat-container";

// Other
import { Home } from "./components/home";

// Socket
import { store } from './reducers';

export class Router extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <ReactRouter.Router history={ReactRouter.browserHistory}>
          <ReactRouter.Route component={MainLayout}>
            <ReactRouter.Route path="/" component={Home} />
            <ReactRouter.Route path="/:chatName" component={ChatContainer} />
          </ReactRouter.Route>
        </ReactRouter.Router>
      </Provider>
    );
  }
}
