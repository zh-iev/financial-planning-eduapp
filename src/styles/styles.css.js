import styled from "styled-components"

const css = {
    HeaderContainer: styled.header`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: relative;
      width: 100%;
      height: 80px;
      background-color: #17263f;
      padding: 0 30px;
    `,
    FooterContainer: styled.footer`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: relative;
      width: 100%;
      height: 80px;
      background-color: #a9a9a9;
    `,
    HeaderCSS: {
        Logo: styled.div`
          font-size: 30px;
          color: #B0F347;
          font-family: "Montserrat Semibold",sans-serif;
        `,
        MenuContainer: styled.nav`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          position: relative;`
    },
}

export default css
