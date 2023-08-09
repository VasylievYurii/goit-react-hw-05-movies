import React from 'react';
import {
  Section,
  Container,
  FakeGalleryList,
  FakeItemCardWrapper,
} from './Loading.styled';

function Loading() {
  const fakeItemCards = [];
  for (let i = 0; i < 12; i++) {
    fakeItemCards.push(<FakeItemCardWrapper key={i} />);
  }
  return (
    <Section>
      <Container>
        <FakeGalleryList>{fakeItemCards}</FakeGalleryList>
      </Container>
    </Section>
  );
}

export default Loading;
