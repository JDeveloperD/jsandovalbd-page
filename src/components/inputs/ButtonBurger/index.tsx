import { ButtonHTMLAttributes, FC } from 'react';
import { Background, Burger } from './styled';

type ButtonBurgerProps = {
  active?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonBurger: FC<ButtonBurgerProps> = ({ active, ...props }) => {
  return (
    <Background {...props}>
      <Burger active={active} />
    </Background>
  );
};

export default ButtonBurger;
