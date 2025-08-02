import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashCursor from './Animations/SplashCursor/SplashCursor.jsx';
import Navbar from './Navbar/Navbar';
import AboutMe from './Abouts/About.jsx';
import Background from './Backgroundscroll/Background.jsx';
import Stack from './Stack/Stack.jsx';
import Experience from './Experience/Experience.jsx';
import Project from './project/project.jsx';
import MyComponent from './form/forms.jsx'; // <-- your form (uses toast)
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="background-wrapper">
              <div className="silk-background">{/* <Silk /> */}</div>

              <Background />
              <SplashCursor />

              {/* Sections */}
              <AboutMe />
              <Stack />
              <Experience />
              <Project />
              <MyComponent /> {/* form shows toast on success/error */}
            </div>
          }
        />
      </Routes>

      {/* Toasts render once for the whole app */}
 
    </BrowserRouter>
  );
}

export default App;
