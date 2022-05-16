import axios from "axios";

export const fetchItems = async (setItems, rowsPerPage, page) => {
    const response = await axios.get(`https://api.punkapi.com/v2/beers`, {
        params: {
            page: page + 1,
            per_page: rowsPerPage
        }
    })
    setItems(response.data)
}
