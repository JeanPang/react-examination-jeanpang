import React, { Component } from 'react';
import classnames from 'classnames';
import './PlayerListItem.css';

class PlayerListItem extends Component {
  render() {
    const idPageAdjust = this.props.activePage*5
    return (
      <li className="player_list_item">
        <div className="playerInfos">
          <div className="playerInfos_name">
            <span>{this.props.name}</span>
          </div>
          <div>
            <small>
              {this.props.team} · {this.props.position}
            </small>
          </div>
        </div>
        <div className="playerActions">
          <button
            className="btn btn-default btnAction"
            onClick={() => this.props.starPlayer(this.props.id+idPageAdjust)}
          >
            <i
              className={classnames('fa', {
                'fa-star': this.props.starred,
                'fa-star-o': !this.props.starred,
              })}
            />
          </button>
          <button
            className="btn btn-default btnAction"
            onClick={() => this.props.deletePlayer(this.props.id+idPageAdjust)}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

export default PlayerListItem;
