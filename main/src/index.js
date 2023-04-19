import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import Nuclear from './pages/Nuclear';
import About from './pages/About';
import Signup from './pages/Signup';
import Genome_editing from './pages/Genome_editing';
import Education from './pages/Education';
import Climate_change from './pages/Climate_change';
import Population from './pages/Population';
import Cyber_threats from './pages/Cyber_Threats';
import Contactus from './pages/Contactus';
import Discussions from './pages/Discussions';
import News from './pages/News';
import { Auth0Provider } from "@auth0/auth0-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "nuclear",
    element: <Nuclear/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "education",
    element: <Education/>,
  },
  {
    path: "genome_editing",
    element: <Genome_editing/>,
  },
  {
    path: "cyber_threats",
    element: <Cyber_threats/>,
  },
  {
    path: "population",
    element: <Population/>,
  },
  {
    path: "Climate_change",
    element: <Climate_change/>,
  },
  {
    path: "signup",
    element: <Signup/>,
  },
  {
    path: "contactus",
    element: <Contactus/>,
  },
  {
    path: "discussions",
    element: <Discussions/>,
  },
  {
    path: "news",
    element: <News/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
    <Auth0Provider
      domain="dev-57amqwcn7g0o1dtq.us.auth0.com"
      clientId="5ppsY0yBCXK81ONnCu5MpFqXEseZtRsH"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >{<RouterProvider router={router}/>}
    <BrowserRouter>
    <React.StrictMode>
    </React.StrictMode></BrowserRouter>
    </Auth0Provider>
    
    </>
);
