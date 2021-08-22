import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( {user, school} ) => {
    const onClick = () => {
        console.log("Clicked");
    }
    
    return (
        <header className='header'>
            <h1>The Task Tracker App for {user} from {school} </h1>
            <Button color="green" text="Add" onClick={onClick}/>
        </header>
    )
}

Header.propTypes = {

    user: PropTypes.string, 
    school: PropTypes.string,
}

Header.defaultProps = {
    user: "Hafeed Elbekkaoui",
    school: "Epita",
}

export default Header
