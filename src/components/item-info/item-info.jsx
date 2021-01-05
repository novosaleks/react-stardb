import React, {Component} from 'react';

import './item-info.scss';
import Spinner from '../spinner';
import ErrorNotification from '../error-notification';

const InfoLabel = ({title, value, item}) => {
    return <li className="list-group-item pt-0">{title}: {item[value]}</li>;
};

export {InfoLabel};

export default class ItemInfo extends Component {

    state = {
        item: {},
        loading: true,
        fail: false,
    };

    componentDidMount = () => {
        this.getItem();
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.id !== this.props.id) {
            this.getItem();
        }
    };

    updateItem = (item) => {
        this.setState({
                item,
                loading: false,
                fail: false,
            }
        );
    };

    getItem = () => {
        const {id} = this.props;

        if (!id) {
            return;
        }

        this.setState({
            loading: true,
            fail: false,
        });


        this.props.getItem(id)
            .then(item => this.updateItem(item))
            .catch(() => this.setState({
                    loading: false,
                    fail: true,
                })
            );
    };

    render() {
        const {item, loading, fail} = this.state,
            children = React.Children.map(this.props.children, child => {
                return React.cloneElement(child, {item});
            }),
            content = loading ? <Spinner/> :
                fail ? <ErrorNotification/> : <AppInfoContent item={item}
                                                              getURL={this.props.getURL}
                                                              children={children}/>;

        return (
            <div className="app-info container bg-dark p-3 text-center">
                {content}
            </div>
        );
    }
};

const AppInfoContent = ({item, getURL, children}) => {
    const {id, name} = item;

    return (
        <div className="row">
            <div className="col-4 text-left">
                <img className='w-100 rounded'
                     src={getURL(id)}
                     alt={name}/>
            </div>
            <div className="col text-left">
                <h2 className="random-planet__title">{name}</h2>
                <ul className="list-group app-info__descr list-group-flush ml-3">
                    {children}
                </ul>
            </div>
        </div>
    );
};