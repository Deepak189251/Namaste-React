 import "./filterSwitch.css"

 const FilterSwitch = ({onToggle, isToggled}) => {

    return(
        <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle}></input>
            <span className="slider"></span>
        </label>
    )
 }

 export default FilterSwitch