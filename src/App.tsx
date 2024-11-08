import { RouterProvider } from "react-router-dom";
import { browserRouter } from "@/utils/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/utils/tanstack";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "@/assets/styles/app.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={browserRouter} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
