1.

- create react app
  'npx create-react-app my-first-project --template typescript'
  'cd my-first-project'
  'npm run start'

- Component:
  create component - conponent just looks like normal function, but it return 'JSX'.  
  'JSX' - like <html> tags in the javascript.
  'props' - object with values that compoenet recive from the user,
  'function Counter(props: {initial: number}) {}'
  '<Counter initial={0}/>'
  you can re-use components
  (more on component - lifecycle, children)

- useState -
  The function will run again (UI will render) only if state (or props) is changed.
  example:
  'const [counter, setCounter] = useState(0)'

2.

- install material UI
  'npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom'
  https://mui.com/material-ui/getting-started/

- react-router:
  'npm i react-router react-router-dom'

3.  on 02 folder

- useEffect:
  when we want to make change in the state in the compoenent (usually can only from the html events)
  first parameter - the function
  second parameter -  
  if empty: run each time,
  if []: run only once,
  if [counter, ...]: it runs once, and each time counter is changed
  return function - run before component is closed.

- custom hooks
  simple function that start with 'use', and we can use it in our components for share logic.

- uuid
  'npm i uuid'
  'npm i -D @types/uuid'
  'import { v4 as uuidv4 } from 'uuid';'
  use it: 'uuidv4()' // "8eaea60a-a0f6-4ae7-ad9c-b02ec0c4197d"

About "devDependencies" in 'package.json':
(-D === --save-dev)
'@types/[name]' it's the typescript for javascript library.

4.

- 25 common questions about react:
  https://techmonster.co.il/react-interview-questions/

- key={1}
  when we're render array of components to UI, react ask to give each one a unique 'key'.

- Fragments:
  Component that not creates actuall <div> in the html
  <React.Fragment></React.Fragment>
  or
  <></>

- Component lifecycle:

mount - see html on the screen

1. didMount - useEffect
2. didUpdate - useEffect without [], or useEffect that one of the array has updated
3. willUnmount - return of useEffect
   unmount

// 1. didMount and didUpdate - run when init, and each any state change
useEffect(() => {
console.log('1 useEffect');
})

// 2. didMount - run when init only
useEffect(() => {
console.log('2 useEffect');
}, [])

// 3. didMount and didUpdate of list - run when init, and when 'todos' state is changed
useEffect(() => {
console.log('3 useEffect');
}, [todos])

// 4. willUnmount and before didUpdate - the return function run on the init and before component closed
useEffect(() => {
return () => {
console.log('4 return useEffect')
}
}, [todos])

- createContext
  Method for share state throw many components (without need to use props), instead Redux or Mobx

1. create - 'export const UserContext = createContext(null)'
2. wrap component - 
<UserContext.Provider value={{name: "shir"}}>
  (...all our app)
</UserContext.Provider>
3. use - const user = useContext(UserContext) // {name: "shir"}

4.

- component 'children' (high-order-component)
  If we do:
  <TodoList>
    <div>hello wolrd</div>
  </TodoList>

  In the TodoList we now can show hello world by doing:
  {props.children}

- combine context with hook for 'global-hook'


- project plan: cv creator
  login with google
  form
  server
  use with external api

- useRef (uncontrolled component)
  'const inputRef = useRef(null)'
  <input ref={inputRef} />
  'inputRef.current.value'

- perfomance improvements (not so important) - useMemo / useReducer / useCallback




- npm react-query
