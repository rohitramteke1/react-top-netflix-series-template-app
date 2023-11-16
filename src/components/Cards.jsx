import React from "react";
import Card from "../components/Card";
import sdata from "../links";

// 1st Practice
// // pure js function
// function iterateCards( currentValue ) {
//   return (
//     <Card
//       sname={ currentValue.sname }
//       imgsrc={ currentValue.imgsrc }
//       title={ currentValue.title }
//       serlink={ currentValue.serlink }
//     />
//   );
// }

// callback function
const iterateOnCards = (value) => {
  return (
    <Card
      key= { value.id }
      sname= { value.sname }
      imgsrc= { value.imgsrc }
      title= { value.title }
      serlink= { value.serlink }
    />
  );
};

// Old Card Data
function Cards() {
  return (
    <div className="cards">
      {/* { sdata.map( iterateCards ) } */}
      { sdata.map(iterateOnCards) }
    </div>
  );
}
export default Cards;


// // 2: Using If-Else condition
// const favOTTPlatform = 'amazon';

// if ( favOTTPlatform === 'amazon') {
//   return <Amazon />;
// }
// else { // favOTTPlatform === 'netflix
//   return <Netflix />;
// }

// export iterateOnCards;

