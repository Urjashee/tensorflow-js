import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import RealTimeObjectDetection from "./pages/real-time-object-detection";
import Dashboard from "./pages/Dashboard";

import "../src/assets/css/styles.css"

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/rtod" element={<RealTimeObjectDetection/>}/>
            </Routes>
        </Router>
    );
}

export default App;
