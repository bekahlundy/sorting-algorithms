# Question 1:

## Range

Create a function called `range()`. Range should take two numbers and return an array of numbers from the first argument to the last argument.

For example:

```js
 range(2, 5)
 // => [2, 3, 4, 5]
```

If the first argument is greater than the second argument, then it should return the array if numbers in reverse order.

For example:

```js
range(5, 2)
// => [5, 4, 3, 2]
```

If there is only one argument, then the array should start at zero and increment up to the argument.

For example:

```js
range(3)
// => [0, 1, 2, 3]
```

----------------------------------------------------------
# Question 2:

## Formatting   

You're given an array of email addresses, some of which have capital letters. Return the list of addresses with all-lowercase formatting.

For example:

```js
formatEmails(['Brenna@turing.io', 'tAyLoR@turing.io'])
// => ['brenna@turing.io', 'taylor@turing.io']
```
