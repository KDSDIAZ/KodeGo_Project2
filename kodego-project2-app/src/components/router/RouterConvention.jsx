import Homepage from '../pages/homepage';
import Login from '../pages/adminLogin';
import Register from '../pages/adminRegister';
import Dashboard from '../pages/adminDashboard';
import ViewRecipe from '../pages/viewRecipe';
import NewRecipe from '../pages/newRecipe';
import UpdateRecipe from '../pages/updateRecipe';
import React from 'react'
import { Route, Routes } from 'react-router-dom';

export default function RouterConvention() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/admin" element={<Login />} />
      <Route path="/admin-register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/view" element={<ViewRecipe />} />
      <Route path="/add" element={<NewRecipe />} />
      <Route path="/edit/:id" element={<UpdateRecipe />} />
      <Route path="/view/:id" element={<ViewRecipe />} />
    </Routes>
  );
}

