//import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Solutions } from "./components/Solutions";
import { Blog } from "./components/Blog";

import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Hero />
        <Solutions />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

export default App;
