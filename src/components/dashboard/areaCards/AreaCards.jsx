/* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
// import { fetchData } from "../../../dataProvider/api";
// import AreaCard from "./AreaCard";
// import "./AreaCards.scss";
// import { useStateManager } from "../../../dataProvider/stateManager";



// const AreaCards = () => {
//   const { totals } = useStateManager();
 
//   return (
//     <section className="content-area-cards">
//       <AreaCard
//         colors={["#e4e8ef", "red"]}
//         percentFillValue={80}
//         cardInfo={{
//           title: "Confirmed",
//           value: "$20.4K",
          
//         }}
//       />
//       <AreaCard
//         colors={["#e4e8ef", "#4ce13f"]}
//         percentFillValue={50}
//         cardInfo={{
//           title: "Recovered",
//           value: "$8.2K",
          
//         }}
//       />
//       <AreaCard
//         colors={["#e4e8ef", "#f29a2e"]}
//         percentFillValue={40}
//         cardInfo={{
//           title: "Tested",
//           value: "$18.2K",
          
//         }}
//       />
//       <AreaCard
//         colors={["#e4e8ef", "grey"]}
//         percentFillValue={40}
//         cardInfo={{
//           title: "Deceased",
//           value: "$18.2K",
          
//         }}
//       />
//     </section>
//   );
// };

// export default AreaCards;

import React from "react";
import AreaCard from "./AreaCard";
import "./AreaCards.scss";
import { useStateManager } from "../../../dataProvider/stateManager";

const AreaCards = () => {
  const { totals } = useStateManager();

  if (!totals) {
    // Return loading indicator or handle the case when totals are not available yet
    return <div>Loading...</div>;
  }

  const getValueByTitle = title => {
    switch (title) {
      case "Confirmed":
      return (totals.totalCases / 1000000).toLocaleString(undefined, { maximumFractionDigits: 1 }) + "M";
    case "Recovered":
      return (totals.totalRecovered / 1000000).toLocaleString(undefined, { maximumFractionDigits: 1 }) + "M";
    case "Tested":
      return (totals.totalTested / 1000000).toLocaleString(undefined, { maximumFractionDigits: 1 }) + "M";
    case "Deceased":
      return (totals.totalDeaths / 1000000).toLocaleString(undefined, { maximumFractionDigits: 1 }) + "M";
    default:
      return "0M";
    }
  };

  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "red"]}
        percentFillValue={80}
        cardInfo={{
          title: "Confirmed",
          value: `${getValueByTitle("Confirmed")}`, // Update value dynamically
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Recovered",
          value: `${getValueByTitle("Recovered")}`, // Update value dynamically
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Tested",
          value: `${getValueByTitle("Tested")}`, // Update value dynamically
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "grey"]}
        percentFillValue={40}
        cardInfo={{
          title: "Deceased",
          value: `${getValueByTitle("Deceased")}`, // Update value dynamically
        }}
      />
    </section>
  );
};

export default AreaCards;

