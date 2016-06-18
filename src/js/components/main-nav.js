import React, {Component} from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

class MainNav extends Component {
  renderIcons() {
    let tooltipMarkup = null;
    const markup = this.props.items.map((item, index) => {
      tooltipMarkup = (
        <Tooltip id={item.id} key={item.id}>
          {item.desc}
        </Tooltip>
      );

      return (
        <OverlayTrigger
          placement={index === this.props.items.length - 1 ? 'left' : 'bottom'}
          overlay={tooltipMarkup}
          delayShow={800}
          key={item.id}
        >
          <div
            className="main-nav-item"
            key={item.id}
          >
            <span className={`fa fa-${item.icon}`}/>
          </div>
        </OverlayTrigger>
      );
    });

    return (
      <div className="icons pull-right">
        {markup}
      </div>
    );
  }

  render() {
    return (
      <div className="main-nav">
        <div className="main-nav-item brand">
          <span>{this.props.brand}</span>
        </div>
        {this.renderIcons()}
      </div>
    );
  }
}

export default MainNav;