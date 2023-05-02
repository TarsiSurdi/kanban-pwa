import { Card, CardColumn } from ".";

export function Main() {
  return (
    <main className="dark:bg-neutral-500 flex justify-start items-start w-max min-w-full overflow-x-visible flex-grow">
      <CardColumn title="TODO" count={8} color="bg-green-400">
        <Card title="Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit" />
      </CardColumn>
      <CardColumn title="COMPLETAS" count={5} color="bg-cyan-400">
        <Card title="Lorem ipsum dolor sit amet" />
      </CardColumn>
      <Card variant="add" />
    </main>
  );
}
