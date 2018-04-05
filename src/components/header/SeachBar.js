import React, { Component } from 'react';
import { Menu, Search } from 'semantic-ui-react';
import axios from 'axios';



class SeachBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            loadData: [],
            results: [],
            value: ''
        };

        this.handleResultSelect = this.handleResultSelect.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearching = this.handleSearching.bind(this);
        this.handleReachClear = this.handleReachClear.bind(this);
    }

    componentDidMount(){
        axios
            .get('/src/data/productData/database.json')
            .then( res => this.setState({
                loadData: res.data
            }))
            .catch(err => console.log(err))
    }

    handleResultSelect(e){
        this.setState({
            value: e.target.innerHTML
        })
    }

    handleSearchChange(e){
        this.setState({
            isLoading: true,
            value: e.target.value
        });

        setTimeout(() => {
            if(this.state.value.length < 1) return;

            const regSearch = new RegExp(this.state.value, 'gim');

            let resultMatch = new Array();
            this.state.loadData.forEach(function(item, index){
                if(item.name.search(regSearch) !== -1) resultMatch.push({
                    title: item.name
                });
            });

            resultMatch = resultMatch.length <= 5 ? resultMatch : resultMatch.slice(0,5);

            this.setState({
                isLoading: false,
                results: resultMatch
            })
        }, 500)
    }

    handleSearching(e){
        if(e.keyCode !== 13) return;
        if(e.target.value.trim() === '') return;
        window.location.href = '/search' + e.target.value;
    }


    handleReachClear(){
        this.setState({
            isLoading: false,
            results: [],
            value: ''
        })
    }

    render(){
        const { value, results, isLoading } = this.state;

        return(
            <Menu.Menu position='right'>
                <Search
                    className='search-bar'
                    placeholder='Search Products'
                    loading={isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={this.handleSearchChange}
                    onKeyDown={this.handleSearching}
                    results={results}
                    value={value}
                />
            </Menu.Menu>
        )
    }
}
export default SeachBar;