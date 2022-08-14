ok I decided to give Redux another try, now that I am doing more advance projects I have more state that needs to be managed and I understand why redux is better than passing props down from component to component. I have looked into redux before so I was familiar with ACTION, REDUCER, STORE. You also have the middleware between the action and reducer. I'm looking forward to advancing my redux with my coding to get a better understanding of it.

The actiontypes or contstant declares a variable
the reducer then needs to declare the initial state and then be written within a switch statement 
the store, holds all the data. You can combine reducers with, to have a cleaner code.
The provider is wrapped around the entire app so component have all the data.

So using redux with hooks and class components are a wee bit different!

I had a previous project working with redux in a class component and I was wondering what the different is?
SO you use the selector which is the equivalent to mapStateToProps which accesses the STATE 
Then the dispatch, changes the action as needed.