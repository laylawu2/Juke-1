const React = require('react');
const ReactDOM = require('react-dom')
const Footer = require('./footer')
const Sidebar = require('./sidebar')
const Album = require('./album')

const fakeAlbum = {
  name: 'Abbey Road',
  imageUrl: 'http://fillmurray.com/300/300',
  songs: [{
    name: 'Romeo & Juliette',
    artists: [{name: 'Bill'}],
    genre: 'Funk',
    audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
  }, {
    name: 'White Rabbit',
    artists: [{name: 'Bill'}, {name: 'Bob'}],
    genre: 'Fantasy',
    audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
  }, {
    name: 'Lucy in the Sky with Diamonds',
    artists: [{name: 'Bob'}],
    genre: 'Space',
    audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
  }]
};

class Main extends React.Component{
  constructor(){
    super();
    this.state={
       album:'many good albums'
    }
  }
  componentDidMount(){
    fetch('api/albums/1')
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        console.log("successs");
        console.log(data)
        this.setState({album: data})
      })
      .catch(function(err){
        console.err('err');
        console.error(err);
      });
  }
  render(){
    return (
    <div id="main" className="container-fluid">
    <h1>Hello {this.state.name}!</h1>
    <Album album={this.state.album}/>

    </div>

    )
  }
}


// var Main = React.createClass({
//   getInitialState: function() {
//     return {name: 'Elaine'};
//   },
//   render: function(){
//     return (
//       <div id="main" className="container-fluid">
//       <h1>Hello {this.state.name}!</h1>
//     </div>
//     )
//   }
// })


ReactDOM.render(<Main />, document.getElementById('app'))

module.exports = Main;
