import { observer } from "mobx-react-lite";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../components/Layout";
import { App } from "../container/App";
import { Auth } from "../container/Auth";
import { TodosStore } from "../store/todos";
import { TokenStore } from "../store/token";

const publicRouter = createBrowserRouter([
  {
    element: <Auth />,
    children: [
      {
        path: "/",
        element: <Auth />,
      },
    ],
  },
]);

const privateRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => TodosStore.fetchTodos(),
      },
    ],
  },
]);

const Root = observer(() => {
  const token = TokenStore.getToken();
  const router = token ? privateRouter : publicRouter;

  return <RouterProvider router={router} />;
});

export { Root };
