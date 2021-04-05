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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
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
			}
		}
	};
};

export default getState;
