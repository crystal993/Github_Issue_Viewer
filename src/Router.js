
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IssuDetail from './pages/IssueDetail'
import NotFoundPage from './pages/NotFoundPage'
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/:id" element={<IssuDetail/>}/>
      <Route path="/error" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Router