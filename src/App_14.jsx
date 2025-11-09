import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayoutPage_14,
  BlogStaticPage_14,
  HomePage_14,
  BlogLocalJsonPage_14,
  BlogLocalJsonPage2_14,
  BlogNodePage_14,
  BookListPage_14,
  BlogSupaPage_14,
} from "./page";

import {
  T11_ErrorExamplePage_14,
  T12_UseStateBasicPage_14,
  T21_UseEffectCodeExamplePage_14,
} from "./page/tutorials";

import {
  Quiz1LayoutPage_14,
  Quiz1Page_14,
  TourStaticPage_14,
  TourStaticPage2_14,
  TourStaticPage3_14,
  TourNodePage_14,
} from "./page/quiz1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoutPage_14></HomeLayoutPage_14>,
    children: [
      {
        index: true,
        element: <HomePage_14></HomePage_14>,
      },
      {
        path: "static_14",
        element: <BlogStaticPage_14></BlogStaticPage_14>,
      },
      {
        path: "localjson_14",
        element: <BlogLocalJsonPage_14></BlogLocalJsonPage_14>,
      },
      {
        path: "localjson2_14",
        element: <BlogLocalJsonPage2_14></BlogLocalJsonPage2_14>,
      },
      {
        path: "node_14",
        element: <BlogNodePage_14></BlogNodePage_14>,
      },
      {
        path: "booklist_14",
        element: <BookListPage_14></BookListPage_14>,
      },
      {
        path: "supa_14",
        element: <BlogSupaPage_14></BlogSupaPage_14>,
      },
    ],
  },
  {
    path: "/tutorials",
    element: <HomeLayoutPage_14 />,
    children: [
      {
        path: "HomePage_14",
        element: <HomePage_14 />,
      },
      {
        path: "T11_14",
        element: <T11_ErrorExamplePage_14 />,
      },
      {
        path: "T12_14",
        element: <T12_UseStateBasicPage_14 />,
      },
      {
        path: "T21_14",
        element: <T21_UseEffectCodeExamplePage_14 />,
      },
    ],
  },
  {
    path: "/quiz1",
    element: <Quiz1LayoutPage_14 />,
    children: [
      {
        index: true,
        element: <Quiz1Page_14 />,
      },
      {
        path: "static_14",
        element: <TourStaticPage_14 />,
      },
      {
        path: "static2_14",
        element: <TourStaticPage2_14 />,
      },
      {
        path: "static3_14",
        element: <TourStaticPage3_14 />,
      },
      {
        path: "node_14",
        element: <TourNodePage_14 />,
      },
    ],
  },
]);

const App_14 = () => {
  return <RouterProvider router={router} />;
};

export default App_14;
