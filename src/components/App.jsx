import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Registration from './Registration';
import Login from './Login';
import PersonalArea from './PersonalArea';
import MainPage from './MainPage';

export default function App({ user, favors }) {
  return (
    <div className="wrapper">
      <Header user={user} />
      <div className="content w-100">
        <Routes>
          <Route path="/" element={<MainPage user={user} />} />
          <Route path="/personalArea" element={<PersonalArea user={user} favors={favors} />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
