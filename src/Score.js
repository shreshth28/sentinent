import React from 'react';
import './materialize.min.css';

class Score extends React.Component{

    render(){
        return(
                <p>{this.props.myScore}</p>
        );
    }

}
export default Score;
