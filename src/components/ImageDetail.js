import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import kebab from 'lodash.kebabcase';
import NotFound from './NotFound';
import Image from './Image';

import images from '../data/images';

function findImagebyId(id) {
  return images.find(image => (
    kebab(image.title) === id
  ));
}

class ImageDetail extends Component {

  componentWillMount() {
    const image = findImagebyId(this.props.params.id);
    this.setState({ image });
  }

  clickHandler = () => {
    // TODO - if coming from filtered gallery, return to same location
    // TODO - hold scroll position on back?
    this.props.router.push('/');
  }

  render() {
    const {
      image,
      height,
      width,
      year,
      medium,
      title,
      location,
    } = this.state.image;
    console.log(image);
    if (!image) return <NotFound type='Image' />;
    return (
      <section>
        <article className='image-detail'>
          <button onClick={ this.clickHandler } />
          <Image fullSize image={ image } />
          <h1>{ title }{year ? <span>{ year }</span> : null }</h1>
          {medium ? <h2 className='medium'>{ medium }</h2> : null}
          {height && width ? <h2 className='dimensions'>{ height } x { width }</h2> : null}
          {location ? <h2 className='location'>{ location }</h2> : null}
        </article>
      </section>
    );
  }
}

ImageDetail.propTypes = {
  params: PropTypes.object,
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(ImageDetail);
