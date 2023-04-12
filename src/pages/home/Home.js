import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';
import Card from '../../components/cards/cards';
import SEO from '../../SEO';

const Home = ({ location: { pathname } }) => {
  if (pathname !== '/') {
    return null;
  }
  return (
    <PageLayout title="Home">
      <>
        <SEO
          title="Awesome website!"
          description="SEO tags with React Helmet."
          name="Awesome Company name."
          type="article"
        />
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
