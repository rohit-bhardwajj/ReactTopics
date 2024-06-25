import { useEffect,useState } from 'react';
import './App.css'
import { ThemeProvider } from './context/theme'
import Card from './components/Card';
import ThemeBtn from './components/Themebtn';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = ()=>{
    setThemeMode('light');
  }
  const darkTheme = ()=>{
    setThemeMode('dark');
  }

  useEffect(()=>{
    const elemnt=document.querySelector('html').classList;
    elemnt.remove('light','dark');
    elemnt.add(themeMode) //here we are removing light,dark classes from html body , then we're adding themeMode as a class which will result in either light or dark for theme changing 

  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                               <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>

  )
}

export default App
