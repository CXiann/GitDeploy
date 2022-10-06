import FetchJsonRow from "./FetchJsonRow";

const FetchJsonTable = ({ data }) => {
  return (
    <table className="dataList">
      <tbody>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th>{key}</th>
          ))}
        </tr>
        {data.map((row) => (
          <FetchJsonRow key={row.id} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default FetchJsonTable;
