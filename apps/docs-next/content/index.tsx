import { A } from 'solid-start';

export default function Index() {
  return (
    <div class="w-screen min-h-[calc(100vh-var(--nextra-navbar-height))] p-2 flex flex-col">
      <div class="flex flex-1 justify-center items-center min-h-[calc(100vh-var(--nextra-navbar-height))] sm:min-h-0">
        <div class="h-max max-w-7xl text-center">
          <h1 class="text-[2.25rem] sm:text-[3rem] md:text-[4rem] font-bold max-w-[16ch] mx-auto leading-tight">
            Create beautiful Solid JS apps{' '}
            <span class="text-[var(--primary-color)]">with Solid X</span>
          </h1>
          <p class="text-stone-400 max-w-[50ch] mx-auto my-2 leading-relaxed">
            Solid X provides a comprehensive suite of UI components to help you build web applications
            faster. Get started with the Material You UI, which our components ship with by default, or
            bring your own design-system to our production-ready component library.
          </p>
          <A class='' href="/docs">
            Get started <span>→</span>
          </A>
        </div>
      </div>
      <div class="flex flex-1 justify-center items-center min-h-[calc(100vh-var(--nextra-navbar-height))] sm:min-h-0">
        <h1 class="text-[2.25rem] sm:text-[3rem] md:text-[4rem] font-bold max-w-[16ch] mx-auto leading-tight">
          Coming soon...
        </h1>
      </div>
    </div>
  );
}
