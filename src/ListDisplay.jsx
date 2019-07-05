import React, { Component } from 'react'
class ListDisplay extends Component {
  
  render() {
    return (
      <main>
        <div className='list-display-box'>
          <div className='list-display-content'>
            <div><div className='name'>{this.props.data[this.props.count].name.first} {this.props.data[this.props.count].name.last}</div></div>
            <div className='list-item'>From: <span className='list-value'>{this.props.data[this.props.count].city}, {this.props.data[this.props.count].country}</span></div>
            <div className='list-item'>Job Title: <span className='list-value'>{this.props.data[this.props.count].title}</span></div>
            <div className='list-item'>Employer: <span className='list-value'>{this.props.data[this.props.count].employer}</span></div>
            <div className='list-content'>
              <div className='list-item'>Favorite Movies: </div>
              <div className='list'>
                <ol>
                  <li><span className='list-value'>{this.props.data[this.props.count].favoriteMovies[0]}</span></li>
                  <li><span className='list-value'>{this.props.data[this.props.count].favoriteMovies[1]}</span></li>
                  <li><span className='list-value'>{this.props.data[this.props.count].favoriteMovies[2]}</span></li>
                </ol>
              </div>
            </div>
            <span className='index-id'>{this.props.count + 1}/{this.props.data.length}</span>
          </div>
        </div>
      </main>
    )
  }
}

export default ListDisplay


// Add counter for the data id# (1/25) and apply the data index according to the number of the current data id# -1