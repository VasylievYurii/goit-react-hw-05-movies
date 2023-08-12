import Card from 'components/Card/Card';
import ListTemplate from 'components/ListTemplate/ListTemplate';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';
import NoFoundedTemplate from 'components/NoFoundedTemplate/NoFoundedTemplate';

function SearchingResultsTv({ array }) {
  if (array.length === 0) {
    return (
      <>
        {' '}
        <TitleTemplate>Searching results</TitleTemplate>
        <NoFoundedTemplate />
      </>
    );
  } else {
    return (
      <>
        <TitleTemplate>Searching results</TitleTemplate>
        <ListTemplate>
          {array.map((tv, index) => (
            <Card
              key={`${tv.id}-${index}`}
              movieId={tv.id}
              title={tv.title || tv.name}
              poster={tv['poster_path']}
              type={'tv'}
              rating={tv['vote_average']}
              date={tv['release_date']}
            />
          ))}
        </ListTemplate>
      </>
    );
  }
}
export default SearchingResultsTv;
