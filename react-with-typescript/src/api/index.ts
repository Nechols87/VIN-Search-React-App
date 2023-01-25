import axios from "axios";
import IVehicleApiResponse, { IDecoderAttribute } from "../interface/index";

// The initial path of all API calls.
const VPIC_API_URI = "https://vpic.nhtsa.dot.gov/api/vehicles/";
// The response format requested in all API calls.
const RESPONSE_FORMAT = "json";

// A service used to interface with the vPIC API.
const VehicleApiService = {
  // Decodes the given VIN using the vPIC API and returns a promise of decoded vehicle attributes.
  decodeVin: function (vin: string) {
    const uri = `${VPIC_API_URI}/decodevinextended/${vin}?format=${RESPONSE_FORMAT}`;
    return axios.get<IVehicleApiResponse<IDecoderAttribute>>(uri);
  },

  findPhoto: async function (make: string, model: string) {
    const uri = `http://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=${make}+${model}`;
    const result = await axios.get<any>(uri);
    const string = result.data;
    const stringRes = string.slice(string.indexOf(">http") + 1);
    return stringRes.substring(0, stringRes.length - 9);
  },
};

export default VehicleApiService;
