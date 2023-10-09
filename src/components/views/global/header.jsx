import React from "react";
import css from "../../../styles/styles.css";
import {Link, useNavigate} from "react-router-dom";

const {HeaderContainer, HeaderCSS} = css

const buttonCSS = {
    display: 'block',
    padding: '10px 14px 12px',
    borderRadius: '6px',
    backgroundColor: '#B0F347',
    cursor: 'pointer',
    marginLeft: '10px',
}

const Header = (props) => {

    //const { action } = props

    const navigate = useNavigate()

    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderCSS.Logo>FINANCE PLAN</HeaderCSS.Logo>
                <HeaderCSS.MenuContainer>
                    <button /*onClick={() => action('main')}*/
                        onClick={() => navigate("/main")}
                        style={buttonCSS}>
                        Main
                    </button>
                    <button /*onClick={() => action('stat')}*/
                        onClick={() => navigate("/stat")}
                        style={buttonCSS}>
                        Statistic
                    </button>
                    <button /*onClick={() => action('plan')}*/
                        onClick={() => navigate("/plan/hello")}
                        style={buttonCSS}>
                        Planning
                    </button>
                </HeaderCSS.MenuContainer>
            </HeaderContainer>
        </React.Fragment>
    )
}

export default Header
