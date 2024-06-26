interface ArrowIconProps {
  side: "left" | "right";
  onClick: (side: string) => void;
}
const ArrowIcon = (props: ArrowIconProps) => {
  return (
    <div
      style={{ margin: "10px" }}
      onClick={() => {
        props.onClick(props.side);
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.side == "left" ? (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.65295 11.8727C5.43919 12.0598 5.11428 12.0381 4.92725 11.8244L0.127247 6.33865C-0.0424142 6.14475 -0.0424141 5.85523 0.127247 5.66133L4.92725 0.175621C5.11428 -0.0381342 5.43919 -0.059794 5.65295 0.127242C5.8667 0.314278 5.88836 0.639184 5.70133 0.85294L1.64765 5.48571L11.4857 5.48571C11.7697 5.48571 12 5.71596 12 5.99999C12 6.28403 11.7697 6.51428 11.4857 6.51428L1.64765 6.51428L5.70133 11.147C5.88836 11.3608 5.8667 11.6857 5.65295 11.8727Z"
            fill="black"
          />
        ) : (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.34705 0.127253C6.56081 -0.0597832 6.88572 -0.0381227 7.07275 0.175633L11.8728 5.66135C12.0424 5.85525 12.0424 6.14477 11.8728 6.33867L7.07275 11.8244C6.88572 12.0381 6.56081 12.0598 6.34705 11.8728C6.1333 11.6857 6.11164 11.3608 6.29868 11.1471L10.3523 6.51429H0.514286C0.230254 6.51429 0 6.28404 0 6.00001C0 5.71598 0.230254 5.48572 0.514286 5.48572H10.3523L6.29868 0.852952C6.11164 0.639196 6.1333 0.31429 6.34705 0.127253Z"
            fill="black"
          />
        )}
      </svg>
    </div>
  );
};

export default ArrowIcon;
