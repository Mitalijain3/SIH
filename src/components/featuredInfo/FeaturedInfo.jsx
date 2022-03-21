import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Gas 1 concentration</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> &lt; 0.20 ppm</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last hour</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Gas 2 concentration</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">100-200 ppm</span>
          <span className="featuredMoneyRate">
            +1.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last hour</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Gas 3 concentration</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">15-17 ppm</span>
          <span className="featuredMoneyRate">
            -2.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last hour</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Gas 4 concentration</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2.5-2.9 ppm</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last day</span>
      </div>
    </div>
  );
}
