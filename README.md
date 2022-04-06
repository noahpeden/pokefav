# Getting Started with Pokefav

1. Clone repo
2. npm i && npm start

## About the code

I wanted to demonstrate a few things that you can see through poking around:
1. We've created a redux-esque Context in FavoritesContext using useReducer and Context
2. We're fetching multiple pieces of dependent data from the pokeapi (docs here: https://pokeapi.co/docs/v2#pokemon)
3. I used my favorite style of frontend architecture gleaned from [this article](https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/) that utilizes five directories: components, contexts, hooks, pages, and services. 
4. I also created another piece of shared state in the favorites context to save the search state


### To do's and bugs
1. Add error state to search
2. Utilize services folder to re-use all the calls to the poke api
3. Match up the sprite images with the favorites, since each sprite depends on a second call to the api, but I haven't figured out how to match them up yet.
4. Solidify the image match that is currently implemented on featured and all
5. Add lazy loading with suspense

