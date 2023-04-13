import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/header/navigator/Home';

import { Authpage } from './pages/main/Авторизация/Authpage';
import { WindowAuth } from './pages/main/Авторизация/WindowAuth';
import { SearchOptions } from './pages/main/searchOptions/SearchOptions';

import { Layout } from './components/Layout';
import { PersonalCabinet } from './PersonalCabinet/PersonalCabinet/PersonalCabinet';
import { RegistrPage } from './pages/main/RegistrationForm/RegistrPage';
import { Login } from './pages/main/Авторизация/Login';


function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="auth" element={<Authpage />}/>
        <Route path='windowauth' element={<WindowAuth />}/>
        <Route path='personalcabinet/:searchoptions' element={<SearchOptions />} />
        <Route path='personalcabinet' element={<PersonalCabinet />} />
        <Route path='registrpage' element={<RegistrPage />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
   </>
  );
}

export default App;
