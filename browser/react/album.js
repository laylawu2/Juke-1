const React = require('react');
const ReactDOM = require('react-dom')
console.log("hihi");

class Album extends React.Component{

  constructor(){
    super();


  }
  render(){
    return(
    <div>
      <div>
    <h3>{this.props.album.name}</h3>
    <img src={this.props.album.imageUrl} className="img-thumbnail" />
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Artists</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
        {this.props.album.songs.map(function(song, idx){
          return(
            <tr>
            <td>
              <button className="btn btn-default btn-xs">
                <span className="glyphicon glyphicon-play"></span>
              </button>
            </td>
            <td>{song.name}</td>
            <td>{song.artists.map(function(artist){
                  return artist.name+" "
                })}
            </td>
            <td>{song.genre}</td>
          </tr>
          )
        })}
    </tbody>
  </table>
  </div>
    )
  }
}

module.exports = Album;
