import  { useTheme } from '../context/ThemeContext';
import Button from './Button';
import Header from './Header';
import ProductList from './ProductList';
import Profile from './Profile';

const Container = () => {
    const {theme,setTheme}=useTheme()
  return (
    <div className={`app ${theme==='dark'? theme :''}`}>
     <Header/>
     <hr/>
     <Button/>
     <hr/>
     <Profile/>
     <hr/>
     <ProductList/>
    </div>
  )
}

export default Container