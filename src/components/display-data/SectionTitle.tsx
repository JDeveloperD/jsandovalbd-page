import { ReactNode } from 'react';
import Tag from './Tag';
import Typography from './Typography';

type SectionTitleProps = {
  title: {
    left: string;
    colored: string;
  };
  subtitle: string;
  icon?: ReactNode;
  align?: 'start' | 'center' | 'end';
};

const SectionTitle = ({ title, subtitle, icon, align = 'start' }: SectionTitleProps) => {
  return (
    <div className={`mb-md-4 text-center text-md-${align}`}>
      <Tag size='sm' color='brand-500' label={subtitle} iconLeft={icon} />
      <div
        className={`mt-3 d-flex flex-wrap gap-2 justify-content-center justify-content-md-${align}`}
      >
        <Typography as='h3' size='4xl' color='titleSection'>
          {title.left}
        </Typography>
        <Typography as='h3' size='4xl' isGradient>
          {title.colored}
        </Typography>
      </div>
    </div>
  );
};

export default SectionTitle;
