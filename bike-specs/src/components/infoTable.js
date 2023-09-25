import "./css/infoTable.scss";

export default function InfoTable({ bike }) {
  console.log(bike);
  if (bike === null || bike === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <table className="bike-info">
      <tbody>
        {Object.keys(bike).map((spec, index) => (
          <tr key={index}>
            <td className="left-column">{spec}</td>
            <td className="right-column">{bike[spec]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
