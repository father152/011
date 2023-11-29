import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Сomponent/Layout";
import { About } from "./Сomponent/About/About.jsx";
import { Golovna } from "./Сomponent/Golovna/Golovna.jsx";
import { House } from "./Сomponent/House/House.jsx";
import { Bron } from "./Сomponent/Bron/Bron.jsx";
import { Contact } from "./Сomponent/Contact/Contact.jsx";
import {Bacota} from './Сomponent/Bron/Bacota.jsx'
import {Karpatu} from './Сomponent/Bron/Karpatu.jsx'
import {Kiev} from './Сomponent/Bron/Kiev.jsx'
import {Odessa} from './Сomponent/Bron/Odessa.jsx'

function App() {
  return (
    <>
      <Routes className="header">
        <Route path="/" element={<Layout />}>
          <Route index element={<Golovna />} />
          <Route path="bron" element={<Bron />} />
          <Route path="house" element={<House />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          // =========================BRON=========================
          
          <Route path="bacota" element={<Bacota />} />
          <Route path="karpatu" element={<Karpatu />} />
          <Route path="kiev" element={<Kiev />} />
          <Route path="odessa" element={<Odessa/>} />

          
        </Route>
      </Routes>
    </>
  );
}

export default App;
