import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AlbumInformation from '../album/components/AlbumInformation/AlbumInformation';
import Albums from '../album/components/Albums/Albums';

const Navigation = () => 
<BrowserRouter>
  <Routes>
    <Route path="/albums/:id" element={<AlbumInformation/>}/>
    <Route exact path="/albums" element={<Albums/>}/>
    <Route exact path="/" element={<Navigate to="/albums"/>} />
  </Routes>
</BrowserRouter>

export default Navigation;