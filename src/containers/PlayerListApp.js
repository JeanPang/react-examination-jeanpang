import React, { Component } from 'react';
import styles from './PlayerListApp.css';
import { connect } from 'react-redux';

import { addPlayer, deletePlayer, starPlayer } from '../actions/PlayersActions';
import { PlayerList, AddPlayerInput } from '../components';
import Pagination from "react-js-pagination";

class PlayerListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
    };
  }

  handlePageChange = (pageNumber) => {
    const activePage = pageNumber-1
    this.setState({
      activePage: activePage
    });
  };

  renderPlayerlistAndPagi = (playersById, actions, dataOfCurrentPage, dataGroup) => {
    if (dataOfCurrentPage === undefined) {
      this.state.activePage = this.state.activePage-1
      // this.setState({
      //   activePage: this.state.activePage-1
      // });
      dataOfCurrentPage = dataGroup[this.state.activePage]

      if (dataOfCurrentPage === undefined) {
        this.state.activePage = 0
        // this.setState({
        //   activePage: 0
        // });
        return (
          <div>
            <div className="errorText">
              The list have no value. You can add the player you liked.
            </div>
          </div>
        )
      } 

      return (<div>
        <PlayerList 
          players={dataOfCurrentPage} 
          actions={actions} 
          activePage={this.state.activePage}
        />
        <div className="justify_content_center">
          <Pagination
            activePage={this.state.activePage+1}
            itemsCountPerPage={5}
            totalItemsCount={playersById.length}
            pageRangeDisplayed={10}
            onChange={this.handlePageChange}
          />
        </div>
      </div>)
      
    } else {
      return (<div>
        <PlayerList 
          players={ dataOfCurrentPage } 
          actions={actions} 
          activePage={this.state.activePage}
        />
        <div className="justify_content_center">
          <Pagination
            activePage={this.state.activePage+1}
            itemsCountPerPage={5}
            totalItemsCount={playersById.length}
            pageRangeDisplayed={10}
            onChange={this.handlePageChange}
          />
        </div>
      </div>)
    }
  };

  render() {
    const {
      playerlist: { playersById },
    } = this.props;

    const actions = {
      addPlayer: this.props.addPlayer,
      deletePlayer: this.props.deletePlayer,
      starPlayer: this.props.starPlayer,
    };

    let data = this.props.playerlist.playersById
    let dataGroup = [];
    for(var i=0,len=data.length;i<len;i+=5){
      dataGroup.push(data.slice(i,i+5));
    }
    let dataOfCurrentPage = dataGroup[this.state.activePage]

    return (
      <div className={styles.playerListApp}>
        <h1>NBA Players</h1>
        <AddPlayerInput addPlayer={actions.addPlayer} />
        {this.renderPlayerlistAndPagi(playersById, actions, dataOfCurrentPage, dataGroup)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  {
    addPlayer,
    deletePlayer,
    starPlayer,
  },
)(PlayerListApp);
