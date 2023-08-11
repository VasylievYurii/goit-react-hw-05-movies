import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTvReviews } from 'services/tvDetailsAPI';
import {
  Wrapper,
  ReviewsWrap,
  AuthorWrap,
  PhotoWrap,
  Photo,
  NoPhoto,
  AuthorName,
  AuthorRating,
  ReviewText,
} from './ReviewsTv.styled';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import { toast } from 'react-toastify';

function ReviewsTv() {
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getTvReviews(movieId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      })
      .finally(() => {});
  }, [movieId]);

  if (error) {
    toast.error('Sorry for the inconvenience! Try again later.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  if (reviews.length === 0) {
    return (
      <SectionTemplate>
        <h3>Sorry! There are no reviews!</h3>
      </SectionTemplate>
    );
  }

  return (
    <>
      <TitleTemplate>Reviews</TitleTemplate>
      <Wrapper>
        {reviews.map(({ id, author, author_details, content }) => (
          <ReviewsWrap key={id}>
            {author_details.rating ? (
              <AuthorRating>{author_details.rating}/10</AuthorRating>
            ) : null}
            <AuthorWrap>
              <PhotoWrap>
                {author_details.avatar_path ? (
                  <Photo
                    src={`http://image.tmdb.org/t/p/w200${author_details.avatar_path}`}
                    alt={author}
                  />
                ) : (
                  <NoPhoto />
                )}
              </PhotoWrap>
              <AuthorName>{author}</AuthorName>
            </AuthorWrap>
            <ReviewText>{content}</ReviewText>
          </ReviewsWrap>
        ))}
      </Wrapper>
    </>
  );
}
export default ReviewsTv;
