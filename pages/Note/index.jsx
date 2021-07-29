import React, { useState, useRef } from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container } from '@pages/Note/styles';
import NoteBox from '@components/NoteBox';
import { useSelector } from 'react-redux';

const Note = () => {
  const userId = useSelector((state) => state.auth.user.user_id);
  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Header />
        <NoteBox userId={userId} />
      </Container>
      <Footer />
    </div>
  );
};

export default Note;
