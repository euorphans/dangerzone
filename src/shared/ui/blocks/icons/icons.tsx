import { IconsTypes } from '@shared/ui/blocks/icons/icons.types';
import { FC, HTMLAttributes } from 'react';

export namespace Icons {
  export const Settings: FC<HTMLAttributes<SVGElement> & IconsTypes> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 'auto'}
      height={height ? height : 'auto'}
      viewBox={viewBox ? viewBox : '0 0 24 24'}
      fill={fill ? fill : 'var(--black100)'}
      {...other}
    >
      <path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path>
    </svg>
  );
  export const Close: FC<HTMLAttributes<SVGElement> & IconsTypes> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 'auto'}
      height={height ? height : 'auto'}
      viewBox={viewBox ? viewBox : '0 0 24 24'}
      fill={fill ? fill : 'var(--black100)'}
      {...other}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2427 7.75736C16.6332 8.14788 16.6332 8.78104 16.2427 9.17157L13.4142 12L16.2427 14.8284C16.6332 15.2189 16.6332 15.8521 16.2427 16.2426C15.8521 16.6332 15.219 16.6332 14.8284 16.2426L12 13.4142L9.17158 16.2426C8.78106 16.6332 8.1479 16.6332 7.75737 16.2426C7.36685 15.8521 7.36685 15.2189 7.75737 14.8284L10.5858 12L7.75737 9.17157C7.36685 8.78105 7.36685 8.14788 7.75737 7.75736C8.14789 7.36683 8.78106 7.36683 9.17158 7.75736L12 10.5858L14.8284 7.75736C15.219 7.36683 15.8521 7.36683 16.2427 7.75736Z"
        fill={fill ? fill : 'var(--black100)'}
      />
    </svg>
  );
  export const Flash: FC<HTMLAttributes<SVGElement> & IconsTypes> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 'auto'}
      height={height ? height : 'auto'}
      viewBox={viewBox ? viewBox : '0 0 24 24'}
      fill={fill ? fill : 'transparent'}
      {...other}
    >
      <path
        d="M13 3L5.5 13.5H10.5L11 21L18.5 10.5H13.5L13 3Z"
        stroke={fill ? fill : 'var(--black100)'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  export const Send: FC<HTMLAttributes<SVGElement> & IconsTypes> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 'auto'}
      height={height ? height : 'auto'}
      viewBox={viewBox ? viewBox : '0 0 24 24'}
      fill={fill ? fill : 'var(--black100)'}
      {...other}
    >
      <path
        d="M13 3L5.5 13.5H10.5L11 21L18.5 10.5H13.5L13 3Z"
        stroke={fill ? fill : 'var(--black100)'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  export const ChatConversation: FC<
    HTMLAttributes<SVGElement> & IconsTypes
  > = ({ width, height, fill, viewBox, ...other }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 'auto'}
      height={height ? height : 'auto'}
      viewBox={viewBox ? viewBox : '0 0 24 24'}
      fill={'transparent'}
      {...other}
    >
      <path
        d="M16 9C17.96 9 19.75 10.7909 19.75 13V16.3761C19.75 17.156 19.9779 17.9188 20.4058 18.5708L22 21H12C9.79086 21 8 19.2091 8 17V15M16 9V7C16 4.79086 14.2091 3 12 3H8.25C6.04086 3 4.25 4.79086 4.25 7V10.3761C4.25 11.156 4.02205 11.9188 3.59419 12.5708L2 15H12C14.2091 15 16 13.2091 16 11V9Z"
        stroke={fill ? fill : 'var(--black100)'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  export const MagnifierSearch: FC<HTMLAttributes<SVGElement> & IconsTypes> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 'auto'}
      height={height ? height : 'auto'}
      viewBox={viewBox ? viewBox : '0 0 24 24'}
      fill={'transparent'}
      {...other}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3571 9.92857C17.3571 5.82588 14.0313 2.5 9.92857 2.5C5.82588 2.5 2.5 5.82588 2.5 9.92857C2.5 14.0313 5.82588 17.3571 9.92857 17.3571C11.6189 17.3571 13.1785 16.7917 14.4267 15.8409L19.7929 21.2071C20.1834 21.5976 20.8166 21.5976 21.2071 21.2071C21.5976 20.8166 21.5976 20.1834 21.2071 19.7929L15.8409 14.4267C16.7917 13.1785 17.3571 11.6189 17.3571 9.92857ZM9.92857 4.5C12.9267 4.5 15.3571 6.93045 15.3571 9.92857C15.3571 11.4279 14.7506 12.7837 13.7672 13.7672C12.7837 14.7506 11.4279 15.3571 9.92857 15.3571C6.93045 15.3571 4.5 12.9267 4.5 9.92857C4.5 6.93045 6.93045 4.5 9.92857 4.5Z"
        fill={fill ? fill : 'var(--black100)'}
      />
    </svg>
  );
  export const Premium: FC<HTMLAttributes<SVGElement> & IconsTypes> = ({
    width,
    height,
    viewBox,
    ...other
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 'auto'}
      height={height ? height : 'auto'}
      viewBox={viewBox ? viewBox : '0 0 24 24'}
      fill={'transparent'}
      {...other}
    >
      <g clipPath="url(#clip0_90_221)">
        <circle cx="12" cy="12" r="12" fill="var(--black100)" />
        <path
          d="M11.9594 6.01079C12.0792 5.64226 12.6005 5.64226 12.7203 6.01079L13.9339 9.74595C13.9874 9.91075 14.141 10.0223 14.3143 10.0223H18.2417C18.6292 10.0223 18.7903 10.5182 18.4768 10.7459L15.2995 13.0544C15.1593 13.1563 15.1006 13.3368 15.1542 13.5016L16.3678 17.2368C16.4876 17.6053 16.0658 17.9117 15.7523 17.684L12.575 15.3755C12.4348 15.2737 12.2449 15.2737 12.1047 15.3755L8.92741 17.684C8.61393 17.9117 8.19214 17.6053 8.31188 17.2368L9.5255 13.5016C9.57905 13.3368 9.52039 13.1563 9.3802 13.0544L6.20288 10.7459C5.88939 10.5182 6.0505 10.0223 6.43799 10.0223H10.3654C10.5387 10.0223 10.6922 9.91075 10.7458 9.74595L11.9594 6.01079Z"
          fill="var(--white100)"
        />
      </g>
      <defs>
        <clipPath id="clip0_90_221">
          <rect width="24" height="24" fill="var(--white100)" />
        </clipPath>
      </defs>
    </svg>
  );
  export const Star: FC<HTMLAttributes<SVGElement> & IconsTypes> = ({
    width,
    height,
    viewBox,
    ...other
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 'auto'}
      height={height ? height : 'auto'}
      viewBox={viewBox ? viewBox : '0 0 24 24'}
      fill={'transparent'}
      {...other}
    >
      <g clipPath="url(#clip0_90_224)">
        <path
          d="M11.9594 6.01079C12.0792 5.64226 12.6005 5.64226 12.7203 6.01079L13.9339 9.74595C13.9874 9.91075 14.141 10.0223 14.3143 10.0223H18.2417C18.6292 10.0223 18.7903 10.5182 18.4768 10.7459L15.2995 13.0544C15.1593 13.1563 15.1006 13.3368 15.1542 13.5016L16.3678 17.2368C16.4876 17.6053 16.0658 17.9117 15.7523 17.684L12.575 15.3755C12.4348 15.2737 12.2449 15.2737 12.1047 15.3755L8.92741 17.684C8.61393 17.9117 8.19214 17.6053 8.31188 17.2368L9.5255 13.5016C9.57905 13.3368 9.52039 13.1563 9.3802 13.0544L6.20288 10.7459C5.88939 10.5182 6.0505 10.0223 6.43799 10.0223H10.3654C10.5387 10.0223 10.6922 9.91075 10.7458 9.74595L11.9594 6.01079Z"
          fill="var(--black100)"
        />
      </g>
      <defs>
        <clipPath id="clip0_90_224">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  export const More3: FC<HTMLAttributes<SVGElement> & IconsTypes> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 'auto'}
      height={height ? height : 'auto'}
      viewBox={viewBox ? viewBox : '0 0 24 24'}
      fill={'transparent'}
      {...other}
    >
      <path
        d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
        fill={fill ? fill : 'var(--black100)'}
      />
      <path
        d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
        fill={fill ? fill : 'var(--black100)'}
      />
      <path
        d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z"
        fill={fill ? fill : 'var(--black100)'}
      />
      <path
        d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
        fill={fill ? fill : 'var(--black100)'}
      />
      <path
        d="M20 6C20 7.10457 19.1046 8 18 8C16.8954 8 16 7.10457 16 6C16 4.89543 16.8954 4 18 4C19.1046 4 20 4.89543 20 6Z"
        fill={fill ? fill : 'var(--black100)'}
      />
      <path
        d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
        fill={fill ? fill : 'var(--black100)'}
      />
      <path
        d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
        fill={fill ? fill : 'var(--black100)'}
      />
      <path
        d="M20 18C20 19.1046 19.1046 20 18 20C16.8954 20 16 19.1046 16 18C16 16.8954 16.8954 16 18 16C19.1046 16 20 16.8954 20 18Z"
        fill={fill ? fill : 'var(--black100)'}
      />
      <path
        d="M8 18C8 19.1046 7.10457 20 6 20C4.89543 20 4 19.1046 4 18C4 16.8954 4.89543 16 6 16C7.10457 16 8 16.8954 8 18Z"
        fill={fill ? fill : 'var(--black100)'}
      />
    </svg>
  );
}
