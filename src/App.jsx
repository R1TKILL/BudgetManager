import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Páginas
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';

//Layouts
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

//Containers
import Content from './components/Containers/Content';

function App() {
  return (
      <Router>
        <Navbar />
        <Content customClass="min-height">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/company" element={<Company/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/newproject" element={<NewProject/>} />
            <Route path="/project/:id" element={<Project/>} />
          </Routes>
        </Content>
        <Footer />
      </Router>
  );
}

export default App;