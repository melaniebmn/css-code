import React, { Component } from 'react';
import styled from 'styled-components';
import iconArrow from '../assets/img/icon--arrow.png';

const Label = styled.label`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  width: 26px;
  height: 26px;
  font-size: 18px;
  line-height: 1;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 100%;
`;

class RadioBtnOrientation extends Component {
  render() {
    return (
      <fieldset className={`grid__col-3 ${ this.props.className }`}>
        <input
          type="radio"
          value={this.props.value}
          checked={this.props.checked}
        />
        <Label><img src={iconArrow} alt="Arrow Icon" /></Label>
      </fieldset>
    );
  }
}

export default styled(RadioBtnOrientation)`
  position: relative;
  input {
    z-index: 1;
    opacity: 0;
    position: absolute;
    top: 7px;
    left: 7px;
    cursor: pointer;
  }
  input[type=radio]:checked + label {
    border-color: var(--text-color--light);
    img {
      filter: brightness(0) invert(1);
    }
  }
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    margin: 0 0 25px;
  }
  &:nth-child(2) label {
    transform: rotate(45deg);
  }
  &:nth-child(3) label {
    transform: rotate(90deg);
  }
  &:nth-child(4) label {
    transform: rotate(135deg);
  }
  &:nth-child(5) label {
    transform: rotate(180deg);
  }
  &:nth-child(6) label {
    transform: rotate(-135deg);
  }
  &:nth-child(7) label {
    transform: rotate(-90deg);
  }
  &:nth-child(8) label {
    transform: rotate(-45deg);
  }
`;