## Running Tasks

### `Task 1`

1. Go to [http://localhost:3000/view-programmers](http://localhost:3000/view-programmers)
1. Add a programmer
1. Change skill level using the slider
1. The original programmer's skill level should not be changing now

**Fixed**

* Fixed reference of original programmer being used by the selected programmmer
* Console errors for `Grid` spacing
* Console warning for `button` inside `button` - invalid DOM
* Console warning for key prop of children

**Commits**
* [1a7a7f7](https://github.com/9inpachi/creativeMorph-frontend-test/commit/6a3ed57cbb9659e30a3f739d37807c634a6b22d9)
* [d9d63e9](https://github.com/9inpachi/creativeMorph-frontend-test/commit/9b7c046c3ad38586b7a7a902cfe4ecb49e9ce28c)

### `Task 2`

1. Go to [http://localhost:3000/tinder-for-dogs](http://localhost:3000/tinder-for-dogs)
1. Like or dislike (or none) the current dog and click `Next` (icon)
1. Keep liking, disliking and moving to the next dog until you are satisfied
1. Click on the `Go to data route` link at the top of the dog image
1. See the data there and paginate using the options at the bottom right of the table

**Commits**
* [9b7c046](https://github.com/9inpachi/creativeMorph-frontend-test/commit/1a7a7f773f59703d77dbcfd7ae57acc6041e7711)

PEACE.

---

## Test details

In order to take this test, please create a fork of this repo from your own github profile and push all the changes there in your forked repo. Once you have completed all the tasks, send a link of this forked repo, with all your changes pushed to masoodtalha7@gmail.com. Please note that no other form of submission will be considered. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `Task 1`

In this task you have to resolve an issue in this application. Please navigate to the page `http://localhost:3000/view-programmers`. Here you will find a list of programmers with a name and a skill level. Clicking on the `Add` button on any of these programmers copies them into a new with a slider that can change the skill level of this newly copied programmer. The problem is that when we try to change the skill level of this newly added programmer, the original skill number also changes. This is not right. Please fix this issue!


### `Task 2`

In this task you have to create a simple tinder for our beloved dogs. Please add another route for this task. 

To get a random dog photo do a `GET Request` on this endpoint `https://dog.ceo/api/breeds/image/random`

The response should contain the status message along with a random link to a dogs photo. Display this photo in the center of the page (with decent dimensions obviously). Below the photo you have to display 2 options, like (with a green tick icon) and dislike (with a red cross icon). User can both like or dislike a photo. Whatever action they take, it is stored in redux. There should be an array in redux that maintains the state of all the actions they took. 

```
[
 {
    photoLink,
    LikedOrDisliked
 }
]
```

Make sure you choose proper type for each data structure as we're using TS and can take max advantage from strong typings. 

Finally create another route that displays all the results from redux in a table. Paginate the table well. This data will only be stored in redux and will be removed as soon as we refresh the page.

Finally try to make the UI as sleek as possble. Points will be given to a well though UI. If you can write some frontend tests as well, that will give you some more extra points but these tests are not mandatory. Following points will however be considered.

- How well you follow the current architecture
- How well you define your types 
- How you manage your reducers, types and actions
- How well your code has been written
- How much thought you actually put in UI and UX
