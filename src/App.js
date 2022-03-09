import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navbar from './components/Navbar';
import CreateTask from "./components/CreateTask";

 export default function App() {
  return (
    <div>
      <CreateTask/>
    </div>
  );
 }
