import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import VehicleApiService from "../api/index";
import { Wrapper, Title, SearchButton, Error } from "../styles";
import { INamePageProps } from "../interface";

const HomePage: React.FunctionComponent<INamePageProps> = (props) => {
  const navigate = useNavigate();
  const [warning, setWarning] = useState(false);
  const { nameSelection } = props;

  // Function to call either API endpoint based on parameter entered
  const searchApi = async (apiType: string, query: any): Promise<any> => {
    if (apiType === "vin") {
      const firstResult = await VehicleApiService.decodeVin(query);
      return firstResult.data.Results;
    } else if (apiType === "photo") {
      const photoResult = await VehicleApiService.findPhoto(
        query.make,
        query.model
      );
      return photoResult;
    }
  };

  // Search function fired on search click button
  const search = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const vinInput = form.querySelector("#searchVINText") as HTMLInputElement;
    if (vinInput.value.length === 17) {
      try {
        const firstResponse = await searchApi("vin", vinInput.value);
        const result: any = filterSearch(firstResponse);
        const secondResponse = await searchApi("photo", result.car);
        result.car = secondResponse;
        nameSelection(result);
        navigate("/vinSearch");
      } catch (error) {
        console.log(error);
      }
    } else {
      // If 17 characters are not entered a red warning will pop up and instruct
      setWarning(true);
    }
  };

  // Filters the api response to create rows and columns for table and create object for car details api
  const filterSearch = (vehicles: any) => {
    const newObj: any = { columns: [], rows: [], car: { make: "", model: "" } };
    vehicles.forEach((el: any) => {
      if (el.Value !== null && el.Variable !== null) {
        if (
          el.Variable === "Make" ||
          el.Variable === "Model" ||
          el.Variable === "Model Year" ||
          el.Variable === "Body Class" ||
          el.Variable === "Series" ||
          el.Variable === "Trim" ||
          el.Variable === "Gross Vehicle Weight Rating From" ||
          el.Variable === "Brake System Type" ||
          el.Variable === "Engine Model" ||
          el.Variable === "Manufacturer Name"
        ) {
          if (el.Variable === "Make") newObj.car.make = el.Value;
          if (el.Variable === "Model") newObj.car.model = el.Value;
          const columnsObj: any = {};
          const rowsObj: any = {};
          columnsObj.columns = el.Variable;
          newObj.columns.push(columnsObj);
          rowsObj.rows = el.Value;
          newObj.rows.push(rowsObj);
        }
      }
    });
    return newObj;
  };

  return (
    <Wrapper className="search">
      <Title>Search by VIN Number</Title>
      <form className="searchForm" onSubmit={(event) => search(event)}>
        <input id="searchVINText" type="text" placeholder="VIN Number" />
        <SearchButton>Search</SearchButton>
      </form>
      {warning && <Error>Please enter 17 character VIN number to search</Error>}
    </Wrapper>
  );
};

export default HomePage;
