import { Routes, Route} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Galleries from './pages/Galleries';
import { UserHome, UserHome1, UserHome2, UserHome2about } from './pages/UserHome';

import Home from './pages/Home';
export const App= () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Galleries />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

  );
}

export const SubDomain= () => {
  return (
      <Routes>
        <Route path="/" element={<UserHome />} />
      </Routes>
  );
}

export const SubDomain1= () => {
  return (
      <Routes>
        <Route path="/" element={<UserHome1 />} />
      </Routes>
  );
}
export const SubDomain2= () => {
  return (
      <Routes>
        <Route path="/" element={<UserHome2 />} />
        <Route path="/about" element={<UserHome2about />} />
      </Routes>
  );
}

