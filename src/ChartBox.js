import { Chart } from "./Chart";

export function ChartBox() {
  return (
    <div className="chart-box">
      <p>Spending - Last 7 days</p>
      <Chart />
      
      <div className="lower-comp">
        <div className="chart-box-total">
          <p className="label">Total this month</p>
          <p className="label-total">£478.33</p>
        </div>

        
        <div className="comparison">
          <p className="label-total no-mg-no-pd pc txt-align-right">+2.4%</p>
          <p className="label no-mg-no-pd">from last month</p>
        </div>
      </div>
    </div>
  );
}
