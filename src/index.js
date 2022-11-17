import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import Layout from './layout';
import Navbar from './navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { WagmiConfig, createClient } from 'wagmi';
import { getDefaultProvider } from 'ethers';

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})


const root = ReactDOM.createRoot(document.getElementById('root'));
// Path direct us to the right page
root.render(
  <WagmiConfig client={client}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="*" element={<App />} />
      </Route>
    </Routes>
    </BrowserRouter> 
  </WagmiConfig>
);

reportWebVitals();