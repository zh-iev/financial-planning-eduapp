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
                        <Link to={'/main'} style={{textDecoration: "none", color: "inherit"}}>Main</Link>
                    </button>
                    <button /*onClick={() => action('stat')}*/
                        onClick={() => navigate("/stat")}
                        style={buttonCSS}>
                        <Link to={'/stat'} style={{textDecoration: "none", color: "inherit"}}>Statistic</Link>
                    </button>
                    <button /*onClick={() => action('plan')}*/
                        onClick={() => navigate("/plan")}
                        style={buttonCSS}>
                        <Link to={'/plan'} style={{textDecoration: "none", color: "inherit"}}>Planning</Link>
                    </button>
                </HeaderCSS.MenuContainer>
            </HeaderContainer>
        </React.Fragment>
    )
}

export default Header
