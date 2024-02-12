import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ThemeContext} from "./helpers/context.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Foooter.jsx";
import Courses from "./pages/Courses.jsx";
import Index from "./pages/Index.jsx";
import Todo from "./pages/Todo.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
    const colorState = useState({
        colorFont: '#333',
        colorBg: '#FFFFFF'
    });
    return (
        <ThemeContext.Provider value={colorState}>
            <BrowserRouter>
                <div className="flex flex-col h-[100vh] font-[sans-serif]">
                    <Header/>
                        <Routes>
                            <Route path="/" element={<Index/>}/>
                            <Route path="/courses" element={<Courses/>}/>
                            <Route path="/todo" element={<Todo/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                        </Routes>
                    <Footer/>
                </div>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}


