const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayout')
class Index extends React.Component {

    render() {
        
        const { logs } = this.props

        console.log(logs)  //getting the data from log controller

        return (
            <DefaultLayout title="Captain's Log" group="Logs">
                <div>
                    <h1>Captain's Log Index Page</h1>
                    <ul id="logs-index">
                        {logs.map((log) => {
                            return (
                                <li key={log._id}>
                                    Log: <a href={`/logs/${log._id}`}>{log.title}  {log.entry}</a>
                                    {/* <button className = "edit-button">
                                        <a href={`/logs/${log._id}/edit`} className= "button-link">Edit</a>
                                    </button>

                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="Delete" id="delete-color"/>
                                    </form><br/> */}
                                     {/* <a href={`/logs/${log._id}`}>{log.entry}</a><br/><br/> */}
                                </li>
                                
                            )
                        })}
                    </ul>

                    <nav id="creating">
                        <a href="logs/new">Create a new a log </a>
                    </nav>
                </div>
                </DefaultLayout>
        )
    }
}

module.exports = Index;