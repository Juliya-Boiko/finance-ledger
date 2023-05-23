import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Solutions } from "./components/sections/Solutions";
import { Cases } from "./components/sections/Cases";
import { Blog } from "./components/sections/Blog";
import { Team } from "./components/sections/Team";
import { CallBack } from "./components/sections/Callback";
import { Footer } from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Cases />
        <Blog />
        <Team />
        <CallBack />
      </main>
      <Footer />
    </>
  );
}

export default App;
