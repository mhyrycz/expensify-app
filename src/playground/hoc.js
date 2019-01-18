// higher order component - component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p>{props.info}</p>
    </div>
  )
};

const AdminWarning = (SomeComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <div>This is private message. Don't share!</div>}
      <SomeComponent {...props}/>
    </div>
  )
};

const RenderHigherComponent = AdminWarning(Info);

ReactDom.render(<RenderHigherComponent isAdmin={false} info="There are the details"/> , document.getElementById('app'))
