const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>

        {sat.map((satellite, id) => {
          let status;
          if (satellite.operational === true) {
            status = "Active"
          } else {
            status = "Inactive"
          }
          
          return (
            <tr>
              <td key={id}>{satellite.name}</td>
              <td key={id}>{satellite.type}</td>
              <td key={id}>{satellite.launchDate}</td>
              <td key={id}>{status}</td>
            </tr>
          )
        })}

      </tbody>
    </table>
  );
};




export default Table;