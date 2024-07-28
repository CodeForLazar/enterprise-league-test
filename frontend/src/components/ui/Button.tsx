import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
   return (
      <button className='ui-button' {...props}>
         {children}
      </button>
   );
};

export default Button;
