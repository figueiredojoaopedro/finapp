import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ConverterSection from "./Sections/ConverterSection/ConverterSection";
import './App.css';
import { Tabela } from "./components/Tabela/Tabela";
import SloganHomePage from './components/Slogan/SloganHomePage';


function App() {
  return (
    <div className="w-full h-full bg-gradient-to-t from-slate-700 to-zinc-900">
      <header>
        <Navbar></Navbar>
      </header>
      <div className="flex flex-col justify-center items-center ">
        <SloganHomePage></SloganHomePage>
        <ConverterSection></ConverterSection>
      </div>

      <Tabela.HeaderBody>
        
      </Tabela.HeaderBody>
      {/* chart about the world population... what does it have to do with the app, idk kkkkkkkk */}
      <div>
        
      </div>
    </div>
  );
}

export default App;
