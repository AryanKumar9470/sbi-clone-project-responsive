
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RegistrationBanner = () => {
  return (
    <div className="bg-sbi-blue py-12 text-white">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">New to Online Banking?</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg opacity-90">
          Register now to access your accounts, transfer funds, pay bills, and manage your finances securely anytime, anywhere.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/register">
            <Button className="bg-white text-sbi-blue hover:bg-gray-100">
              Register Now
            </Button>
          </Link>
          <Link to="/learn-more">
            <Button variant="outline" className="text-white border-white hover:bg-sbi-lightBlue">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationBanner;
