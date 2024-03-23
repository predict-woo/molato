import _axios from "axios";
import { backServer } from "tool/loadenv";

const axios = _axios.create({ baseURL: backServer, withCredentials: true });

export default axios;
