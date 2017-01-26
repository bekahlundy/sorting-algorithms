# Question 1:

## Cardinal Directions

You are given a set of cardinal directions, some of which are counter-productive. Clean up the directions so the you are not backtracking.

For example:

```js
cleanDirections(["north", "south", "east", "west", "north"])
// => ["north"]
```

If all directions cancel out, return the string "Stay where you are!"

For example:

```js
cleanDirections(["north", "south"])
// => "Stay where you are!"
```

----------------------------------------------------------

# Question 2:

## Specified Indices

Given an array of elements, return all elements of that array *except* the ones with specified indices.

For example:

```js
leaveOutElements(['a', 'b', 'c', 'd', 'e'], [1, 3])
// => ['a', 'c', 'e']
```
