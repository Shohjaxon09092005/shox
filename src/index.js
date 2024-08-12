import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import SplashScreen from './pages/SplashScreen';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Onboarding from './pages/Onboarding';
import Onboarding2 from './pages/Onboarding2';
import Onboarding3 from './pages/Onboarding3';
import Hero from './pages/Hero';
import ForgotPassword from './pages/ForgotPassword';
import EmailVery from './pages/EmailVery';
import HeroBanner from './pages/HeroBanner';
import DocProfil from './pages/DocProfil';
import Navbat from './pages/Navbat';
import NavbatTime from './pages/NavbatTime';
import TimeVideo from './pages/TimeVideo';
import TimeXabar from './pages/TimeXabar';
import TelDoc from './pages/TelDoc';
import VideoDoc from './pages/VideoDoc';
import XabarDoc from './pages/XabarDoc';
import MyDoc from './pages/MyDoc';
import Profil from './pages/Profil';
import Dori from './pages/Dori';
import Xulosa from './pages/Xulosa';
import Malumot from './pages/Malumot';
import Royxat from './pages/Royxat';
import Story from './pages/Story';
import Dorixona from './pages/Dorixona';

const appRouter = createBrowserRouter([{
  element: <App />,
  path: "/",
  errorElement: <ErrorPage />,
  children: [{

    path: "/",
    element: <SplashScreen />

  },
  {
    path:"/signUp",
    element:<SignUp/>
  },
  {
    path:"/signIn",
    element:<SignIn/>
  },
  {
    path:"/forgot",
    element:<ForgotPassword/>
  },
  {
    path:"/email",
    element:<EmailVery/>
  },
  {
    path:"/onB1",
    element:<Onboarding/>
  },
  {
    path:"/onB2",
    element:<Onboarding2/>
  },
  {
    path:"/onB3",
    element:<Onboarding3/>
  },
  {
    path:"/hero",
    element:<Hero/>
  },
  {
    path:"/heroBanner",
    element:<HeroBanner/>
  },
  {
    path:"/docPro",
    element:<DocProfil/>
  },
  {
    path:"/navbat",
    element:<Navbat/>
  },
  {
    path:"/navbatTime",
    element:<NavbatTime/>
  },
  {
    path:"/timeVideo",
    element:<TimeVideo/>
  },
  {
    path:"/timeXabar",
    element:<TimeXabar/>
  },
  {
    path:"/telDoc",
    element:<TelDoc/>
  },
  {
    path:"/videoDoc",
    element:<VideoDoc/>
  },
  {
    path:"/xabarDoc",
    element:<XabarDoc/>
  },
  {
    path:"/myDoc",
    element:<MyDoc/>
  },
  {
    path:"/profil",
    element:<Profil/>
  },
  {
    path:"/dori",
    element:<Dori/>
  },
  {
    path:"/xulosa",
    element:<Xulosa/>
  },
  {
    path:"/malumot",
    element:<Malumot/>
  },
  {
    path:"/royxat",
    element:<Royxat/>
  },
  {
    path:"/story",
    element:<Story/>
  },
  {
    path:"/doriroom",
    element:<Dorixona/>
  },
  
  ],

},

]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

