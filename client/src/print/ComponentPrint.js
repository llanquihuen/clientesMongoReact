
import * as React from "react";
import Posts from '../components/Posts/Posts2'

export class ComponentToPrint extends React.Component {
  render() {
    return (
      <div style={{margin:10}}>
        <Posts />
      </div>
      
    );
  };
};