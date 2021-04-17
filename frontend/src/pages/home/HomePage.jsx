// NPM Packages
import React from "react";
import {Link} from "react-router-dom";

export default function HomePage() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">TalkBench</h4>
        <p>
          Thinking of career switching? <br/> Wondering if a new job in IT field is just what you need?
          <br/>Then TalkBench is for you!<br/>
          <br/>
          TalkBench is a community of like-minded people who have one thing in common:
          they want to make a meaningful change in their career towards IT but don´t really know where to start.
          This is a place to ask, give tips, share stories and resources.<br/>
          <br/>
          Start from writing or reading posts <Link to={"/posts/{id}"}>here</Link> or inspire yourself with a few useful links for career shifters:
        </p>
        <ul>
          <li>
            <a href="https://www.comptia.org/career-change/switching-career-path/how-to">Switching Careers into IT: A How-To Guide</a>
          </li>
          <li>
            <a href="https://dev.to/ruannawrites/career-change-tips-part-3-engage-in-online-communities-2j6o">Career Change Tips: Engage in Online Communities</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=CvJG4sQhzsw">Fastest way to become a software developer</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
