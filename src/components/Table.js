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
            <tr key={id}>
              <td>{satellite.name}</td>
              <td>{satellite.type}</td>
              <td>{satellite.launchDate}</td>
              <td>{status}</td>
            </tr>
          )
        })}

      </tbody>
    </table>
  );
};




export default Table;