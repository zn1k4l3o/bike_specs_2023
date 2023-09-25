import "./css/infoTable.scss";

export default function InfoTable({ bike }) {

  console.log(bike);
  if (bike===null || bike===undefined) {
    return <p>Loading...</p>;
  }
  
  return (
    <table>
      {Object.keys(bike).map((spec) => (
        <tr>
          <td>{spec}</td>
          <td>{bike[spec]}</td>
        </tr>
      ))}
    </table>
  );
}

/*

Baca Error
*/
