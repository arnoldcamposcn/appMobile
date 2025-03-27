import { People } from '../types/people';

export type RootStackParamList = {
    Home: undefined;
    DetallesPersonaje: { people: People };
};
