import React, { useState, useEffect } from 'react';
import * as tauri from 'tauri/api/tauri'
import * as fs from "tauri/api/fs"
import logo from './logo.svg';
import './App.css';


interface AppProps {}

function App({}: AppProps) {
  const [file, setFile] = useState("")
  useEffect(() => {
    tauri.transformCallback
    fs.readDir("./").then(files => {
      const names = files.map(f => f.name)
      setFile(names.join(","))
    }).catch(console.log)
  }, []);
  // Return the App component.
  return (
    <div className="App">
      <p className="bg-red-400">aaaa</p>
      <p>{`${file}`}</p>
    </div>
  );
}

export default App;
