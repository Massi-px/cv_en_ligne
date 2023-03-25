import React, {useState, useEffect} from "react";
import './assets/css/App.css';
import Loader from './components/Loader.js';
import MuiNavbar from "./components/MuiNavbar";
function App() {

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true)
        setTimeout(()=> {
            setLoader(false);
        },3000)
    }, [])

    return loader ?(
            <Loader />
        )
        :
        (
                <div className="App">
                    <header className="App-header">
                        <MuiNavbar/>
                    </header>

                    <body className="App-body">


                    </body>

                </div>
        );
}

export default App;
