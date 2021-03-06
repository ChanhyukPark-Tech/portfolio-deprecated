import React, {useContext, useState} from 'react'
import styled, {css} from 'styled-components';
import {Link} from "react-router-dom";
import {MouseContext} from "../context/mouse-context";

function ResumeItem({ year, title, subTitle, text}) {
    const {cursorChangeHandler} = useContext(MouseContext);
    const [hoverd, setHoverd] = useState(false);

    return (
        <ResumeItemStyled hoverd={hoverd}>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <Link to={`/resume/${title}`} onMouseEnter={() => {
                    cursorChangeHandler("hovered");
                    setHoverd(true);
                }}
                      onMouseLeave={() => {
                          cursorChangeHandler("")
                          setHoverd(false);
                      }}>
                    <h5>{title}</h5>
                </Link>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
  display: flex;
  @media screen and (max-width: 421px) {
    p, h5, h6 {
      font-size: 80%;
    }
  }

  &:not(:last-child) {
    padding-bottom: 3rem;
  }

  .left-content {
    min-width: 30%;
    padding-left: 20px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }

    p {
      display: inline-block;
    }
  }

  .right-content {
    padding-left: 5rem;
    position: relative;
    max-width: 940px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
    }

    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: .4rem;
      transition: color 500ms ease-in-out;
      ${props => props.hoverd && css`
        color: var(--primary-color-lightest);
      `}
    }

    h6 {
      padding-bottom: .6rem;
      font-size: 1.5rem;
    }
  }
`;
export default ResumeItem;