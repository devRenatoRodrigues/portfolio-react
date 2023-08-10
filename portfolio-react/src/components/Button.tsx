import { Buttons } from '../types/Button';

function Button({ title, onClick, type, className, onMouseEnter, onMouseLeave }: Buttons) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >{title}</button>
  )
}

export default Button;