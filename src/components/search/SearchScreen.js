import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard'
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search)
    const [formValues, handleInputChange] = useForm({
        searchInput: q
    });

    const {searchInput} = formValues;

    
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchInput);
        history.push(`?q=${searchInput}`);
        
    }
    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputChange}
                            name="searchInput"
                            value={searchInput}
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                        (q === '') &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-danger">
                            There are no heroes with "{q}"
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => 
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        )
                    }

                </div>

            </div>
        </div>
    )
}
