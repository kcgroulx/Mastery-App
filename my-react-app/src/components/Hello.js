import React from "react";

/*
 JSX
*/
const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello!</h1>
    //     </div>
    // )
    return React.createElement('div', null, React.createElement('h1', null, 'Hello!'));
}

export default Hello