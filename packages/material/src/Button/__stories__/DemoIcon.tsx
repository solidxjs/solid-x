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
    <path d="M438.5-438.5H231.869v-83H438.5v-206.631h83V-521.5h206.631v83H521.5v206.631h-83V-438.5Z" />
  </svg>
);
