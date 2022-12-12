//css
import "./App.css";

//Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import Nav from "./components/Nav";
import Err404 from "./pages/Err404";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="max-w-screen-md mx-auto pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/article-list" element={<ArticleList />} />
            <Route path="/article/:name" element={<Article />} />
            <Route path="*" element={<Err404 />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
