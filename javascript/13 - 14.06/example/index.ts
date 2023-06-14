export { }

// json is string that use in all internet and laguages 
console.log(JSON.stringify({a: 1})) // '{a: 1}' - object to json
console.log(JSON.parse('{"a": 1}')) // {a: 1} - json to object

console.log(JSON.stringify([{a: 1}])) // '[{a: 1}]' - array to json
console.log(JSON.parse('[{"a": 1}]')) // [{a: 1}] - json to array
    

/* Rest API - 
url = "https://jsonplaceholder.typicode.com/posts/1"
method = "GET" | "POST" | "PUT" | "DELETE"
headers = {}
*/

// @ts-ignore
fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"})
.then(res => res.json())
.then(res => {
    console.log(res)
    console.log(res[0])
    
})
.catch(error => console.log(error))





