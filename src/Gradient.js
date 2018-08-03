import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './components/Button';
import Input from './components/Input';
import RadioBtn from './components/RadioBtn';
import RadioBtnOrientation from './components/RadioBtnOrientation';
import Sidebar from './components/Sidebar';
import SidebarHeading from './components/SidebarHeading';

const Fieldset = styled.div`
  justify-content: space-between;
  &:not(:first-child) {
    margin: 50px 0 0;
  }
`;

const StartColor = styled.button`
  width: 35px;
  background: #ffa900;
`;

const EndColor = styled.button`
  width: 35px;
  background: #eb6302;
`;

const GradientPreview = styled.div`
  position: relative;
  display: flex;
  width: calc(100% - 275px);
  height: 100vh;
  background: linear-gradient(#ffa900 0%, #eb6302 100%);
`;

class CssGradient extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      orientation: '180',
      type: 'linear',
      code: 'css',
    }

    this.handleOrientation = this.handleOrientation.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleCode = this.handleCode.bind(this);
  }

  handleOrientation(e) {
    this.setState({
      orientation: e.target.value
    });
  }

  handleType(e) {
    this.setState({
      type: e.target.value
    });
  }

  handleCode(e) {
    this.setState({
      code: e.target.value
    });
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    e.target.focus();
  };

  render() {
    return (
      <section className={`grid ${ this.props.className }`}>
        <Sidebar>
          <form>
            <Fieldset className="grid">
              <SidebarHeading className="grid__col-12" heading="Start Color" />
              <StartColor className="grid__col-4" />
              <Input
                large
                className="grid__col-4"
                placeholder="#FAD961"
                type="text"
              />
              <Input
                small
                className="grid__col-4"
                placeholder="0"
                type="number"
                min="0"
                max="100"
              />
            </Fieldset>
            
            <Fieldset className="grid">
              <SidebarHeading className="grid__col-12" heading="End Color" />
              <EndColor className="grid__col-4" />
              <Input
                large
                className="grid__col-4"
                placeholder="#F76B1C"
                type="text"
              />
              <Input
                small
                className="grid__col-4"
                placeholder="100"
                type="number"
                min="0"
                max="100"
              />
            </Fieldset>

            <Fieldset className="grid" onChange={this.handleOrientation}>
              <SidebarHeading className="grid__col-12" heading="Orientation" />
              <RadioBtnOrientation
                value="0"
                checked={this.state.orientation === '0'}
              />
              <RadioBtnOrientation
                value="45"
                checked={this.state.orientation === '45'}
              />
              <RadioBtnOrientation
                value="90"
                checked={this.state.orientation === '90'}
              />
              <RadioBtnOrientation
                value="135"
                checked={this.state.orientation === '135'}
              />
              <RadioBtnOrientation
                value="180"
                checked={this.state.orientation === '180'}
              />
              <RadioBtnOrientation
                value="-135"
                checked={this.state.orientation === '-135'}
              />
              <RadioBtnOrientation
                value="-90"
                checked={this.state.orientation === '-90'}
              />
              <RadioBtnOrientation
                value="-45"
                checked={this.state.orientation === '-45'}
              />
            </Fieldset>

            <Fieldset className="grid" onChange={this.handleType}>
              <SidebarHeading className="grid__col-12" heading="Type" />
              <RadioBtn
                value="radial"
                label="Radial"
                checked={this.state.type === 'radial'}
              />
              <RadioBtn
                value="linear"
                label="Linear"
                checked={this.state.type === 'linear'}
              />
            </Fieldset>

            <Fieldset className="grid" onChange={this.handleCode}>
              <SidebarHeading className="grid__col-12" heading="Code" />
              <RadioBtn
                value="css"
                label="Css"
                checked={this.state.code === 'css'}
              />
              <RadioBtn
                value="scss"
                label="Scss"
                checked={this.state.code === 'scss'}
              />
              <textarea
                ref={(textarea) => this.textArea = textarea}
                value='background: linear-gradient(#ffa900 0%, #eb6302 100%);'
              />
              <Button text="Copy" onClick={this.copyToClipboard} />
            </Fieldset>
          </form>
        </Sidebar>
        
        <GradientPreview></GradientPreview>
      </section>
    );
  }
}

export default styled(CssGradient)`
  justify-content: flex-end;
  textarea {
    width: 100%;
    height: 80px;
    font-size: 16px;
    margin: 25px 0 30px;
    padding: 10px;
    background: none;
    color: var(--text-color);
    border: 2px solid var(--text-color);
    border-left-width: 7px;
  }
`;