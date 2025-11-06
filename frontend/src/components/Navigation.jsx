import { Link } from "react-router-dom";

export default function Navigation({
  to,
  children,
  isActive = false,
  isMobile = false,
}) {
  const baseStyles =
    "rounded-md px-3 py-2 text-sm font-medium transition-colors";
  const desktopStyles = isActive
    ? "bg-gray-900 text-white"
    : "text-gray-300 hover:bg-gray-700 hover:text-white";
  const mobileStyles = isActive
    ? "block bg-gray-900 text-white text-base"
    : "block text-gray-300 hover:bg-gray-700 hover:text-white text-base";

  return (
    <Link
      to={to}
      className={`${baseStyles} ${isMobile ? mobileStyles : desktopStyles}`}
    >
      {children}
    </Link>
  );
}
