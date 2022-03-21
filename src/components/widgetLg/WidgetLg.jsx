import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Updates</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Gas</th>
          <th className="widgetLgTh">Time</th>
          <th className="widgetLgTh">Concentration</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Sulphur Dioxide</span>
          </td>
          <td className="widgetLgDate">10:35 A.M.</td>
          <td className="widgetLgAmount">0.002 ppm</td>
          <td className="widgetLgStatus">
            <Button type="SlightChange" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Carbon Monoxide</span>
          </td>
          <td className="widgetLgDate">10:30 A.M.</td>
          <td className="widgetLgAmount">20 ppm</td>
          <td className="widgetLgStatus">
            <Button type="Increment" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Nitrogen Dioxide</span>
          </td>
          <td className="widgetLgDate">10:38 A.M.</td>
          <td className="widgetLgAmount">100-200 ppm</td>
          <td className="widgetLgStatus">
            <Button type="SlightChange" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Methane</span>
          </td>
          <td className="widgetLgDate">10:29 A.M.</td>
          <td className="widgetLgAmount">12-15 ppm</td>
          <td className="widgetLgStatus">
            <Button type="Decrement" />
          </td>
        </tr>
      </table>
    </div>
  );
}
