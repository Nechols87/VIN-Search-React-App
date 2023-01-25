import React from "react";
import { useNavigate } from "react-router-dom";
import { SortableTable } from "../components/Table/index";
import { Wrapper, Title, BackButton, Error } from "../styles";
import { IVinSearchPageProps } from "../interface";

const VinSearch: React.FunctionComponent<IVinSearchPageProps> = (props) => {
  const { vehicleSelection } = props;
  console.log(vehicleSelection);
  const navigate = useNavigate();
  const length: boolean =
    vehicleSelection.rows?.length > 0 && vehicleSelection.columns?.length > 0;
  const linkLength: boolean = vehicleSelection.car?.length > 0;
  return (
    <Wrapper>
      <Title>
        {length ? "This is what we found!" : "Please go to homepage to search"}
      </Title>
      {!length && linkLength && (
        <Error>We were not able to find something with that VIN Number</Error>
      )}

      <BackButton onClick={() => navigate("/")}>Back to home page</BackButton>

      {length && (
        <SortableTable
          rows={[vehicleSelection.rows]}
          columns={[vehicleSelection.columns]}
        />
      )}
      {linkLength && <img src={vehicleSelection.car} alt="new" />}
    </Wrapper>
  );
};

export default VinSearch;
