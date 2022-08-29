const pokeAPIBaseURL = "https://pokeapi.co/api/v2/pokemon/";

const loadPokemon = async () => {
      
      const randomIds = new Set();
      while(randomIds.size < 8){
            const randomNumber = Math.ceil(Math.random() * 150);
            randomIds.add(randomNumber);
      }
      // const randomIdsArr = [...randomIds]
      // for (let i = 0; i < randomIdsArr .length; i++) {
      //       const result = await fetch(pokeAPIBaseURL + randomIdsArr[i]);
      //       const pokemon = await result.json();
            
      // }

      // More efficient way
      const pokemonPromises = [...randomIds].map( id => fetch(pokeAPIBaseURL + id));
      const responses = Promise.all(pokemonPromises);
      const pokemon = await Promise.all((await responses).map( res => res.json()));
      console.log(pokemon);
}

loadPokemon();