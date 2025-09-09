import { useState } from "react";

import Header from './components/Header.jsx'; 
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
