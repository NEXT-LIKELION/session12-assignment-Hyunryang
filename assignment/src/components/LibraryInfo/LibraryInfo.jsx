import React, { useEffect, useState } from "react";
import "./LibraryInfo.css";
import axios from "axios";
function LibrarySearch() {
    const [libraries, setLibraries] = useState([]);
    const [selectedLibrary, setSelectedLibrary] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "/서울시 장애인 도서관 현황정보.json"
                );
                setLibraries(response.data.DATA);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    const handleSearch = () => {
        const library = libraries.find(
            (lib) => lib.lbrry_name === selectedLibrary
        );
        if (library) {
            setResult(library);
        } else {
            setResult(null);
        }
    };

    if (error) {
        return <div>데이터 로드 중 에러 발생: {error}</div>;
    }

    return (
        <div className="library-search-container">
            <h1>🔍 장애인 도서관 찾기</h1>
            <div className="search-box">
                <select
                    value={selectedLibrary}
                    onChange={(e) => setSelectedLibrary(e.target.value)}
                >
                    <option value="">도서관을 선택하세요</option>
                    {libraries.map((library, index) => (
                        <option key={index} value={library.lbrry_name}>
                            {library.lbrry_name}
                        </option>
                    ))}
                </select>
                <button onClick={handleSearch}>검색</button>
            </div>
            {result && (
                <div className="library-details">
                    <h2>{result.lbrry_name}</h2>
                    <p>주소 | {result.adres}</p>
                    <p>전화번호 | {result.tel_no}</p>
                    <p>운영시간 | {result.op_time}</p>
                    <p>
                        홈페이지 | {" "}
                        <a
                            href={
                                result.hmpg_url.startsWith("http")
                                    ? result.hmpg_url
                                    : `https://${result.hmpg_url}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {result.hmpg_url}
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
}

export default LibrarySearch;
