//import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Solutions } from "./components/Solutions";
import { Cases } from "./components/Cases";
import { Blog } from "./components/Blog";
import { Team } from "./components/Team";
import { CallBack } from "./components/Callback";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <Header /> */}
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
