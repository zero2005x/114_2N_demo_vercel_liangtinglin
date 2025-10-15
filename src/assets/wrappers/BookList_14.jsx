import styled from "styled-components";

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .booklist {
    width: 90%;
    display: grid;
    gap: 1.5rem;
    margin: 3rem auto;

    .book {
      background-color: #eee;
      border-radius: 0.5rem;
      padding: 1rem;

      img {
        width: 100%;
        height: 220px;
        object-fit: cover;
        margin: 0 auto;
      }
    }

    .bookinfo {
      font-family: "Roboto", "sans-serif";
      color: #444;

      h1 {
        font-size: 1rem;
        font-weight: 600;
        padding-top: 0.5rem;
      }

      h4 {
        font-size: 0.8rem;
        padding-top: 0.5rem;
        color: #666;
      }
    }
  }

  @media screen and (min-width: 500px) {
    .booklist {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 700px) {
    .booklist {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 900px) {
    .booklist {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (min-width: 1100px) {
    .booklist {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media screen and (min-width: 1300px) {
    .booklist {
      max-width: 1500px;
      grid-template-columns: repeat(6, 1fr);
    }
  }
`;
export default Wrapper;
