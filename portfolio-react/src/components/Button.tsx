import { Buttons } from '../types/Button';

function Button({tittle, onClick, type, className, onMouseEnter, onMouseLeave  }: Buttons) {
  return (
    <button 
    onClick={onClick}
    type={ type }
    className={className}
    onMouseEnter= {onMouseEnter}
    onMouseLeave={onMouseLeave }
    >{tittle}</button>
  )
}

export default Button;