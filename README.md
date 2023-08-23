# Meal Planning with RTK

This was built as a weekend project to learn more about state management using Redux Toolkit. The user will be able to add a recipe to their meal planner by selecting a day/time and entering the url of the recipe. The request is then sent to the backend where Spoonacular's recipe extraction API is called and returns the recipe data. That data is then stored in local storage, with the logic being handled by redux-persist since storing non-serialized data in redux is not recommended.

## Links

- [Live site](https://rtk-meal-planner.onrender.com)
- [Repo](https://github.com/jacastanon01/mealplanner)
- [Recipe extraction API](https://spoonacular.com/food-api/docs#Extract-Recipe-from-Website)

## Built with

- React
- Redux Toolkit
- Redux Persist
- Vanilla CSS
- Node / Express
- Axios

<img width="1428" alt="Screenshot 2023-08-23 at 1 05 59 AM" src="https://github.com/jacastanon01/mealplanner/assets/24418510/717a8ad2-2eed-4764-a269-403f05dce0de">
<img width="527" alt="Screenshot 2023-08-23 at 1 08 08 AM" src="https://github.com/jacastanon01/mealplanner/assets/24418510/63d56d63-9556-4edd-9e4c-a9189cf38ede">


## What I learned

I tried to approach this project using Redux best practices. Fortunately Mark Erikson (creator of RTK) has written extensively of how to utilize this library. RTK takes care of a lot of the boiler plate to set up a redux store and simplifies the process of using and updating state with hooks. I enjoyed how organized you can make your state by abstracting different states into slices with their own logic to handle that area (reducers).
