function App() {
  return (
    <div className="App">
      <h1>Project: Big Haul!</h1>
      <p>Welcome to the project truck management system for your fleet of trucks.</p>

      <h3>Project Status: ???</h3>

      <div>
        <h2>Trucks</h2>

        {/* Instruction Block */}
        <div style={{ paddingBottom: "10px" }}>
          <div>Instruction block</div>
          <div>
            We've provided a static example of a truck in the table below to
            illustrate the format and layout. However, this is for reference
            only. Replace the table below with trucks found in the
            /src/data/trucks.ts file. Ensure that you can set the status for
            each truck and that it will display the appropriate project status.
          </div>
        </div>
        {/* Instruction Block End */}

        <table>
          <thead>
            <th>Truck</th>
            <th>Driver</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>12345</td>
              <td>John Doe</td>
              <td>
                <select>
                  <option value="unscheduled">Unscheduled</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="in-transit">In transit</option>
                  <option value="arrived-on-time">Arrived on Time</option>
                  <option value="delayed">Delayed</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
