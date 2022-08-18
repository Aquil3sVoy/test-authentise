const routes = [
  {
    path: "/",
    loader: () => import("src/views/home/RenderPage"),
  },
].filter(Boolean);

// eslint-disable-next-line import/no-anonymous-default-export
export default { routes };
