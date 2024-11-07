import { RouterProvider } from "react-router-dom";
import { browserRouter } from "@/utils/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/utils/tanstack";

import "@/assets/styles/app.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={browserRouter} />
    </QueryClientProvider>
  );
}

export default App;
