import React, { useState } from "react";
import Main from "./components/pages/main";
import Stat from "./components/pages/stat";
import Header from "./components/views/global/header";
import Footer from "./components/views/global/footer";
import Plan from "./components/pages/plan";

function App() {

    const [showPage, setShowPage] = useState("main")
    const [data, setData] = useState([])

    return (
    <React.Fragment>
        <Header action={setShowPage}></Header>
          {showPage === "main"
                ? <Main action={setData}></Main>
                : showPage === "stat"
                ? <Stat statData={data}></Stat>
                : <Plan></Plan> }
        <Footer></Footer>
    </React.Fragment>
    );
}

export default App;
