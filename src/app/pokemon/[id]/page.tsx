import { PokemonDetailPanel } from "@/components/pages/pokemon/DetailPanel";

type Props = {
  params: {
    id: string;
  };
};
const PokemonDetailPage = ({ params }: Props) => {
  const { id } = params;

  return (
    <main>
      <PokemonDetailPanel id={id} />
    </main>
  );
};

export default PokemonDetailPage;
