const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleList: [],
			favorites: []
		},
		actions: {
			fetchPeople: async () => {
				const URL = "https://swapi.dev/api/people/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				console.log(">>DATA>>", json);
				setStore({ peopleList: json.results });
			},

			setFavorites: name => {
				const { favorites } = getStore();
				//const store = const {favorites}
				setStore({ favorites: [...favorites, name] });
			}
		}
	};
};

export default getState;
