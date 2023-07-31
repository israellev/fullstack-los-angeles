01. 

* create react app
'npx create-react-app my-first-project --template typescript'
'cd my-first-project'
'npm start'

* Component:
create component - conponent just looks like normal function, but it return 'JSX'.  
'JSX' - like <html> tags in the javascript. 
'props' - object with values that compoenet recive from the user,
'<Counter initial={0}/>'
'function Counter(props: {initial: number}) {}'
you can re-use components

* useState - 
The UI will render again only if state (or props) is changed.
example:
'const [counter, setCounter] = useState(0)'

02. 

* useEffect:
when we want to make change in the state in the compoenent (usually can only from the html events)
first parameter - the function
second parameter -  
if empty: run each time, 
if []: run only once, 
if [counter, ...]: it runs once, and each time counter is changed
return function - run before component is closed. 

* react-router:
'npm i react-router react-router-dom'

* custom hooks

* useContext

