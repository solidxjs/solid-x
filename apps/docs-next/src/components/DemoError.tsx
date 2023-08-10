type Props = {
  children?: string | null;
};
export const DemoError = ({ children }: Props) =>
  children ? (
    <pre class="rounded font-medium text-sm bg-[#d32f2f] flex py-2 px-4 text-white whitespace-pre-wrap">
      {children}
    </pre>
  ) : null;
