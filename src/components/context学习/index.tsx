import React, { Component } from 'react'
const ThemeContext = React.createContext<string>('light');

 class GrandSon extends Component {
 static contextType = ThemeContext;
 context!: React.ContextType<typeof ThemeContext>
// declare context: React.ContextType<typeof ThemeContext>
  render() {
    return (
        <ThemeContext.Consumer>
            {   (context)=>(
                <div>{11212}{context}</div>
            ) }
        </ThemeContext.Consumer>
    
    )
  }
}

class Son extends Component {
    render() {
      return (
        <GrandSon/>
      )
    }
  }
  


function Father () {
    return (
        <div>
           <ThemeContext.Provider value='dark'>
                     <Son/>
           </ThemeContext.Provider>
        </div>
    )
}

export default Father