import styled from "styled-components"

const css = {
    DataContainer: styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      width: 600px;
      height: auto;
      min-height: 60px;
      border-radius: 8px;
      box-shadow: 0 0 3px grey;
      margin: 40px auto 40px;
      padding: 20px;
      font-family: "Montserrat Regular", sans-serif;
    `,
    ContentLine: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      width: 100%;
      margin-bottom: 10px;
    `,
    ContentCell: styled.span`
      display: block;
      position: relative;
      width: ${props => props.width};
      font-size: 14px;
      text-align: center;
    `,
    TypesLine: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      width: 600px;
      margin: 40px auto 0;
      font-family: "Montserrat Semibold", sans-serif;
    `,
    TypeItem: styled.div`
      display: block;
      position: relative;
      font-size: 13px;
      color: grey;
      margin-right: 40px;
      cursor: pointer;
    `
}

export default css
