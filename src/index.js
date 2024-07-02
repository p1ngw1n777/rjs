import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider,  createBrowserRouter} from 'react-router-dom';
import Page1 from './Components/Pages/Page1';
import PageLogin from './Components/Pages/PageLogin';
import PageReg from './Components/Pages/PageReg';
import PageCatalog from './Components/Pages/PageCatalog'
import PageForQueryCatalog from './Components/Pages/PageForQueryCatalog';
import PageOpt from './Components/Pages/PageOpt';
import PageDelivery from './Components/Pages/PageDelivery';
import PageContacty from './Components/Pages/PageContacty';
import { PersistGate } from 'redux-persist/integration/react'


import './global.css'
import { Provider } from 'react-redux';
import { persistor, store } from './Store/store';
import PageUserCabinet from './Components/Pages/PageUserCabinet';
import PageAdmin from './Components/Pages/PageAdmin';
import PageCart from './Components/Pages/PageCart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1/>
  },
  {
    path: "/loginform",
    element: <PageLogin/>
  }, 
  {
    path: "/registration",
    element: <PageReg/>
  },
  {
    path: "/catalog",
    element: <PageCatalog/>
  },
  {
    path: "/opt",
    element: <PageOpt/>
  },
  {
    path: "/delivery",
    element: <PageDelivery/>
  },
  {
    path: "/contacty",
    element: <PageContacty/>
  },
  {
    path: "/adminka",
    element: <PageAdmin/>
  },
  {
    path: "user/cabinet",
    element: <PageUserCabinet/>
  },
  {
    path:  "catalog/lashes", 
    element: <PageForQueryCatalog/>
  },
  {
    path: "catalog/glue",
    element: <PageForQueryCatalog/>
  },
  {
    path: "catalog/preparations",
    element: <PageForQueryCatalog/>
  },
  {
    path: "catalog/twizers",
    element: <PageForQueryCatalog/>
  },
  {
    path: "catalog/consumables",
    element: <PageForQueryCatalog/>
  },
  {
    path: "catalog/dop-oborudovanie",
    element: <PageForQueryCatalog/>
  },
  {
    path: "cart",
    element: <PageCart/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
    </PersistGate>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

