import { Link } from "react-router-dom";
import { announcementBarStyles } from "./AnnouncementBar.styles";

const AnnouncementBar = () => {
  return (
    <div className={announcementBarStyles.root}>
      <div className={announcementBarStyles.container}>
        <p className={announcementBarStyles.message}>
          Free delivery on eligible orders above ₹999
        </p>

        <div className={announcementBarStyles.links}>
          <Link to="/help" className={announcementBarStyles.link}>
            Help Center
          </Link>

          <span
            aria-hidden="true"
            className={announcementBarStyles.separator}
          />

          <Link to="/seller/register" className={announcementBarStyles.link}>
            Become a Seller
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
