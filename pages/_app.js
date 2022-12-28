import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import usersReducers from "../reducers/usersReducers";
const rootReducer = combineReducers({
  user: usersReducers,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Provider store={store}>
       
          <Component {...pageProps} />
      
      </Provider>
    </ThirdwebProvider>
  );
}

export default MyApp;
