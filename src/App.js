import { ThemeProvider } from 'styled-components';
import Footer from './components/footer/Footer';
import GlobalStyles from './styles/GlobalStyles';
import { dark, light } from './styles/Themes.js';
import Navigation from './components/navigation/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Roadmap from './components/sections/Roadmap';
import Showcase from './components/sections/Showcase';
import Team from './components/sections/Team';

import Faq from './components/sections/Faq';
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    
    return (
        <div className='App'>
            <GlobalStyles />
            <ThemeProvider theme={darkMode ? dark : light}>
                <Navigation darkMode={darkMode} setDarkMode={setDarkMode}/>
                <Home />
                <About />
                <Roadmap />
                <Showcase />
                <Team />
                <Faq />
                <Footer />
                <ScrollToTop/>
            </ThemeProvider>
        </div>
    );
}

export default App;
