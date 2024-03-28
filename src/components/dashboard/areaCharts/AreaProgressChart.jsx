
// import { ThemeContext } from "../../../context/ThemeContext";
// import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";
import { useStateManager } from "../../../dataProvider/stateManager";

const AreaProgressChart = () => {
  const { totals } = useStateManager();

  const data = [
    {
      id: 1,
      name: "Active Per Million",
      percentValues: Math.ceil((totals.activePerMillion / 1000000000) * 1000),
    },
    {
      id: 2,
      name: "Cases Per Million",
      percentValues: Math.ceil((totals.casesPerMillion/ 1000000000) * 1000),
    },
    {
      id: 3,
      name: "Critical Per Million",
      percentValues: Math.ceil((totals.criticalPerMillion/ 10000) * 1000),
    },
    {
      id: 4,
      name: "Deaths Per Million",
      percentValues: Math.ceil((totals.deathsPerMillion/ 10000000) * 1000),
    },
    {
      id: 5,
      name: "Tests Per Million",
      percentValues: Math.ceil((totals.deathsPerMillion/ 10000000) * 1000),
    },
  ];

  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">COVID-19 Statistics Per Million</h4>
      </div>
      <div className="progress-bar-list">
        {data?.map((progressbar) => {
          return (
            <div className="progress-bar-item" key={progressbar.id}>
              <div className="bar-item-info">
                <p className="bar-item-info-name">{progressbar.name}</p>
                <p className="bar-item-info-value">
                  {progressbar.percentValues}
                </p>
              </div>
              <div className="bar-item-full">
                <div
                  className="bar-item-filled"
                  style={{
                    width: `${progressbar.percentValues}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreaProgressChart;
