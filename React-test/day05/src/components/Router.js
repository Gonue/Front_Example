import { BrowserRouter, Routes } from "react-router-dom"

const AppRouter = (props) =>{
    return(<BrowserRouter>
    <Routes>
    <Route path="/" element={<Profile></ㅖ>} />
        <Route path="/" element={<Home></Home>} />
    </Routes>
    </BrowserRouter>)
}