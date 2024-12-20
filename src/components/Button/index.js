/* eslint-disable react/require-default-props */ 
// rajout d'un commentaires pour désactiver la règle esLint
// react/require-default-props
import PropTypes from "prop-types";

import "./style.scss";

export const BUTTON_TYPES = {
  DEFAULT: 1,
  SUBMIT: 2,
};

// Les valeurs par défaut ont été déplacées des `defaultProps` vers les paramètres de la fonction
const Button = ({
  title = "",
  onClick = () => null,
  type = BUTTON_TYPES.DEFAULT,
  disabled = false,
  children = null,
}) => {
  switch (type) {
    case BUTTON_TYPES.DEFAULT:
      return (
        <button
          type="button"
          disabled={disabled}
          className="Button"
          data-testid="button-test-id"
          onClick={onClick}
          title={title}
        >
          {children}
        </button>
      );
    case BUTTON_TYPES.SUBMIT:
      return (
        <input
          disabled={disabled}
          className="Button"
          type="submit"
          data-testid="button-test-id"
          value={children}
          onClick={onClick}
          title={title}
        />
      );
    default:
      return (
        <button
          type="button"
          disabled={disabled}
          className="Button"
          data-testid="button-test-id"
          onClick={onClick}
          title={title}
        >
          {children}
        </button>
      );
  }
};

// eslint-disable-next-line react/no-typos
Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.number,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
