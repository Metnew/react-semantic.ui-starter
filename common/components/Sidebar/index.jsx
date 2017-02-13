import React, {Component} from 'react';
import {Link} from 'react-router'
import {Menu, Icon} from 'semantic-ui-react'
import Logo from './Logo.jsx';
import cx from 'classnames'
require('./Sidebar.scss');

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.sidebarRouting = [
            {
                name: 'Dashboard',
                href: '/',
                icon: 'dashboard'
            }, {
                name: 'Inbox',
                href: '/inbox',
                icon: 'mail'
            }, {
                name: 'Profile',
                href: '/profile',
                icon: 'user'
            }, {
                name: 'Payments',
                href: '/payments',
                icon: 'payment'
            }
        ]
    }

    static propTypes = {
        docked: React.PropTypes.bool,
        location: React.PropTypes.object,
        onRequestChangeLeftNav: React.PropTypes.func,
        onRequestChangeList: React.PropTypes.func,
        open: React.PropTypes.bool,
        isLoggedIn: React.PropTypes.bool,
        logout: React.PropTypes.func
    }
    //
    // static contextTypes = {
    //     router: React.PropTypes.object.isRequired
    // }
    //

    render() {
        const {
            open,
            isLoggedIn
        } = this.props;
        // const style = this.getStyles();
        let routes = this.sidebarRouting.map((route, i) =>
        <Menu.Item as={Link} to={route.href} key={i} icon activeClassName='active'>
            <Icon name={route.icon} />
            {route.name}
        </Menu.Item>)

        let sidebarStyles = cx({
            open,
            sidebar: true
        })

        return (
            <Menu vertical fixed='left' className={sidebarStyles}>
                <Logo/>
                {isLoggedIn && routes}
                { isLoggedIn && <Menu.Item className="logout" onClick={this.props.logout}>
                    <Icon name='sign out' />
                    Logout
                </Menu.Item>}
            </Menu>
        )
    }
}
