import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      storeLink: "",
      isWrongLink: false,
      code: '',
      title: 'Rent on Omni',
      showButton: false,
      isRed: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  handleChange(e){
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)

    if(e.target.name == "storeLink"){
      if(e.target.value == ""){
        this.setState({
          isWrongLink: false,
          showButton: false
        })
      } else if(e.target.value.split("/")[3] == "stores"){
        this.setState({
          isWrongLink: false,
          code: `
          <link rel="stylesheet" type="text/css" media="all" href="https://vdthatte.github.io/button-css/button.css" >
          <a class="omni-rent-button-white" href="` + e.target.value + `" target="_blank">` + this.state.title +`</a>`,
          showButton: true
        })
      } else {
        this.setState({
          isWrongLink: true,
          showButton: false
        })
      }
    }
    if(e.target.name == "title") {
      this.setState({
        code: `
        <link rel="stylesheet" type="text/css" media="all" href="https://vdthatte.github.io/button-css/button.css" >
        <a class="omni-rent-button-white" href="` + this.state.storeLink + `" target="_blank">` + e.target.value +`</a>`,
      })
    }
  }

  changeColor(isRed){
    if(isRed){
      this.setState({
        isRed: true,
        code: `
        <link rel="stylesheet" type="text/css" media="all" href="https://vdthatte.github.io/button-css/button.css" >
          <a class="omni-rent-button-red" href="` + this.state.storeLink + `" target="_blank">` + this.state.title +`</a>`,
      })
    } else {
      this.setState({
        isRed: false,
        code: `
        <link rel="stylesheet" type="text/css" media="all" href="https://vdthatte.github.io/button-css/button.css" >
          <a class="omni-rent-button-white" href="` + this.state.storeLink + `" target="_blank">` + this.state.title +`</a>`,
      })
    }
  }


  render() {
    return (
      <div className="App">
        <div className="logoDiv">
          <center>
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.291 8.8l.005.01C31.471 11.032 32 13.303 32 16c0 8.836-7.163 16-16 16S0 24.836 0 16 7.163 0 16 0c2.896 0 5.097.487 7.425 1.825a1.307 1.307 0 1 1-1.027 2.403c-.001.003.027.01.026.012A13.447 13.447 0 0 0 16 2.612C8.606 2.612 2.612 8.606 2.612 16S8.606 29.388 16 29.388 29.388 23.394 29.388 16c0-2.144-.5-4.153-1.395-5.95l-.007-.015a1.308 1.308 0 0 1 2.26-1.31c.013.026.03.048.045.075zm-6.605-.15c.346.346.313.852.313 1.283v12.785c0 .077-.008.152-.022.225l-.004.028a1.272 1.272 0 0 1-.157.4 1.292 1.292 0 0 1-.148.2c-.015.018-.027.037-.044.054-.016.017-.036.029-.053.044a1.289 1.289 0 0 1-.601.305l-.028.004a1.291 1.291 0 0 1-.226.022h-.001a1.28 1.28 0 0 1-.233-.022l-.016-.003a1.261 1.261 0 0 1-.21-.062l-.034-.012a1.271 1.271 0 0 1-.182-.096c-.016-.01-.032-.018-.047-.029a1.296 1.296 0 0 1-.161-.131c-.008-.008-.016-.012-.024-.02l-11.24-11.24v9.994c0 .707-.577 1.285-1.284 1.285A1.288 1.288 0 0 1 8 22.379V9.281c0-.076.008-.151.021-.224l.005-.028a1.254 1.254 0 0 1 .157-.4 1.233 1.233 0 0 1 .147-.2c.016-.018.028-.037.045-.054.016-.017.036-.029.053-.044a1.353 1.353 0 0 1 .34-.22c.022-.011.046-.02.07-.029a1.29 1.29 0 0 1 .191-.056l.028-.004a1.258 1.258 0 0 1 .46 0l.016.003c.073.014.143.036.21.062l.034.012c.064.027.124.06.182.096l.047.028a1.3 1.3 0 0 1 .161.132c.008.008.016.012.024.02l5.977 5.977 5.701-5.703c.5-.499 1.317-.499 1.817 0zm4.047-3.05a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0zm-6.4 14.133V12.8l-3.2 3.467 3.2 3.466z" fill="#32393D" fill-rule="evenodd"></path>
            </svg>
          </center>
        </div>

        <header className="App-header">

          <input placeholder="Add storefront link here" className="store-link-input" value={this.state.storeLink} onChange={this.handleChange} name="storeLink"></input>
          {
            (this.state.isWrongLink) ? (
              <p>wrong link</p>
            ) : (null)
          }

        </header>

          {
            (this.state.showButton) ? (
              <div>

                <input placeholder="Rent on Omni" className="button-name-input" value={this.state.title} onChange={this.handleChange} name="title"></input>
                
                  <div className="chooseColorSection">
                    <center>
                      
                      {
                        (this.state.isRed) ? (
                          <div>
                            <button className="white" onClick={() => this.changeColor(false)}></button>
                            <button className="redOutline" onClick={() => this.changeColor(true)}></button>
                          </div>
                        ) : (
                          <div>
                            <button className="whiteOutline" onClick={() => this.changeColor(false)}></button>
                            <button className="red" onClick={() => this.changeColor(true)}></button>
                          </div>
                        )
                      }

                      <div className="buttonSection">
                      {
                        (this.state.isRed) ? (
                          <a className="redButton">{this.state.title}</a>
                        ) : (
                          <a className="whiteButton">{this.state.title}</a>
                        )
                      }
                      </div>

                    </center>
                  </div>
                


                <div className="codeBlock">
                  <p className="code">
                  {this.state.code}
                  </p>
                </div>
              </div>
            ) : (null)
          }
        
      </div>
    );
  }
}

export default App;


// TODO
// setup project - done
// setup input field - done
// check if link is from store front - done
// create button with link - done
// create relevant button code - done
// style buttons based on store fronts -done
// update relevant button code - done
// test with different usercases - done
// design epic page with copy - 