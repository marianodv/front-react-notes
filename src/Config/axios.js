//intance in axios
import axios from "axios";

export default axios.create({
    baseURL:'https://api.mercadolibre.com/sites/MLA/'
})