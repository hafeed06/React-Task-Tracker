import propTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button className='btn' onClick = {onClick} style={{backgroundColor: color}}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'streelblue',
}

Button.propTypes = {
color: propTypes.string,
text: propTypes.string,
onClick: propTypes.func,
}

export default Button
