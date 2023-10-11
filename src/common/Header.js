import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Header() {
    const H_lis = document.querySelectorAll("header ul li");
    const H_pic = document.querySelector(".el.pic");

    H_lis.addEventListener("click", (e) => {
        if (H_lis.querySelector("on")) {

        }
        e.target.classList.add("on");

    })


    return (
        <>
            <header>
                <h1 className="H_logo"><Link to="/">LOGO</Link></h1>
                <article>
                    <h2 className="H_logo"><Link to="/">Home</Link></h2>
                </article>
                <ul>
                    <li className="60F on"><Link to="/towerBlock_60F">60F</Link></li>
                    <li className="59F"><Link to="/towerBlock_59F">59F</Link></li>
                    <li className="58F"><Link to="/towerBlock_58F">58F</Link></li>
                    <li className="57F"><Link to="/towerBlock_57F">57F</Link></li>
                    <li className="2~56F"><Link to="/towerBlock_56_2F">56~2F</Link></li>
                    <li className="1F"><Link to="/towerBlock_1F">1F</Link></li>
                    <li className="GF"><Link to="/towerBlock_GF">GF</Link></li>
                    <li className="B2F"><Link to="/towerBlock_B2F">B2F</Link></li>
                    <li className="B3F"><Link to="/towerBlock_B3F">B3F</Link></li>

                    <div className="el_pic">
                        <img src={process.env.PUBLIC_URL + "/img/free-icon-elevator-5811526.png"} alt="엘레베이터 아이콘" />
                    </div>
                </ul>

            </header>
        </>
    )
}

export default Header