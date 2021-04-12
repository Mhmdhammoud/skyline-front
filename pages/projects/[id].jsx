import React from 'react';
import axios from 'axios';

export const getStaticPaths = async () => {
  const res = await axios({
    method: 'GET',
    url:
      'https://api.muallemi.com/api/view/viewAllInstructors?page=0&platform=web',
  });
  const {
    data: { api },
  } = res;

  const paths = api.map((el) => {
    return {
      params: {
        id: el._id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios({
    method: 'GET',
    url: `https://api.muallemi.com/api/instructors/viewUser?id=${id}`,
  });
  const {
    data: { instructor },
  } = res;
  return {
    props: {
      project: instructor,
    },
  };
};

const Project = ({ project }) => {
  return (
    <div>
      <h2>{project.fname}</h2>
    </div>
  );
};

export default Project;
