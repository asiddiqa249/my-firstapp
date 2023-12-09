import TableHeader from "./table-header";
import TableData1 from "./table-data1";
import TableData2 from "./table-data2";
const TableComponent = () => {
    return (
      <table>
        <tr>
          <TableHeader/>
        </tr>
        <tr>
          <TableData1/>
        </tr>
        <tr>
          <TableData2/>
        </tr>
      </table>
    );
}
export default TableComponent;