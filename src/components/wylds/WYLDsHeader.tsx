
import { Link } from 'react-router-dom';
import HastraLogo from '../HastraLogo';

const WYLDsHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <HastraLogo />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default WYLDsHeader;
