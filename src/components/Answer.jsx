import React from "react";

// const Answer =(props)=>{
//     return <div>
//         Hello from {props.name},I'm from {props.place}
//         </div>
// }
// export default  Answer;


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%Another Method


const Answer =({name,place,infox={a:6,b:5}})=>{
    return (
    <div> 
    Hello from {name},I'm from {place} ({infox.a} || {infox.b})
    </div>
        );
};
export default  Answer;













// const Answer2 =()=>{
//     return <div>
//         Hello from Answer2
//         </div>
// }
// export {Answer2};

// const Answer3 =()=>{
//     return <div>
//         Hello from Answer3
//         </div>
// }
// export {Answer3};