import { ICharacterData } from '../characterData';

export interface ICharacterGetAll {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: ICharacterData[];
}
