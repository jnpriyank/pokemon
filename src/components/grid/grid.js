import { useLayoutEffect } from "react";
import { getColumnValue } from "./queries";

const Grid = (props) => {
  const { data, columnDefinitions } = props;
  console.log({ data, columnDefinitions });
  return (
    <ul className="grid">
      {
        columnDefinitions?.length &&
        (
          <li className="grid-header-row">{columnDefinitions.map((columnDefinition) => {
            return <div className="grid-column" style={{ width: columnDefinition.width }}>{columnDefinition.name}</div>
          })}</li>
        )
      }
      {
        data?.length &&
        data.map((row) => {
          return (<li className="grid-row">{columnDefinitions.map((columnDefinition) => {
            return <div className="grid-column" style={{ width: columnDefinition.width }}>{getColumnValue(row, columnDefinition)}</div>
          })}</li>);
        })
      }
    </ul>
  );
};

export default Grid;
