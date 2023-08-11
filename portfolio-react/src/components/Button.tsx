import { Buttons } from '../types/Button';

function Button({ title, type, className, onMouseEnter, onMouseLeave }: Buttons) {
  return (
    <button
      type={type}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >{title}</button>
  )
}

export default Button;