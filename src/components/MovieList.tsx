import { useEffect, useState } from 'react';
import { Window } from 'react95';

import API from '../services/API';
import { FeatureMovieData, HomeListItem } from '../utils/interfaces';
import { FeatureMovie } from './FeatureMovie';
import { MovieRow } from './MovieRow';

export function MovieList() {
  const [movieList, setMovieList] = useState<HomeListItem[]>();
  const [featureData, setFeatureData] = useState<FeatureMovieData>();

  useEffect(() => {
    const loadAll = async () => {
      const data = await API.getHomeList();
      setMovieList(data);

      const originals = data.filter((item) => item.slug === 'originals');
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items.length - 1),
      );
      const chosen = originals[0].items[randomChosen];
      const chosenInformations = await API.getFeatureMovie(chosen.id);
      setFeatureData(chosenInformations);
    };
    loadAll();
  }, []);

  return (
    <>
      {featureData && <FeatureMovie {...featureData} />}
      <Window
        style={{
          maxWidth: '100%',
          marginTop: '-120px',
        }}
      >
        <div
          style={{
            overflowX: 'hidden',
          }}
        >
          {movieList?.map((movie, index) => (
            <MovieRow
              key={index}
              title={movie.title}
              slug={movie.slug}
              items={movie.items}
              adult
            />
          ))}
        </div>
      </Window>
    </>
  );
}
