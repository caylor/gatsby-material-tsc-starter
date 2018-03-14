"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const gatsby_link_1 = require("gatsby-link");
const material_ui_1 = require("material-ui");
const menu_1 = require("material-ui/svg-icons/navigation/menu");
const home_1 = require("material-ui/svg-icons/action/home");
const class_1 = require("material-ui/svg-icons/action/class");
const person_1 = require("material-ui/svg-icons/social/person");
const link_1 = require("material-ui/svg-icons/content/link");
const nav_bg_png_1 = require("../../static/nav-bg.png");
class Nav extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            navVisible: false
        };
    }
    toggleDrawer() {
        this.setState({
            navVisible: !this.state.navVisible
        });
    }
    routeTo(route) {
        gatsby_link_1.navigateTo(route);
        this.toggleDrawer();
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(material_ui_1.IconButton, { onClick: this.toggleDrawer.bind(this), style: { position: 'fixed', top: '20px', left: '10px' } },
                React.createElement(menu_1.default, null)),
            React.createElement(material_ui_1.Drawer, { docked: false, open: this.state.navVisible, onRequestChange: (navVisible) => this.setState({ navVisible }) },
                React.createElement("div", { style: { height: 160, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${nav_bg_png_1.default})`, backgroundSize: 'auto 180px' } },
                    React.createElement(material_ui_1.Avatar, { size: 60, style: { margin: '0 auto' } }, "C")),
                React.createElement(material_ui_1.List, null,
                    React.createElement(material_ui_1.ListItem, { primaryText: "Home", leftIcon: React.createElement(home_1.default, null), onClick: () => this.routeTo('/') }),
                    React.createElement(material_ui_1.ListItem, { primaryText: "Tags", leftIcon: React.createElement(class_1.default, null), onClick: () => this.routeTo('/tags') })),
                React.createElement(material_ui_1.Divider, null),
                React.createElement(material_ui_1.List, null,
                    React.createElement(material_ui_1.ListItem, { primaryText: "About", leftIcon: React.createElement(person_1.default, null), onClick: () => this.routeTo('/about') }),
                    React.createElement(material_ui_1.ListItem, { primaryText: "Links", leftIcon: React.createElement(link_1.default, null), onClick: () => this.routeTo('/links') })))));
    }
}
exports.default = Nav;
//# sourceMappingURL=index.js.map