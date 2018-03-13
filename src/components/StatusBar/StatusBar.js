
import React from 'react';
import PropTypes from 'prop-types';
import './statusbar.css';

import StatusBarStep from '../../resources/images/StatusBarStep.svg';

class StatusBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepList: this.props.stepList,
      currentStep: this.props.currentStep
    }
  }

  render() {
    let generatedJSX = [];
    generatedJSX.push((<div className="Node"><img src={StatusBarStep} alt="image not found"/></div>));
    return (
      <div>
      {generatedJSX.map((jsx) => {
        return (jsx);
      })}
      </div>
    );
  }
}

export default StatusBar;
