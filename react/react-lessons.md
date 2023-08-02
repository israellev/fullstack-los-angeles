01. 

* create react app
'npx create-react-app my-first-project --template typescript'
'cd my-first-project'
'npm run start'

* Component:
create component - conponent just looks like normal function, but it return 'JSX'.  
'JSX' - like <html> tags in the javascript. 
'props' - object with values that compoenet recive from the user,
'function Counter(props: {initial: number}) {}'
'<Counter initial={0}/>'
you can re-use components

* useState - 
The function will run again (UI will render) only if state (or props) is changed.
example:
'const [counter, setCounter] = useState(0)'

02. 

* install material UI
'npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom'
https://mui.com/material-ui/getting-started/

* react-router:
'npm i react-router react-router-dom'

* useContext

03. on 02 folder

* useEffect:
when we want to make change in the state in the compoenent (usually can only from the html events)
first parameter - the function
second parameter -  
if empty: run each time, 
if []: run only once, 
if [counter, ...]: it runs once, and each time counter is changed
return function - run before component is closed. 

* custom hooks
simple function that start with 'use', and we can use it in our components for share logic.

* uuid
'npm i uuid'
'npm i -D @types/uuid'
'import { v4 as uuidv4 } from 'uuid';'
use it: 'uuidv4()' // "8eaea60a-a0f6-4ae7-ad9c-b02ec0c4197d"

About "devDependencies" in 'package.json':
(-D === --save-dev)
'@types/[name]' it's the typescript for javascript library.


