import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';
import EmployeersList from '../employeers-list/employeers-list';
import SeachPanel from '../search-panel/search-panel';
import './app.css'
 

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {name: 'Ismail', salary: 4000, increase: true, rise: true, id: 1},
                {name: 'Islam', salary: 2000, increase: false, rise: false, id: 2},
                {name: 'Magomed', salary: 3000, increase: false, rise: false, id: 3}
            ], 
            term: '',
            filter: 'rise'
        }
        this.id = 4
    }


    searchEmp = (items, term) => {
        if(term.length === 0) {
            return items
        }

        return items.filter(item => item.name.indexOf(term) > -1)
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onToggleProp = (id, prop) => {
       this.setState(({data}) => ({
           data: data.map(item => {
               if(item.id === id) {
                    return {...item, [prop]:!item[prop]}
               }
               return item
           })
       }))
    }    

    removeDataItem = (id) => {
        this.setState(({data}) => {
                return {
                    data: data.filter(item => item.id !== id)
                }
        })
    }

    addDataItem = (name, salary) => {
        if(name !== '' && salary !== '') {
            const newItem = {
                name,
                salary,
                increase: false,
                rise: false,
                id: this.id++
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem]
                return {
                    data: newArr
                }
            })
        }
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 2000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }   

  

     render() {
        const {data, term, filter} = this.state,
              countUsers = data.length,
              increaseUsers = data.filter(item => item.increase).length,
              visibleItems = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
               <AppInfo 
                    countUsers={countUsers}
                    increaseUsers={increaseUsers}
               />
               <div className="search-panel">
                   <SeachPanel onUpdateSearch={this.onUpdateSearch}/>
                   <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
               </div>
               <EmployeersList 
                   data={visibleItems}
                   onDelete={this.removeDataItem}
                   onToggleProp={this.onToggleProp}
               />
               <EmployeersAddForm  onAdd={this.addDataItem}/>
            </div>
        )
     }
 }

export default App;