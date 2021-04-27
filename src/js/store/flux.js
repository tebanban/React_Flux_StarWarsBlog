const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleList: [],
			planetsList: [],
			starshipsList: [],
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

			fetchPlanets: async () => {
				const URL = "https://swapi.dev/api/planets/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				console.log(">>DATA>>", json);
				setStore({ planetsList: json.results });
			},

			fetchStarships: async () => {
				const URL = "https://swapi.dev/api/starships/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				console.log(">>DATA>>", json);
				setStore({ starshipsList: json.results });
			},

			setFavorites: name => {
				const { favorites } = getStore();
				//const store = const {favorites}
				setStore({ favorites: [...favorites, name] });
			},

			deleteFavorite: name => {
				const store = getStore();
				const updateFavorites = store.favorites.filter(item => {
					return item != name;
				});
				setStore({ ...store, favorites: updateFavorites });
			}
		}
	};
};

export default getState;
