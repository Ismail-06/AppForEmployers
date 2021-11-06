import EmployeersListItem from '../employeers-list-item/employeers-list-item'


const EmployeersList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(item => {
        let {id, ...itemProps} = item;
        return (
            <EmployeersListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    });
    return (
        <ul className="applist list-group">
           {elements}
        </ul>
    )
}

export default EmployeersList;