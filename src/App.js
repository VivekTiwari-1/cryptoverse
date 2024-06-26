import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, Cryptodetails } from './components'; // Trick to import multiple components in a single line using index.js file
import './App.css'

const App = () => {
    return (
        <div className='app'>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                        </Routes>
                        <Routes>
                            <Route exact path="/exchanges" element={<Exchanges />} />
                        </Routes>
                        <Routes>
                            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                        </Routes>
                        <Routes>
                            <Route exact path="/crypto/:coinId" element={<Cryptodetails />} />
                        </Routes>
                        <Routes>
                            <Route exact path="/news" element={<News />} />
                        </Routes>
                    </div>
                </Layout>

                <div className="footer" >
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse All Rights Reserved
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App