import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';

function Real_Main() {
    return (
        <>
            <main>
                <div className="towerBlock 60F">
                    <div className="txt T60F">
                        <Link to="/towerBlock_60F"><h2>60F</h2></Link>
                        <p>전망대, 수족관</p>
                    </div>
                </div>
                <div className="towerBlock 59F">
                    <div className="txt T59F">
                        <Link to="/towerBlock_59F"><h2>59F</h2></Link>
                        <p>워킹온더클라우드</p>
                    </div>
                </div>
                <div className="towerBlock 58F">
                    <div className="txt T58F">
                        <Link to="/towerBlock_58F"><h2>58F</h2></Link>
                        <p>터치더스카이</p>
                    </div>
                </div>
                <div className="towerBlock 57F">
                    <div className="txt T57F">
                        <Link to="/towerBlock_57F"><h2>57F</h2></Link>
                        <p>백리향</p>
                    </div>
                </div>
                <div className="towerBlock 56_2F">
                    <div className="txt T56_2F">
                        <Link to="/towerBlock_56_2F"><h2>56~2F</h2></Link>
                        <p>고층부, 중층부, 저층부 사무실.</p>
                        <p>일반인의 출입이 제한되어 있다.</p>
                    </div>
                </div>
                <div className="towerBlock 1F">
                    <div className="txt T1F">
                        <Link to="/towerBlock_1F"><h2>1F</h2></Link>
                        <p>로비, 하나은행, 한화금융플라자</p>
                    </div>
                </div>
                <div className="towerBlock GF">
                    <div className="txt TGF">
                        <Link to="/towerBlock_GF"><h2>GF</h2></Link>
                        <p>63스퀘어, 한화아쿠아플라넷</p>
                    </div>
                </div>
                <div className="towerBlock B2F">
                    <div className="txt TB2F">
                        <Link to="/towerBlock_B2F"><h2>B2F</h2></Link>
                        <p>한화생명 건강검진센터, 주차장</p>
                    </div>
                </div>
                <div className="towerBlock B3F">
                    <div className="txt TB3F">
                        <Link to="/towerBlock_B3F"><h2>B3F</h2></Link>
                        <p>왁스뮤지엄, 주차장</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Real_Main