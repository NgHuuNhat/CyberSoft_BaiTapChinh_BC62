export default class Api{

    fetchData = () => {
        return axios({
            url: "https://65f55759f54db27bc022edfe.mockapi.io/clothes",
            method: "GET"
        })
    }

}