import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ConverterSection from "./Sections/ConverterSection/ConverterSection";
import './App.css';
import { Tabela } from "./components/Tabela/Tabela";

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-slate-700 to-zinc-900">
      <header>
        <Navbar></Navbar>
      </header>
      <body>
        <ConverterSection></ConverterSection>
      </body>

      <Tabela.HeaderBody>
        
      </Tabela.HeaderBody>
    </div>
  );
}

export default App;
