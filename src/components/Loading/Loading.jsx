import React from 'react';
import { FakeGalleryList, FakeItemCardWrapper } from './Loading.styled';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';

function Loading() {
  const fakeItemCards = [];
  for (let i = 0; i < 20; i++) {
    fakeItemCards.push(<FakeItemCardWrapper key={i} />);
  }
  return (
    <SectionTemplate>
      <FakeGalleryList>{fakeItemCards}</FakeGalleryList>
    </SectionTemplate>
  );
}

export default Loading;
