import React, {useState, useEffect} from "react";
import stateList from "./../../json/statecity.json";
import Select from "react-select";

const StateCity = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);



  useEffect(() => {
  
      const stateOptions = Object.keys(stateList).map(state => {
        console.log(state); // Log each state name
        return {
          value: state,
          label: state
        };
      });
    }, [stateList]);
    
    

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <Select
                id="stateDropdown"
                isClearable={false}
                placeholder="Search State..."
              />
            </div>
            <div className="col-md-6">
              <Select
                id="CityDropdown"
                isClearable={false}
                placeholder="Search City..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StateCity;
