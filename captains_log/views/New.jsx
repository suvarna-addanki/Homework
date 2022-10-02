const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayout')
class New extends React.Component {
    render() {
        return(
            <DefaultLayout title="New Entry" group="Logs">
            <div>
                <h1>Create A New log Entry</h1>

                    <form action ="/logs" method ="POST">
                        <label htmlFor='title'>Title:</label>
                        <input type ="text" id="title" name ="title" />
                        <br/><br/>

                        <label htmlFor='entry'>Entry:</label>
                        <input type="textarea" id ="entry" name= "entry" />
                        <br/><br/>

                        <label htmlFor='title'>Ship Is Broken?:</label>
                        <input type= "checkbox" id="shipIsBroken" name ="shipIsBroken" />
                        <br/><br/>

                        <input type="submit"  value="Create log"/>

                        
                    </form>
            </div>
            </DefaultLayout>
        )
    }

}

module.exports = New
