- [ ] Why would you use class component over function components (removing hooks from the question)?

        Alot of legacy code that uses React is written with class components. 
        This would probably be the only reason I would use it, because it 
        would be somewhat tedious to refactor everything with hooks.

- [ ] Name three lifecycle methods and their purposes.

        * componentDidMount - Component is mounted and ready to go. Data can be loaded
          from this point. So API calls are perfectly placed here. Adding event listeners
          is ideal here as well.
                
        * render - Render is the lifecycle method that is most used. This method 
          handles the rendering of the components onto the user interafce. It is the only
          method that must always be used when using the REact library.
                
        * componentWillUnmount - The component is about to die. Outgoing network 
          requests can be canceled here. Basically, cleanup can be done here.

- [ ] What is the purpose of a custom hook?

        Custom hooks are ment as mechanisms that reuse stateful logic.

- [ ] Why is it important to test our apps?

        So that when the app is finished we know that the application will work 
        properly. We know that it will not break because of programmer error.
