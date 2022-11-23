import bookimg from '../images/book.jpeg'
import hrimg from '../images/hrimg.webp'
import Module from './Module'
import { useState } from 'react'


function Moduleone() {

    let [tab1, settab1] = useState(true)

    let [tab2, setTab2] = useState(false)

    let [tab3, setTab3] = useState(false)

    let [back , setback] = useState(true)

    function handletab1() {
        settab1(true)
        setTab2(false)
        setTab3(false)
    }

    function handletab2() {
        setTab2(true)
        settab1(false)
        setTab3(false)
    }

    function handletab3() {
        setTab3(true)
        setTab2(false)
        settab1(false)
    }

    function handleback(){
        setback(false)
    }

    return (
        <>
            {
                back === false ? <Module/>
                :
                <div>
                     <div className='header'>
                <h3>Module One</h3>
                <span className='back-btn' onClick={handleback}>Back</span>
            </div>
            
            {
                tab1 === true ?

                    <div>

                        <div className='tab-block '>
                            <span onClick={handletab1} className={tab1 === false ? "tab" : "untab"}>Tab1</span>
                            <span onClick={handletab2} className={tab1 === true ? "tab" : "untab"}>Tab2</span>
                            <span onClick={handletab3} className={tab1 === true ? "tab" : "untab"}>Tab3</span>

                        </div>
                        <div className=' center'>
                            <figure className='flex-45'>
                                <img className='tabimg' src={bookimg} alt='' />
                            </figure>
                            <article className='flex-45'>
                                <h2>Morbio ujhhb jhgjh</h2>
                                The articleship or the practical training is the
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
                            </article>
                        </div>
                    </div>
                    :
                    ""
            }

            <div>
                {
                    tab2 === true ?
                        <div>
                            <div className='tab-block '>
                                <span onClick={handletab1} className={tab1 === true ? "untab" : "tab"}>Tab1</span>
                                <span onClick={handletab2} className={tab1 === true ? "tab" : "untab"}>Tab2</span>
                                <span onClick={handletab3} className={tab1 === true ? "untab" : "tab"}>Tab3</span>

                            </div>
                            <div className=' center'>
                                <figure className='flex-45'>
                                    <img className='tabimg' src={hrimg} alt='' />
                                </figure>
                                <article className='flex-45'>
                                    <h2>Morbio ujhhb jhgjh</h2>
                                    The articleship or the practical training is the
                                    backbone of Chartered Accountancy (CA) and such
                                    other professional courses as it gives an opportunity
                                    to the articled assistants to acquire on-the-job work
                                    experience of a professional nature, inculcate a disciplined
                                    experience of a professional nature, inculcate a disciplined
                                    attitude for hard work, develops
                                    necessary skills in applying theoretical
                                    knowledge to practical situation.
                                </article>
                            </div>
                        </div>
                        :
                        ""
                }

                {
                    tab3 === true ?
                        <div>
                            <div className='tab-block '>
                                <span onClick={handletab1} className={tab1 === false ? "tab" : "untab"}>Tab1</span>
                                <span onClick={handletab2} className={tab1 === false ? "tab" : "untab"}>Tab2</span>
                                <span onClick={handletab3} className={tab1 === true ? "tab" : "untab"}>Tab3</span>

                            </div>
                            <div className=' center'>
                                <figure className='flex-45'>
                                    <img className='tabimg' src={bookimg} alt='' />
                                </figure>
                                <article className='flex-45'>
                                    <h2>Morbio ujhhb jhgjh</h2>
                                    The articleship or the practical training is the
                                    backbone of Chartered Accountancy (CA) and such
                                    other professional courses as it gives an opportunity
                                    to the articled assistants to acquire on-the-job work
                                    experience of a professional nature, inculcate a disciplined
                                    attitude for hard work, develops
                                </article>
                            </div>
                        </div>
                        :
                        ""
                }
            </div>
                </div>
            }


           
        </>
    )
}

export default Moduleone