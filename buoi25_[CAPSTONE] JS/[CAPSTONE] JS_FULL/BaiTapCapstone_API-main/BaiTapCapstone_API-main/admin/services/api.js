function Api(){

    this.fetchData = function(){
        const promise = axios({
            url: "https://65d8a725c96fbb24c1bc05cb.mockapi.io/api/ProductCapstone",
            method: "GET",
        });
    
        return promise
    }

    this.getProductById = function(id){
        const promise = axios({
            url: `https://65d8a725c96fbb24c1bc05cb.mockapi.io/api/ProductCapstone/${id}`,
            method: "GET",
        });
    
        return promise
    }

}