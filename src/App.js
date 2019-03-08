import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { incrementar, decrementar } from "./redux/counter/action-creators";

function App({ counter, incrementar, decrementar }) {
    return (
      <div className="App">
        <header className="App-header">
          <span>{counter}</span>
          <div className="button__group">
            <button className="button" onClick={incrementar}>
              +
            </button>
            <button className="button" onClick={decrementar}>
              -
            </button>
          </div>
        </header>
      </div>
    );
  }

const mapStateToProps = ({ counter: { number: counter } }) => ({ counter });

const mapDispatchToProps = dispatch => ({
  incrementar: () => dispatch(incrementar()),
  decrementar: () => dispatch(decrementar())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
