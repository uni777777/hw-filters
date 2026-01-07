function Toolbar({filters, selected, onSelectFilter}){    
    return(
        <ul className="toolbar">
            {filters && filters.map((filter,i) => (
            <li key={i} className={selected===filter ? 'selected' : ''} onClick={() => onSelectFilter(filter)}>
            {filter}
            </li> 
            ))} 
        </ul>    
    )
}

export default Toolbar
