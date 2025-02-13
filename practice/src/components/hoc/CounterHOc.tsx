import React from 'react'

const CounterHOc = (WrappedComponent, backgroundColor) => {
    return (props) => {
        const style = {
          backgroundColor: backgroundColor,
          padding: '20px',
          borderRadius: '8px',
          margin: '10px',
        };
    
        return (
          <div style={style}>
            <WrappedComponent {...props} />
          </div>
        );
      };
}
export default CounterHOc;