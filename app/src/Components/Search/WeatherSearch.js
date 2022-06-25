import React, { useState } from "react";
import debounce from "lodash-es/debounce";
import Axios from "axios";
import NavBar from "../NavBar/NavBar";
import Search from "./Search";
import ForecastCard from "../ForcastCard";
import WeatherCard from "../WeatherCard";

const searchTimeoutInMs = 500;

export default function WeatherSearch() {
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = React.useState("Eldoret");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [units] = React.useState("metric");

  const debounceSearch = React.useMemo(
    () =>
      debounce((searchTerm) => {
        setDebouncedSearchTerm(searchTerm);
      }, searchTimeoutInMs),
    []
  );

  const handleLocationChange = (event) => {
    const query = event.target.value.trim();
    if (query) {
      setIsSearching(true);
    }
    debounceSearch(query);


  };



  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setLocation(debouncedSearchTerm);
      setIsSearching(false);
      postHistory();
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);
  
  const postHistory = async () => {
    await Axios.post("http://localhost:5000/api/v1/history", {
      location: location,
    }).then((response) => {
      console.log(response.data);
      getHistory();
    });
  };

  

  const getHistory = async () => {
      await Axios.get("http://localhost:5000/api/v1/history").then((response) => {
        const locations = response.data;
        setLocations(locations)
      console.log(response.data);
    });
  };
  const clearHistory = async (e, id) => {
    e.stopPropagation();
    await Axios.delete("http://localhost:5000/api/v1/history/").then((response) => {
      setLocations(locations.filter(({ id: i }) => id !== i));
    });
  };

  return (
    <>
      <NavBar />
      <h1 className="container is-size-1 has-text-weight-bold">
        Weather Search
      </h1>
      <div className="dark:bg-black min-h-screen">
        <main>
          <div className="mx-auto w-5/6 md:w-full 2xl:max-w-7xl xl:max-w-6xl">
            <Search
              location={location}
              isSearching={isSearching}
              onLocationChange={handleLocationChange}
            />
            <div className="shadow-lg rounded-lg h-auto overflow-hidden w-full md:w-3/5 lg:w-1/2 m-auto mt-4 divide-y-2 divide-light-blue-400">
              <WeatherCard location={location} units={units} />
              <ForecastCard location={location} units={units} />
            </div>
          </div>
        </main>
        <div className="container">
        <h1 className=" is-size-1">History</h1>
        <span className="is-size-4" onClick={clearHistory}> Clear History × </span> 
        <div>
          {locations.length ? (
            locations.map(({ id, location }, i) => (
              <ul className="container is-size-4" key={i}>
                <li>{id}. {location}</li>
              </ul>
            ))
          ) : (
            <p className="is-size-3">No Weather History Yet :(</p>
          )}
        </div>
        </div>
      </div>
    </>
  );
}


