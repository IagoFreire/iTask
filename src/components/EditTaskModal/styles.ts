import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input.input-name, textarea {
    width: 100%;
    padding: 0 1.5rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-light);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  input.input-name { 
    height: 3.2rem;
    padding: 0 1.5rem;
  }

  textarea { 
    padding: 0.5rem 1.5rem;
    margin: 1.2rem 0;
    height: 6.2rem;
    resize: none;
  }

  div.alignActionsButtons {
    display: flex;
    justify-content: space-between;

    button {
      width: 49%;
      padding: 1.5rem;
      height: 3.2rem;
      color: #fff;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      font-weight: 600;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

    button[type="submit"].save {
      background: var(--blue-light);
    }

    button.delete {
      background: var(--red);
    }
  }
`;
