import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import RealTimeObjectDetection from "./pages/RealTimeObjectDetection";
import Dashboard from "./pages/Dashboard";
import RealTimeBodySegmentation from "./pages/RealTimeBodySegmentation";
import QnaBert from "./pages/QnaBert";

import "../src/assets/css/styles.css"

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/rtod" element={<RealTimeObjectDetection/>}/>
                <Route path="/rtbs" element={<RealTimeBodySegmentation/>}/>
                <Route path="/qna" element={<QnaBert/>}/>
            </Routes>
        </Router>
    );
}

export default App;
