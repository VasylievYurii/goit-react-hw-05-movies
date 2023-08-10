import Card from 'components/Card/Card';
import {
  SearchingResultsTitle,
  SearchWrapper,
} from './SearchingResults.styled';
import ListTemplate from 'components/ListTemplate/ListTemplate';

function SearchingResults({ array }) {
  if (!array) {
    return;
  } else {
    return (
      <SearchWrapper>
        <SearchingResultsTitle>Searching results</SearchingResultsTitle>
        <ListTemplate>
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
        </ListTemplate>
      </SearchWrapper>
    );
  }
}
export default SearchingResults;
