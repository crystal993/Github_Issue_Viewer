import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import { useRepoContext } from '../contexts/RepoProvider';

const Header = () => {
  const { ownerRepo } = useRepoContext();
  // const { ownerRepo, setOwnerRepo } = useRepoContext();
  // const owner = useRef();
  // const repo = useRef();

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if(owner.current.value && repo.current.value) {
  //     setOwnerRepo({owner: owner.current.value, repo: repo.current.value});
  //   } else {
  //     alert("빈칸을 채워주세요.");
  //   }
  // }

  return (
    <HeaderStyle>
      <h1>
        <Link to="/">
          <LogoIcon width={30} height={30} />
        </Link>
        {ownerRepo.owner} / {ownerRepo.repo}
      </h1>
      {/* <form onSubmit={onSubmit}>
        <input type="text" name="owner" ref={owner} />
        <input type="text" name="repo" ref={repo} />
        <button>이동</button>
      </form> */}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;

  width: 60%;
  margin: 0 auto;
  h1 a {
    vertical-align: middle;
    margin: 0 0.3em;
  }

  @media (max-width: 720px) {
    width: 100%;

    h1 {
      font-size: 1.6em;
    }
  }
`;
export default Header;
