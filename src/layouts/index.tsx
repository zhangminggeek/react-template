import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.SFC<WrapperProps> = props => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Wrapper;
