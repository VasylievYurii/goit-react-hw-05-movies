import Card from 'components/Card/Card';
import ListTemplate from 'components/ListTemplate/ListTemplate';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';

function SearchingResults({ array }) {
  if (!array) {
    return;
  } else {
    return (
      <div>
        <TitleTemplate>Searching results</TitleTemplate>
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
      </div>
    );
  }
}
export default SearchingResults;
