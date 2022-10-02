const React = require('react');
const { logs } = require('../models/seed');
const DefaultLayout = require('../views/layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        const { log } = this.props;

        return (
            <DefaultLayout title="Edit Entry" group="Logs">
            <div>
                <h1>Edit an entry</h1>

                <form action={`/logs/${log._id}?_method=PUT`} method="POST">
                    <label htmlFor='title'>Title:</label>
                    <input type="text" id="title" name="title" defaultValue={log.title}/><br/><br/>

                    <label htmlFor='entry'>Entry:</label>
                    <input type="textarea" id="entry" name="entry" defaultValue={log.entry}/><br/><br/>

                    <label htmlFor='title'>Ship Is Broken?:</label>
                    <input type="checkbox" id="shipIsBroken" name="shipIsBroken" defaultChecked={log.shipIsBroken}/><br/><br/>

                    <input type="submit" value="Edit entry"/>
                </form>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;