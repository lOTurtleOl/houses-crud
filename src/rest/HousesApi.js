const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

// class component to hold rest api calls
class HousesApi {
    // fetch data from api with await to manage promises
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log('Oops, looks like fetchHouses had an issue.', e);
        }
    }

    // takes house argument and id, updates api
    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch (e) {
            console.log('Oops, looks like updating houses had an issue.', e);
        }

    }
}

// create new instance of class and export
export const housesApi = new HousesApi();