import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider,  createBrowserRouter} from 'react-router-dom';
import Page1 from './Components/Pages/Page1';

import './global.css'
import { Provider } from 'react-redux';
import { store } from './Store/store';
import PageLogin from './Components/Pages/PageLogin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1/>
  },
  {
    path: "/loginform",
    element: <PageLogin/>
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

