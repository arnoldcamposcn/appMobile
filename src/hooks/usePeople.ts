import { useEffect, useState } from 'react';
import { getPeople } from '../services/swapiService';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { People } from '../types/people';

export const usePeople = () => {
    const dispatch = useAppDispatch();
    const { peoples, loading, error } = useAppSelector(state => state.planet);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPeople, setFilteredPeople] = useState<People[]>([]);

    useEffect(() => {
        dispatch(getPeople());
    }, [dispatch]);

    useEffect(() => {
        setFilteredPeople(
            peoples.filter(person =>
                person.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, peoples]);

    return { searchTerm, setSearchTerm, filteredPeople, loading, error };
};
