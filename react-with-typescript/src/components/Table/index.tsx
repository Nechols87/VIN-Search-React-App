import { Table, Tablethead } from "../../styles";
import { ITableProps } from "../../interface";
import { keyGenerator } from "../../utils/misc";

export const SortableTable = (props: ITableProps) => {
  const { rows, columns } = props;

  return (
    <Table id="table" className="sortableTable">
      <Tablethead>
        {columns &&
          columns.map((columns: any) => {
            return (
              <tr key={keyGenerator()}>
                {columns.map((column: any) => {
                  return <td key={keyGenerator()}>{column.columns}</td>;
                })}
              </tr>
            );
          })}
      </Tablethead>

      <tbody>
        {rows &&
          rows.map((rows: any) => {
            return (
              <tr key={keyGenerator()}>
                {rows.map((row: any) => {
                  return <td key={keyGenerator()}>{row.rows}</td>;
                })}
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};
