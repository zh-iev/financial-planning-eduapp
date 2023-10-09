import React, { useState } from "react";
import Main from "./components/pages/main";
import Stat from "./components/pages/stat";
import Header from "./components/views/global/header";
import Footer from "./components/views/global/footer";
import Plan from "./components/pages/plan";
import {Route, Routes} from "react-router-dom";

function App() {

    //const [showPage, setShowPage] = useState("main")
    // все комменты были для ручного роутинга
    const [data, setData] = useState([])

    return (
    <React.Fragment>
        <Header /*action={setShowPage}*//>
        <Routes>
            <Route
                path={'/main'}
                element={<Main action={setData}/>}
            />
            <Route
                path={'/stat'}
                element={<Stat statData={data}/>}
            />
            <Route
                path={'/plan'}
                element={<Plan/>}
                />
        </Routes>
          {/*showPage === "main"
                ? <Main action={setData}></Main>
                : showPage === "stat"
                ? <Stat statData={data}></Stat>
                : <Plan></Plan> */}
        <Footer></Footer>
    </React.Fragment>
    );
}

export default App;
