const React = require('react');
const ReactDOM = require('react-dom')

class Footer extends React.Component{
  render(){
    return (
      <div>
          <div className="pull-left">
            <button className="btn btn-default">
              <span className="glyphicon glyphicon-step-backward"></span>
            </button>
            <button className="btn btn-default">
              <span className="glyphicon glyphicon-play"></span>
            </button>
            <button className="btn btn-default">
              <span className="glyphicon glyphicon-step-forward"></span>
            </button>
          </div>
        <Bar />
      </div>
    )
  }
}

class Bar extends React.Component{
  render(){
    return (
       <div className="bar">
            <div className="progress">
              <div className="progress-bar"></div>
            </div>
       </div>
    )
  }
}

ReactDOM.render(<Footer />,document.getElementById('footer'))

module.exports = {
  Footer: Footer,
  Bar: Bar
};
