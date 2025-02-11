import { Component } from "react";

class CommentArea extends Component {

state = {
  reviews: []
}




  fetchComments = async () => {
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/"
      {
        method: "GET",
        headers: {
          Authorization:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E1MjllZWFkNjVmMzAwMTU4ZTVlYjYiLCJpYXQiOjE3Mzg4Nzc0MjIsImV4cCI6MTc0MDA4NzAyMn0.vcw3xDQdl6LmeMjA8TKry2KK1_0grqoxAAKehaizzDE"
        }
      }
    );

    
    if (resp.ok) {
      const reviews = await resp.json();
      console.log(reviews)

      this.setState({reviews});
    }

    componentDidMount(){
      console.log("componentDidMount")
      this.fetchComments()
    }
     
  render() {
    console.log ("RENDER COMMENT AREA", this.state.reviews)
    return <div className="commentArea">
      <h6>CommentArea</h6>
    </div>;
  }
}}

export default CommentArea;
