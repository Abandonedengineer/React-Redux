import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/postActions';

 class Posts extends Component {
componentWillMount() {
    this.props.fetchPosts();
}

componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
        this.props.posts.unshift(nextProps.newPost);
    }

}
  
render() {
      const postItems = this.props.posts.map(post =>(
          <div key = {post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          </div>

      ) );
      return (
      <div>
        <h1 align= "center" >Projects</h1>
        {postItems}
        
      </div>
    );
    
  }
}

Posts.propTypes = {
    fetchPosts: propTypes.func.isRequired,
    posts: propTypes.array.isRequired,
    newPost: propTypes.object
};

const mapStatetoProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStatetoProps, { fetchPosts })(Posts);