import React from "react";
import firstBanner from '../../assets/images/covers/first_banner.jpg'
import inauguration from '../../assets/images/covers/inauguration.jpeg'
import academiaAll from '../../assets/images/covers/Academia_all_foreign.jpg'


const Table1 = () => {
  return (
    <table className="table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td> <img height="50px" src={firstBanner} alt="" /></td>
          <td>First Banner</td>
          <td><button className="btn btn-danger">Delete</button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td><img height="50px" src={inauguration} alt="" /></td>
          <td>Inaugration</td>
          <td><button className="btn btn-danger">Delete</button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <img height="50px" src={academiaAll} alt="" />
          <td>Scheduel</td>
          <td><button className="btn btn-danger">Delete</button></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table1;
