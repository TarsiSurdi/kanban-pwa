import { Card } from ".";

export function Main() {
  return (
    <main className="dark:bg-neutral-500 flex-grow flex justify-start items-start w-max min-w-full overflow-x-scroll">
      <section className="flex flex-col max-w-[80%] pl-4">
        <div className="flex items-center my-4">
          <div className="w-3 h-3 rounded-full bg-cyan-400 before:content-[' '] mr-2"></div>
          <h2 className="text-xs tracking-widest font-semibold dark:text-neutral-100 uppercase">
            TODO (5)
          </h2>
        </div>
        <Card title="Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit" />
      </section>
      <section className="flex flex-col max-w-[80%] pl-4 last:mr-4">
        <div className="flex items-center my-4">
          <div className="w-3 h-3 rounded-full bg-green-400 before:content-[' '] mr-2"></div>
          <h2 className="text-xs tracking-widest font-semibold dark:text-neutral-100 uppercase">
            Completas (5)
          </h2>
        </div>
        <Card title="Lorem ipsum dolor sit amet" />
      </section>
      <section className="flex flex-col max-w-[80%] pl-4 last:mr-4 mt-12">
        <Card variant="add" />
      </section>
    </main>
  );
}
