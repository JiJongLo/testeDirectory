import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    componentDidMount () {
        const {dispatch} = this.props;
        dispatch(initEnvironment());
        dispatch(initAuth());
        dispatch(initNavigator());
    }

    renderContent() {
        const {path} = this.props;
        switch(path[0]) {
        case 'songs':
            switch(path.length) {
            case 1:
                return <SongsContainer />;
            case 2:
                return <SongContainer />;
            }
        case 'users':
            return <UserContainer />;
        case 'me':
            return <MeContainer />;
        default:
            return;
        }
    }

    render() {
        const {height, isMobile, width} = this.props;
        if (isMobile) {
            return (
                <div className='mobile' style={{height: `${height}px`, width: `${width}px`}}>
                    <PlayerContainer />
                    {this.renderContent()}
                    <NavContainer />
                </div>
            );
        }

        return (
            <div>
                <NavContainer />
                {this.renderContent()}
                <PlayerContainer />
                <ModalContainer />
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    path: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    const {environment, navigator} = state;

    return {
        path: navigator.route.path,
        width: environment.width
    };
}


export default connect(mapStateToProps)(App);
