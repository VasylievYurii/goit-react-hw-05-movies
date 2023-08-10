import React from 'react';
import {
  Section,
  Container,
  FakeGalleryList,
  FakeItemCardWrapper,
} from './Loading.styled';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';

function Loading() {
  const fakeItemCards = [];
  for (let i = 0; i < 12; i++) {
    fakeItemCards.push(<FakeItemCardWrapper key={i} />);
  }
  return (
    <SectionTemplate>
      <FakeGalleryList>{fakeItemCards}</FakeGalleryList>
    </SectionTemplate>
  );
}

export default Loading;
