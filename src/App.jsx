import { useState } from "react";
import data from "./data";
import People from "./People";

const App = () => {
  const [people, setPersonsList] = useState(data);

  const handleClearAll = () => {
    setPersonsList([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <People people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={handleClearAll}
        >
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
