import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import JobDetails from './Components/JobDetails/JobDetails';
import NotFound from './Components/NotFound/NotFound';
import Statistics from './Components/Statistics/Statistics';
import './index.css';

const router = createBrowserRouter( [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "statistics",
        element: <Statistics />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "applied_jobs",
        element: <AppliedJobs />
      },
      {
        path: "job/:jobId",
        element: <JobDetails/>,
        loader: async () => fetch('/jobs.JSON')
      },
      {
        path: '*',
        element: <NotFound/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
