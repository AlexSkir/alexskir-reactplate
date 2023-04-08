import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';
import Card from '../../components/cards/cards';

const Home = ({ location: { pathname } }) => {
  if (pathname !== '/') {
    return null;
  }
  return (
    <PageLayout title="Home">
      <>
        <h3 className="h3-demo">Home page</h3>
        <Card />
      </>
    </PageLayout>
  );
};

Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;
