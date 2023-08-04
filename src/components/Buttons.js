import satData from "./satData";

const Buttons = (props) => {
  const {displaySats, filterByType, setSat} = props;
  console.log(displaySats)
  return (
    <div>
      
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}

      {/* <button>Placeholder Button</button> */}
      {console.log("hhhhhh" + setSat)};
      <button onClick={() => {setSat(satData)}}>
        All Orbits
      </button>
    </div>
  );
};

export default Buttons;