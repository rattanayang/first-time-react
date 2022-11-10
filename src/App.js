// // import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Mybar from './pages/mybar/mybar';
// import './pages/react-flow-test/react-flow-test.css'
// import Flow from "./pages/Flow/Flow";

// import "./styles.css";


// // const Home = () => <h1>Home</h1>;
// // const About = () => <h1>About</h1>;
// // const Post = () => <h1>Post</h1>;
// // const Project = () => <h1>Project</h1>;

// function App() {
//   return (
//     <div className="my-app">
//       <nav className="navbar is-light" role="navigation" aria-label="main navigation">
//         <div className="navbar-menu">
//           <div className="navbar-end">
//             <a href="/" className="navbar-item">
//               Home
//             </a>
//             <a href="/reactflow" className="navbar-item">
//               reactFlow
//             </a>
//           </div>
//         </div>
//       </nav>

//       <div className="App container">
//         {/* <>{<Mybar />}</> */}
//         <Routes>
//           <Route path="/" element={<Mybar />} />
//           <Route path="/reactflow" element={<Flow />} />
//           {/* <Route path="/about" element={About} />
//         <Route path="/posts" element={Post} />
//         <Route path="/projects" element={Project} /> */}
//         </Routes>
//       </div>
//       <div className="Apps"><Flow /></div>
//     </div>
//   );
// }

// export default App;




import React from "react";

import Flow from "./pages/Flow/Flow";
import Mybar from "./pages/mybar/mybar";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-end">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/reactflow" className="navbar-item">
              reactFlow
            </a>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Mybar />} />
        <Route path="/reactflow" element={<Flow />} />
      </Routes>

        {/* <Flow /> */}
    </div>
  );
}

