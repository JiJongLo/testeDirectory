import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/users';
import RenderTable  from '../components/RenderTable'
class App extends Component {
    componentDidMount () {
        const {dispatch} = this.props;
        dispatch(fetchUsers('users.json'));

    }
    componentWillReceiveProps(nextProps) {
        const {dispatch, users} = this.props;
    }
    render() {
        const {users} = this.props;
        return (
            <div>
               <RenderTable  users = { users }/>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const {users} = state;
    return {
      users  :users
    };
}
export default connect(mapStateToProps)(App);
