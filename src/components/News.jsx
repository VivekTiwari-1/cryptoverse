import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

import Loader from './Loader';


const { Title } = Typography;

const News = ({ simplified }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const num = simplified ? 8 : 50;
    const url = `https://crypto-news16.p.rapidapi.com/news/top/${num} `;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c91f9e7108mshc93d82ceb5736a0p174ebajsn83141e8eed0c',
            'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
        }
    };

    const cryptoNewsApi = async () => {
        try {
            setLoading(true);
            const response = await fetch(url, options);
            const result = await response.json();
            setArticles(result)
            setLoading(false);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        cryptoNewsApi()
    }, [])

    return (
        <>

            {simplified ? "" : (
                <div>
                    <Title level={2} >Top Crypto news</Title><br /><br /></div>
            )}

            {loading ? <Loader /> : (
                <Row gutter={[32, 32]} className="news-card-container">
                    {articles?.map((element) => (
                        <Col
                            xs={24}
                            sm={12}
                            lg={6}
                            className="news-card"
                            key={element.title}
                        >

                            <Link key={element.title} to={element.url}>
                                <Card
                                    hoverable
                                >
                                    <h3>{element.title}</h3>
                                    <p>{element.description.slice(0, 150)}</p>
                                    <p><span>Date: </span>{new Date(element.date).toGMTString()}</p>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            )}
        </>
    )
};

export default News;