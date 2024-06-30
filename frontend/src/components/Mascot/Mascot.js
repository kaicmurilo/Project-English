import React, { useEffect } from "react";
import "./Mascot.css";

function Mascot() {
  useEffect(() => {
    const svg = document.getElementById("robot-svg");
    const pupilLeft = document.getElementById("pupil-left");
    const pupilRight = document.getElementById("pupil-right");
    const svgRect = svg.getBoundingClientRect();

    const updateEyePosition = (event) => {
      const mouseX = event.clientX - svgRect.left;
      const mouseY = event.clientY - svgRect.top;

      const leftEyeCX = 11.5;
      const leftEyeCY = 14.5;
      const rightEyeCX = 24.5;
      const rightEyeCY = 14.5;
      const eyeRadius = 4.5;
      const pupilRadius = 2.721;

      const leftAngle = Math.atan2(mouseY - leftEyeCY, mouseX - leftEyeCX);
      const rightAngle = Math.atan2(mouseY - rightEyeCY, mouseX - rightEyeCX);

      const leftPupilX =
        leftEyeCX + eyeRadius * Math.cos(leftAngle) - pupilRadius / 2;
      const leftPupilY =
        leftEyeCY + eyeRadius * Math.sin(leftAngle) - pupilRadius / 2;
      const rightPupilX =
        rightEyeCX + eyeRadius * Math.cos(rightAngle) - pupilRadius / 2;
      const rightPupilY =
        rightEyeCY + eyeRadius * Math.sin(rightAngle) - pupilRadius / 2;

      pupilLeft.setAttribute("cx", leftPupilX);
      pupilLeft.setAttribute("cy", leftPupilY);
      pupilRight.setAttribute("cx", rightPupilX);
      pupilRight.setAttribute("cy", rightPupilY);
    };

    window.addEventListener("mousemove", updateEyePosition);

    return () => {
      window.removeEventListener("mousemove", updateEyePosition);
    };
  }, []);

  return (
    <div className="mascot">
      <svg
        id="robot-svg"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        className="iconify iconify--twemoji"
        preserveAspectRatio="xMidYMid meet"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <ellipse
            fill="#F4900C"
            cx="33.5"
            cy="14.5"
            rx="2.5"
            ry="3.5"
          ></ellipse>
          <ellipse
            fill="#F4900C"
            cx="2.5"
            cy="14.5"
            rx="2.5"
            ry="3.5"
          ></ellipse>
          <path
            fill="#FFAC33"
            d="M34 19a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9zM7 19a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9z"
          ></path>
          <path
            fill="#FFCC4D"
            d="M28 5c0 2.761-4.478 4-10 4C12.477 9 8 7.761 8 5s4.477-5 10-5c5.522 0 10 2.239 10 5z"
          ></path>
          <path
            fill="#F4900C"
            d="M25 4.083C25 5.694 21.865 7 18 7c-3.866 0-7-1.306-7-2.917c0-1.611 3.134-2.917 7-2.917c3.865 0 7 1.306 7 2.917z"
          ></path>
          <path
            fill="#269"
            d="M30 5.5C30 6.881 28.881 7 27.5 7h-19C7.119 7 6 6.881 6 5.5S7.119 3 8.5 3h19A2.5 2.5 0 0 1 30 5.5z"
          ></path>
          <path
            fill="#55ACEE"
            d="M30 6H6a2 2 0 0 0-2 2v26h28V8a2 2 0 0 0-2-2z"
          ></path>
          <path
            fill="#3B88C3"
            d="M35 33v-1a2 2 0 0 0-2-2H22.071l-3.364 3.364a.999.999 0 0 1-1.414 0L13.929 30H3a2 2 0 0 0-2 2v1c0 1.104-.104 2 1 2h32c1.104 0 1-.896 1-2z"
          ></path>
          <circle
            id="eye-right"
            fill="#FFF"
            cx="24.5"
            cy="14.5"
            r="4.5"
          ></circle>
          <circle
            id="pupil-right"
            fill="#DD2E44"
            cx="24.5"
            cy="14.5"
            r="2.721"
          ></circle>
          <circle
            id="eye-left"
            fill="#FFF"
            cx="11.5"
            cy="14.5"
            r="4.5"
          ></circle>
          <path
            fill="#F5F8FA"
            d="M29 25.5a2.5 2.5 0 0 1-2.5 2.5h-17a2.5 2.5 0 1 1 0-5h17a2.5 2.5 0 0 1 2.5 2.5z"
          ></path>
          <path
            fill="#CCD6DD"
            d="M17 23h2v5h-2zm-5 0h2v5h-2zm10 0h2v5h-2zM7 25.5a2.5 2.5 0 0 0 2 2.45v-4.9a2.5 2.5 0 0 0-2 2.45zm20-2.45v4.899a2.5 2.5 0 0 0 0-4.899z"
          ></path>
          <circle
            id="pupil-left"
            fill="#DD2E44"
            cx="11.5"
            cy="14.5"
            r="2.721"
          ></circle>
        </g>
      </svg>
    </div>
  );
}

export default Mascot;
