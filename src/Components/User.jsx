import React from 'react';
import PropTypes from 'prop-types';

export const User = React.memo(
  ({name, age, people}) => {

    return (
      <div>
        <h2>{name} is {age}</h2>

        His friends are: 
        <ul>
          {people.map(friend => (
            <li>
              {friend}
              </li>
          ))}
        </ul>
      </div>
    );
  }
)

User.PropTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  people: PropTypes.arrayOf(PropTypes.string)
}

User.defaultProps = {
  people: [],
}