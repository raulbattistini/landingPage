import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { TYP } from './TYP';

export default function RoutesList () {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/thank-you" element={<TYP/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  )
}
