// import hrimg from '../images/hrimg.webp'
import { useState } from "react"
import Moduleone from "./Moduleone"
import hrimg from '../images/hrimg.webp'

function Module(props) {

    let [moduleone, setModuleone] = useState(true)

    function handlemoudelone() {
        setModuleone(!moduleone)
    }
    return (
        <>
            <div>
                {
                    moduleone === true ?
                        <div className="main">
                            <figure className="flex-60">
                                <img src={hrimg} alt="" />
                            </figure>
                            <div className="flex-30 module-btn">
                                <button className="home-btn" onClick={props.enter}>Home</button>
                                <button onClick={handlemoudelone}>Module One</button>
                                <button>Module Two</button>
                                <button>Module Three</button>
                                <button>Module Four</button>
                                <button>Module Five</button>
                                <button className='enter-btn' >Select Module</button>
                            </div>

                        </div>
                        :
                        <Moduleone />
                }
            </div>
        </>
    )
}

export default Module