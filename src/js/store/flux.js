const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [
				{
					title: "Luke Skywalker",
					background: "white",
					initial: "white"
				},
				{
					title: "Yoda",
					background: "white",
					initial: "white"
				}
			],

			peopleList: [],
			favorites: []
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const character = store.character.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ character: character });
			},
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
			}
		}
	};
};

export default getState;
