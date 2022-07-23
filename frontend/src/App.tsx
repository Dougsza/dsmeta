import { useState } from "react";
import "./index.css";
import NotificationButton from "./components/NotificationButton";
import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
