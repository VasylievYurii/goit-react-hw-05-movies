import {
  Header,
  Nav,
  Logo,
  LogoText,
  LogoTextSecond,
  Menu,
  List,
  Container,
} from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'components/Home';
import Movies from 'components/Movies';
import TvShows from 'components/TvShows';
import Actors from 'components/Actors';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header>
        <Container>
          <Nav>
            <Logo href="#">
              <LogoText>
                <LogoTextSecond>GOIT</LogoTextSecond>FLIX
              </LogoText>
            </Logo>
            <Menu>
              <List to="/">HOME</List>
              <List to="/movies">MOVIES</List>
              <List to="/tvshows">TV SHOWS</List>
              <List to="/actors">ACTORS</List>
            </Menu>
          </Nav>
        </Container>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/actors" element={<Actors />} />
      </Routes>
      {/* <Searchbar onSubmit={handleSearchSubmit} /> */}
      {/* <Section>
        <Container>
          <ImageGallery itemTag={itemTag} />
          </Container>
      </Section> */}
    </>
  );
}

export default App;
