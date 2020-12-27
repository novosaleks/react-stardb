import React, {Component} from 'react';

const setEntities = (ComponentToView) => {
    return class extends Component {
        state = {
            items: [],
        };

        componentDidMount = () => {
            this.props.getData()
                .then(items => this.setState({
                    items,
                }));
        };

        render = () => {
            return <ComponentToView {...this.props} itemList={this.state.items}/>;
        };
    };
};

export default setEntities;