class TransportLayer {

    fetchChannels(page) {
        const url = `http://192.168.21.224:1337/channel?limit=10&skip=${page}`;
        console.log(url);
        return fetch(url)
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    fetchCategories(page) {
        const url = `http://192.168.21.224:1337/categories?limit=10&skip=${page}`;
        console.log(url);
        return fetch(url)
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    fetchProductsByCategory(page, category) {
        const url = `http://192.168.21.224:1337/product?categoryBy=${category}&limit=10&skip=${page}`;
        console.log(url);
        return fetch(url)
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch((error) => {
                console.error(error);
            });
    }

}

const instance = new TransportLayer();

export default instance;