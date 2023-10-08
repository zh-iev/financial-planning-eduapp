import React, { useState } from "react";
import Main from "./components/pages/main";
import Stat from "./components/pages/stat";
import Header from "./components/views/global/header";
import Footer from "./components/views/global/footer";

function App() {

    const [showPage, setShowPage] = useState("main")
    const [data, setData] = useState([])

    return (
    <React.Fragment>
        <Header action={setShowPage}></Header>
          {showPage === "main"
                ? <Main action={setData}></Main>
                : <Stat statData={data}></Stat>}
        <Footer></Footer>
    </React.Fragment>
    );
}

export default App;
