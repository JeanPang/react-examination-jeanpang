import React, { Component } from 'react';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {
  render() {
    return (
      <div>
      {this.props.players !== undefined ? (
        <ul className={styles.playerList}>
        {this.props.players.map((player, index) => {
          return (
            <PlayerListItem
              key={index}
              id={index}
              name={player.name}
              team={player.team}
              position={player.position}
              starred={player.starred}
              activePage={this.props.activePage}
              {...this.props.actions}
            />
          );
        })}
      </ul>
      ) : (
        <span>
        </span>
      )}
      </div>
    );
  }
}

export default PlayerList;
