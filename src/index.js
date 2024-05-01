import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider,  createBrowserRouter} from 'react-router-dom';
import Page1 from './Components/Pages/Page1';
import PageLogin from './Components/Pages/PageLogin';
import PageReg from './Components/Pages/PageReg';
import PageCatalog from './Components/Pages/PageCatalog'

import './global.css'
import { Provider } from 'react-redux';
import { store } from './Store/store';
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
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

