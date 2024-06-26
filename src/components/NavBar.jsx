import { Avatar, Card } from "@mui/material";
import IMAGES from "../images/images";

export default function NavBar() {
  return (
    <Card className="flex justify-end items-center p-2 gap-2">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.46495 3.95725C9.85545 2.34758 12.1453 2.34758 12.5358 3.95725C12.6546 4.44772 13.0006 4.85194 13.4668 5.0451C13.933 5.23826 14.4635 5.19713 14.8944 4.93442C16.3088 4.07275 17.9285 5.69158 17.0669 7.10692C16.8045 7.53762 16.7635 8.06766 16.9564 8.5336C17.1494 8.99954 17.5531 9.34542 18.0431 9.46458C19.6528 9.85508 19.6528 12.1449 18.0431 12.5354C17.5526 12.6543 17.1484 13.0002 16.9553 13.4664C16.7621 13.9327 16.8032 14.4631 17.0659 14.894C17.9276 16.3084 16.3088 17.9282 14.8934 17.0665C14.4628 16.8042 13.9327 16.7631 13.4668 16.9561C13.0008 17.149 12.6549 17.5527 12.5358 18.0428C12.1453 19.6524 9.85545 19.6524 9.46495 18.0428C9.34611 17.5523 9.00017 17.1481 8.53394 16.9549C8.0677 16.7617 7.53725 16.8029 7.10637 17.0656C5.69195 17.9272 4.0722 16.3084 4.93387 14.8931C5.1962 14.4624 5.23723 13.9323 5.0443 13.4664C4.85136 13.0005 4.44764 12.6546 3.95762 12.5354C2.34795 12.1449 2.34795 9.85508 3.95762 9.46458C4.44809 9.34574 4.85231 8.9998 5.04547 8.53357C5.23863 8.06734 5.1975 7.53689 4.93478 7.106C4.07312 5.69158 5.69195 4.07183 7.10728 4.9335C8.02395 5.49083 9.21195 4.99767 9.46495 3.95725Z"
          stroke="#4B465C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.46495 3.95725C9.85545 2.34758 12.1453 2.34758 12.5358 3.95725C12.6546 4.44772 13.0006 4.85194 13.4668 5.0451C13.933 5.23826 14.4635 5.19713 14.8944 4.93442C16.3088 4.07275 17.9285 5.69158 17.0669 7.10692C16.8045 7.53762 16.7635 8.06766 16.9564 8.5336C17.1494 8.99954 17.5531 9.34542 18.0431 9.46458C19.6528 9.85508 19.6528 12.1449 18.0431 12.5354C17.5526 12.6543 17.1484 13.0002 16.9553 13.4664C16.7621 13.9327 16.8032 14.4631 17.0659 14.894C17.9276 16.3084 16.3088 17.9282 14.8934 17.0665C14.4628 16.8042 13.9327 16.7631 13.4668 16.9561C13.0008 17.149 12.6549 17.5527 12.5358 18.0428C12.1453 19.6524 9.85545 19.6524 9.46495 18.0428C9.34611 17.5523 9.00017 17.1481 8.53394 16.9549C8.0677 16.7617 7.53725 16.8029 7.10637 17.0656C5.69195 17.9272 4.0722 16.3084 4.93387 14.8931C5.1962 14.4624 5.23723 13.9323 5.0443 13.4664C4.85136 13.0005 4.44764 12.6546 3.95762 12.5354C2.34795 12.1449 2.34795 9.85508 3.95762 9.46458C4.44809 9.34574 4.85231 8.9998 5.04547 8.53357C5.23863 8.06734 5.1975 7.53689 4.93478 7.106C4.07312 5.69158 5.69195 4.07183 7.10728 4.9335C8.02395 5.49083 9.21195 4.99767 9.46495 3.95725Z"
          stroke="white"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="11.0004"
          cy="11"
          r="2.75"
          stroke="#4B465C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="11.0004"
          cy="11"
          r="2.75"
          stroke="white"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.16669 4.58333C9.16669 3.57081 9.9875 2.75 11 2.75C12.0125 2.75 12.8334 3.57081 12.8334 4.58333C14.9785 5.59767 16.3888 7.71306 16.5 10.0833V12.8333C16.6399 13.9891 17.3203 15.0097 18.3334 15.5833H3.66669C4.67971 15.0097 5.36012 13.9891 5.50002 12.8333V10.0833C5.61128 7.71306 7.02153 5.59767 9.16669 4.58333"
          stroke="#4B465C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.16669 4.58333C9.16669 3.57081 9.9875 2.75 11 2.75C12.0125 2.75 12.8334 3.57081 12.8334 4.58333C14.9785 5.59767 16.3888 7.71306 16.5 10.0833V12.8333C16.6399 13.9891 17.3203 15.0097 18.3334 15.5833H3.66669C4.67971 15.0097 5.36012 13.9891 5.50002 12.8333V10.0833C5.61128 7.71306 7.02153 5.59767 9.16669 4.58333"
          stroke="white"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.25 15.5833V16.5C8.25 18.0188 9.48122 19.25 11 19.25C12.5188 19.25 13.75 18.0188 13.75 16.5V15.5833"
          stroke="#4B465C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.25 15.5833V16.5C8.25 18.0188 9.48122 19.25 11 19.25C12.5188 19.25 13.75 18.0188 13.75 16.5V15.5833"
          stroke="white"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <Avatar alt="Profile" src={IMAGES.image1} />
    </Card>
  );
}
