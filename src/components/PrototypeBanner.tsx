
import { AlertCircle } from 'lucide-react';

const PrototypeBanner = () => {
  return (
    <div className="bg-yellow-50 border-b border-yellow-200 p-2 text-center">
      <div className="flex items-center justify-center">
        <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
        <p className="text-sm text-yellow-800 font-medium">
          Prototype Version - For Demonstration Only
        </p>
      </div>
    </div>
  );
};

export default PrototypeBanner;
