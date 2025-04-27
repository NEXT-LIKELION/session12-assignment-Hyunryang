import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-container">
            <h1>📚 페이지 소개</h1>
            <p>
                이 페이지에서는 서울시에 위치한 장애인 도서관 정보를 확인하실 수
                있습니다.

                <br />
                <br />
                Search 탭에서 도서관 검색 기능을 통해 서울시 장애인 도서관의 현황 정보를 제공합니다.
                <br />
                상세 정보에는 도서관 이름, 주소, 전화번호, 운영시간, 홈페이지
                등을 포함하고 있습니다.
            </p>
        </div>
    );
}

export default About;
