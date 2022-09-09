import { hot } from 'react-hot-loader/root';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './Pages/Main';
import Chat from './Pages/Chat';
import Home from './Pages/Home';
import DeveloperHelp from './Pages/DeveloperHelp';


function App() {
    
    
    return ( <div className = "App" >
            <Router>
                <Routes>
                    <Route path='/'element={<Main/>} />
                    <Route path='/Chat=:id' element={<Chat/>} />
                    <Route path='/Home' element={<Home/>}/>
                    <Route path='/DeveloperHelp' element={<DeveloperHelp/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default hot(App);