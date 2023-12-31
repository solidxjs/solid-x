type DemoProps = {
  height: string;
  width: string;
};
export const DemoIcon = (props: DemoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    viewBox="0 -960 960 960"
    width={props.width}
    fill="currentColor">
    <path d="M202.152-199.761h52.174l342.609-342.848-52.174-52.173-342.609 342.847v52.174ZM772.957-600.37 601.761-769.804l49.304-49.544q26.348-26.587 64.152-26.706 37.805-.12 64.392 26.228l47.63 47.63q24.913 24.435 25.196 58.25.282 33.816-23.674 57.772l-55.804 55.804Zm-57.761 58.761L289.761-116.174H118.326V-287.37l425.435-425.434 171.435 171.195Zm-144.109-27.087-26.326-26.086 52.174 52.173-25.848-26.087Z" />
  </svg>
);
