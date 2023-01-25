export default interface IVehicleApiResponse<T> {
  Count: number;
  Message: string;
  SearchCriteria: string | null;
  Results: T[];
}

export interface IDecoderAttribute {
  VariableId: number;
  Variable: string;
  ValueId: string | null;
  Value: string | null;
}

export interface IDecoderResults {
  [attributeId: number | string]: {
    attribute: IDecoderAttribute;
  };
}

export interface ITableProps {
  rows: Array<any>;
  columns: Array<any>;
}

export interface IVinSearchPageProps {
  vehicleSelection: {
    columns: string[];
    rows: string[];
    car: string;
  };
}

export interface INamePageProps {
  nameSelection: Function;
}

export interface IApplicationProps {}
