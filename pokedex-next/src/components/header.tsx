import Image from "next/image";
import PokemonLogo from "../../public/pokemonLogo.svg"

export default function Header() {
  return (
    <header className="flex justify-center w-full">
      <Image src={PokemonLogo} width={350} alt="logo da franquia pokémon" />
    </header>
  )
}