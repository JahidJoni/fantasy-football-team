import { faArrowCircleRight, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Hire.css'

const Hire = (props) => {
    const hire = props.hire;
    const totalSalary = hire.reduce((sum, player) => sum + player.salary, 0) 

    
    return (
        <div>
            <h2>Total  hired : {hire.length} </h2>
            <div className="selectedName">{

               hire.map(player => <div>{player.name}  <FontAwesomeIcon icon= {faArrowCircleRight}/>  {player.salary} <FontAwesomeIcon icon= {faDollarSign}/>y</div>)

            }
            </div>
            <h2>Total Salary Cost: {totalSalary} $</h2>
        </div>
    );
};

export default Hire;