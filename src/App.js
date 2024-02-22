
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import FlatDetail from './components/FlatDetail';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact"  element={<Contact/>}></Route>
          <Route path="/about"  element={<About/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/blog/:id"  element={<BlogDetail/>}></Route>
          <Route path="/flat/:slug"  element={<FlatDetail/>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
