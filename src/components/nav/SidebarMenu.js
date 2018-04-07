import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const dataLadiesMenu = ['shirts', 'dresses', 'short', 'skirts', 'knitwear','shoes'];
const dataMenMenu = ['t-shirt', 'shirts', 'jeans', 'sportwear', 'shoes'];
const dataKidsMenu = ['sets', 'tops', 'outdoor'];

const propTypes = { handleProList: PT.func };

class SidebarMenu extends Component{
    constructor(props){
        super(props);

        this.state = { activeItem: ''};

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentDidMount(){
        const pathname = this.props.location.pathname;

        let arrPathname = pathname.match(/\/[a-z\-]+/g);
        if(arrPathname.length === 2){
            this.handleItemClick(arrPathname[1].substr(1));
            this.props.handleProList(pathname, arrPathname[1].substr(1))
        }
    }

    handleItemClick(item){
        this.setState({
            activeItem: item
        });
    }

    render(){
        const { handleItemClick } = this;
        const { activeItem } = this.state;
        const { handleProList } = this.props;
        const matchUrl =this.props.match.url;

        let dataSidebarMenu = null;

        switch (matchUrl){
            case '/ladies':
                dataSidebarMenu = dataLadiesMenu;
                break;
            case '/men':
                dataSidebarMenu = dataMenMenu;
                break;
            case '/kids':
                dataSidebarMenu = dataKidsMenu;
                break;
        }

        const itemsSidebarMenu = dataSidebarMenu.map(function(item, index){
            let itemMenu = item.replace(/\-/g,' ').replace(/^[a-z]?/,function($0){
                return $0.toUpperCase();
            });

            const link = (
                <Link
                    to={matchUrl + '/' + item}
                >
                    {itemMenu}
                </Link>
            );
            return(
                <Menu.Item
                    as='li'
                    key={index}
                    className={'sb-menu-item' + ' ' + `${activeItem === item ? 'selected' : ''}`}
                    onClick={() =>{
                        handleItemClick(item);
                        handleProList(matchUrl + '/' + item, item)
                    }}
                    children={link}
                />
            );
        });
        return(
            <Menu
                as='ul'
                className='sb-menu'
                text vertical
            >
                <Menu.Item
                    as='li'
                    className='sb-menu-item'
                    header
                >
                    Shop By Product
                </Menu.Item>
                {itemsSidebarMenu}
            </Menu>
        )
    }
}

SidebarMenu.propTypes = propTypes;

export default SidebarMenu;