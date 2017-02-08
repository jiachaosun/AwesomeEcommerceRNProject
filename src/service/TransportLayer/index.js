class TransportLayer {

    fetchChannels(page) {
        console.log(`http://192.168.21.224:1337/channel?limit=10&skip=${page}`)
        return fetch(`http://192.168.21.224:1337/channel?limit=10&skip=${page}`)
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