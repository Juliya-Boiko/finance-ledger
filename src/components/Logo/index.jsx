import { ReactComponent as LogoIcon } from '../../images/icons/logo.svg';
import { LogoContainer } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoContainer href='/'>
      <LogoIcon />
      <span>Finance</span>
      Ledger
    </LogoContainer>
  );
};

