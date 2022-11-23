import hrimg from '../images/hrimg.webp'

import Module from './Module'
import { useState } from 'react'

function Main() {

    let [enter, setEnter] = useState(true)

    function handleenter() {
        setEnter(!enter)
    }

    return (
        <>
            <div>
                {
                    enter === true ?
                        <div className='main'>
                            <figure className='flex-60'>
                                <img src={hrimg} alt="" />
                            </figure>
                            <div className='flex-30 main-content'>
                                <h1>Fusce sem magna pharetra curus</h1>
                                <p>The articleship or the practical training is the
                                    backbone of Chartered Accountancy (CA) and such
                                    other professional courses as it gives an opportunity
                                    to the articled assistants to acquire on-the-job work
                                    experience of a professional nature, inculcate a disciplined
                                    attitude for hard work, develops
                                    necessary skills in applying theoretical
                                    knowledge to practical situation.
                                    backbone of Chartered Accountancy (CA) and such
                                    other professional courses as it gives an opportunity
                                    to the articled assistants to acquire on-the-job work
                                    experience of a professional nature, inculcate a disciplined
                                    attitude for hard work, develops
                                    necessary skills in applying theoretical
                                    knowledge to practical situation.
                                </p>
                                <button className='enter-btn' onClick={handleenter}>Enter</button>
                            </div>
                        </div> 
                        :
                        <div>
                            <Module enter={handleenter} />
                        </div>
                }
            </div>
        </>
    )
}

export default Main