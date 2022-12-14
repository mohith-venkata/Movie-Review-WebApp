import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';
import { Routes, Route } from 'react-router-dom';
import Reviews from './components/Review/Reviews';
import Nav from './components/Navbar/Nav';
import AddMovie from './components/Movie/AddMovie';
import './app.css';
const ROLES = {
  'User': 2001,
  'Critic': 1984,
  'Admin': 5150
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        
        <Route path="/movies/:id" element={<Reviews />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="admin" element={<Admin />} />
        {/* we want to protect these routes */}
        <Route element={<PersistLogin />}>
          
          <Route element={<RequireAuth allowedRoles={[ROLES.User,ROLES.Critic,ROLES.Admin]} />}>
                  <Route path="addmovie" element={<AddMovie />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>


          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} /> 
          </Route>


        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;