import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListPage from "./pages/ListPage";
import ViewPage from "./pages/ViewPage";
import Header from "./components/Header";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import QuestionView from "./components/QuestionView";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<ListPage />} />
          <Route path='/view/:subTopicId' element={<QuestionView />} />
        </Routes>
      </Router>
    }
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
