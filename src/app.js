import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Loader from "@iso/components/utility/loader";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LayoutApp from "@iso/containers/Layout/Layout";
const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <LayoutApp></LayoutApp>
      </Suspense>
    </ErrorBoundary>
  </Provider>
);

export default App;
