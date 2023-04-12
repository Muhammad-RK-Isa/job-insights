import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import AppliedJobs from './AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Statistics from './Statistics/Statistics';
import './index.css';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter( [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => fetch('jobCategories.JSON')
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
        path: "/:jobId",
        element: <JobDetails/>,
        loader: async () => fetch('jobCategories.JSON')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)