const React = require('react');
const ReactDOM = require('react-dom')

class Sidebar extends React.Component {
  render() {
    return (
      <div>
          <img src="juke.svg" className="logo" />
          <section>
            <h4 className="menu-item active">
              <a href="#">ALBUMS</a>
            </h4>
          </section>
      </div>
    )
  }
}

ReactDOM.render(<Sidebar />, document.getElementById('sidebar'))

module.exports = Sidebar;
