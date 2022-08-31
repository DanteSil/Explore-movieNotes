import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { MovieDetails } from '../pages/MovieDetails';
import { Profile } from '../pages/Profile';
import { New } from '../pages/New'

export function AppRoutes() {
  return(
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/details/:id' element={<MovieDetails/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/new' element={<New/>}/>
  </Routes>
  )
}