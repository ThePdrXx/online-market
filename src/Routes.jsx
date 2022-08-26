import { Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home'
import Finalized from './Pages/Finalized'

function ProjectRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/finalized" element={<Finalized />} />
        </Routes>
    )
}

export default ProjectRoutes