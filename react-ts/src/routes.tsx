import Recap from '../Pages/Recap'
import Layout from '../Layout/Layout'


export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "recap", element: <Recap /> },
    ],
  },
];