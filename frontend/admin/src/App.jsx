import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import SignIn from './page/AuthPage/SignIn';
import Dashboard from './page/Dashboard/Index'
import Layout from './layouts/Layout';
import { AppProvider } from './context/context';

function App() {
  return (
    <>
      <AppProvider>
        <Layout />
     </AppProvider>
    </>
  );
}

export default App;
