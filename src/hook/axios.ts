import _axios from "axios";
import { backServer } from "tool/loadenv";

_axios.defaults.withCredentials = true;

const axios = _axios.create({ baseURL: backServer });

export default axios;
