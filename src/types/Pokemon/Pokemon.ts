export interface IPokemon {
  id: number;
  name: string;
  types: string[];
  height: number;
  weight: number;
  image: string;
  sprites: IPokemonSprites;
}

export interface IPokemonSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  // other: IPokemonSpriteOther;
  // versions: IPokemonSpriteVersion;
}

// export interface IPokemon {
//   id: number;
//   name: string;
//   base_experience: number;
//   height: number;
//   is_default: boolean;
//   order: number;
//   weight: number;
//   abilities: IPokemonAbility[];
//   forms: Array<INamedApiResource<IPokemonForm>>;
//   game_indices: IVersionGameIndex[];
//   held_items: IPokemonHeldItem[];
//   location_area_encounters: string;
//   moves: IPokemonMove[];
//   sprites: IPokemonSprites;
//   species: INamedApiResource<IPokemonSpecies>;
//   stats: IPokemonStat[];
//   types: IPokemonType[];
// }
