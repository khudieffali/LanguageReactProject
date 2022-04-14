import './App.css';
import Container from './components/Container'
import { LanguageProvider } from './context/LanguageContext';
import {ThemeProvider} from './context/ThemeContext';
import {UserProvider} from './context/UserContext';


function App() {
  return (
    <div className='app' >
       <ThemeProvider>
         <UserProvider>
           <LanguageProvider>
          <Container/>
           </LanguageProvider>
         </UserProvider>
   </ThemeProvider>
    </div>

  );
}

export default App;
