// write code for Welcome component here
import React from 'react';
// export default class Welcome extends React.Component {
//     render() {
//         return (
//             <div> 
//                 <h1>Hey {this.props.name}!</h1>
//                 <h2>Welcome to Newton School</h2>
//             </div>
//         )
//     }
// }
export default function Welcome(props) {
    return (
        <> 
            <h1>Hey {props.name}!</h1>
            <h2>Welcome to Newton School</h2>
        </>
    )
}