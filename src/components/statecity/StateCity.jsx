import React, {useState, useEffect} from "react";
import stateList from "./../../json/statecity.json";
import Select from "react-select";

const StateCity = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedStateValue, setSelectedStateValue] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {

      const stateOptions = Object.keys(stateList).map(state => {
        return {
          value: state,
          label: state
        };
      });
      setStates(stateOptions);
      
    }, [stateList]);
    

    const getStateEventHandler = (selectedStateOption) => {

      setSelectedState(selectedStateOption)
      setSelectedStateValue(selectedStateOption.value)
    
      if(selectedStateOption.value){
        const selectedCityList = stateList[selectedStateOption.value];
        const cityListOptionValue = selectedCityList.map(city =>{
          return {
            value:city,
            label:city
          }
        })
       
        setCities(cityListOptionValue);
        setSelectedCity([]);
      }else{
        setSelectedState([])
      }
     
    };

    const getCityEventHandler = (selectedCityOption) => {
        //alert(selectedCityOption.value);
        setSelectedCity(selectedCityOption);
    }

  return (
    <>

  
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <Select
              id="stateDropdown"
              isClearable={false}
              options={states}
              isMulti={false}
              onChange={getStateEventHandler}
              value={selectedState}
              placeholder="Search State..."
            />

            </div>
            <div className="col-md-6">
              <Select
                id="CityDropdown"
                isClearable={false}
                options={cities}
                value={selectedCity}
                isMulti={false}
                onChange={getCityEventHandler}
                placeholder={`Search ${selectedStateValue} City...`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StateCity;
