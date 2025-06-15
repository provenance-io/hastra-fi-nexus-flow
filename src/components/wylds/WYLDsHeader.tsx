
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const WYLDsHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg">Hastra-Fi</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button className="btn-gradient font-semibold px-6 py-2 rounded-md">Launch App</Button>
        </div>
      </div>
    </header>
  );
};

export default WYLDsHeader;
