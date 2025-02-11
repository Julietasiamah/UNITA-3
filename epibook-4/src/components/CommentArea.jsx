import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Alert, Image, Spinner } from "react-bootstrap";

const CommentArea = (asin, imgSrc, title) => {
  //state = {
  //reviews: [],
  // fetched: false
  //};
  const [reviews, setReviews] = useState([]);
  const [fetched, setFetched] = useState(false);

  async function fetchComments() {
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZGUxYmNhMDcwNDAwMTU4YmY5NzkiLCJpYXQiOjE3Mzg4NTgwMTEsImV4cCI6MTc0MDA2NzYxMX0.KY1i3aAaFytdpVHLectYt_unBT7ZsLQJtlf6z-iXCXg",
      },
    });

    if (resp.ok) {
      const reviews = await resp.json();
      console.log(reviews);

      //   this.setState({reviews: reviews})
      setReviews(reviews);
      setFetched(true);
    }
  }

  //componentDidMount() {
  //console.log("componentDidMount()");
  //this.fetchComments();
  //}
  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asin]);

  // componentDidUpdate(prevProps) {
  //   console.log(prevProps.asin);
  //   console.log(this.props.asin);
  //   if (prevProps.asin !== this.props.asin) {
  //     console.log("prop diversa, vai di fetch!");

  //     this.fetchComments();
  //   } else {
  //     console.log("prop uguale, STOP!");
  //   }
  // }

  // useEffect(() => {
  //   if (asin) {
  //     console.log("Prop diversa");
  //     fetchComments();
  //   } else {
  //     console.log("Stop");
  //   }
  // }[asin]);

  console.log("RENDER COMMENT AREA", reviews);
  return (
    <div className="commentArea sticky-top">
      <Image fluid className="d-block w-75 mx-auto mb-4 img-fluid" src={imgSrc} />
      <h6>Recensioni per {title}</h6>
      {fetched ? (
        reviews.length > 0 ? (
          <CommentList reviews={reviews} fetchComments={fetchComments} />
        ) : (
          <Alert variant="info">Non ci sono ancora recensioni</Alert>
        )
      ) : (
        <Spinner animation="border" variant="info" />
      )}

      <AddComment asin={asin} fetchComments={fetchComments} />
    </div>
  );
};

export default CommentArea;
