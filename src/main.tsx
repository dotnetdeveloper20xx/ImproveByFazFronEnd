import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Ensure correct import
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; //  Ensure correct import
import App from "./App";

// Create QueryClient instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Wrap the app with QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} /> {/* Enables DevTools */}
    </QueryClientProvider>
  </React.StrictMode>
);
