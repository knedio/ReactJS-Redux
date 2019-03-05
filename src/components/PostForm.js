import React, { Component } from 'react';

import AddPost from './AddPost';

class PostForm extends Component {
  
  state = {
    title: '',
    body: ''
  }

  onChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }
  
  onSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    }
  
    fetch("https://jsonplaceholder.typicode.com/posts",{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },body: JSON.stringify(post)
    })
    .then(res => res.json)
    .then(data => console.log(data))

  }

  render() {
    return (
      <div className="">
        <h1>Add Post</h1>
        <form action="" onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="">Title</label> <br/>
            <input 
              type="text" 
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="">Body</label> <br/>
            <textarea 
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
