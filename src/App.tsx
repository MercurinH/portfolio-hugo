//import Navbar from './components/Navbar';  // Barre de navigation
//import Footer from './components/Footer';  // Pied de page
import Home from './pages/Home';
import About from "./pages/About.tsx";
import Projects from './pages/Projects';
import Contact from "./pages/Contact.tsx";

function App() {
    return (
        <div className="App">

            <Home />  {/* Affichage de la page d'accueil */}
            <About />  {/* Affichage de la page "À propos" */}
            <Projects />  {/* Affichage de la page "Projets" */}
            <Contact />  {/* Affichage de la page "Contact" */}

            {/*<Navbar />  Barre de navigation */}
            {/*<Footer />  Pied de page */}
        </div>
    );
}

export default App;