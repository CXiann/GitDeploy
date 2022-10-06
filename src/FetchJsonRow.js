import FetchJsonCell from "./FetchJsonCell";

const FetchJsonRow = ({ row }) => {
  return (
    <tr>
      {Object.entries(row).map(([key, value]) => (
        <FetchJsonCell key={key} cellData={JSON.stringify(value)} />
      ))}
    </tr>
  );
};

export default FetchJsonRow;
