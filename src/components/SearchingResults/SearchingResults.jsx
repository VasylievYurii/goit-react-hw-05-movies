import Card from 'components/Card/Card';
import {
  SearchingResultsTitle,
  SearchingResultsList,
  SearchWrapper,
} from './SearchingResults.styled';

function SearchingResults({ array }) {
  if (!array) {
    return;
  } else {
    return (
      <SearchWrapper>
        <SearchingResultsTitle>Searching results</SearchingResultsTitle>
        <SearchingResultsList>
          {array.map(movie => (
            <Card
              key={movie.id}
              movieId={movie.id}
              title={movie.title || movie.name}
              poster={movie['poster_path']}
              type={'movie'}
              rating={movie['vote_average']}
              date={movie['release_date']}
            />
          ))}
        </SearchingResultsList>
      </SearchWrapper>
    );
  }
}
export default SearchingResults;
