import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Players from "../../tennis/components/Players/Players";
import PlayerInformation from "../../tennis/components/PlayerInformation/PlayerInformation";

const Router = () =>
    <BrowserRouter>
        <Routes>
            <Route path="/players/:id" element={<PlayerInformation/>}/>
            <Route path="/players" element={<Players/>}/>
            <Route path="/" element={<Navigate to="players/"/>}/>
        </Routes>
    </BrowserRouter>

export default Router;