import "./body.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component
import { QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);