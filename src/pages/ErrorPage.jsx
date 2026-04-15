import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100">
        <div className="card-body items-center text-center">
          <h1 className="text-7xl font-extrabold text-error">404</h1>

          <h2 className="card-title text-2xl mt-2">Page Not Found</h2>

          <p className="text-base-content/70">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
          </p>

          <div className="card-actions mt-6">
            <Link to="/" className="btn bg-[#244d3f] text-white">
              <AiOutlineHome size={15} />
              Go Home
            </Link>
            <button
              className="btn btn-outline"
              onClick={() => window.history.back()}
            >
              <FaArrowLeftLong />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
