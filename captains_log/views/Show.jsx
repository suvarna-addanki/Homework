const React = require('react');
const DefaultLayout = require('../views/layouts/DefaultLayout')
class Show extends React.Component {

    render() {
        
        const { log } = this.props    //object destructuring

        return (
            <DefaultLayout title ="Show Entry" group = "logs">
            <div>
            <h1>Show Entry</h1>
                <p>
                    
                    <span className='label-color'>Title:</span> {log.title}
                </p>
                <p>
                    
                    <span className='label-color'>Entry:</span> {log.entry}
                </p>
                <p>
                    {log.shipIsBroken ? "The ship is not operational" : "The ship is operational"}.
                </p>

                <button className = "edit-button">
                     <a href={`/logs/${log._id}/edit`} className= "button-link">Edit</a>
                </button>

                <br/><br/>

                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" id="delete-color"/>
                </form><br/>

                {/* <button>
                    <a href={`/logs/${log._id}/edit`}>Edit</a>
                </button>

                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form> */}


                <nav>
                    <a href="/logs" className= "back-link">Back</a>
                </nav>
            </div>
            </DefaultLayout>
            
        )
    }
}

module.exports = Show;