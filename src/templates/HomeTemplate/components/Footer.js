import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram } from '@mui/icons-material'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="row">
                    <div className="col-md-3 col-12 mobile">
                        <Link to='/' className="footer-top-header">Hỗ trợ</Link>
                        <Link to='/'>Trung tâm trợ giúp</Link>
                        <Link to='/'>Các tùy chọn hủy</Link>
                        <Link to='/'>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</Link>
                        <Link to='/'>Hỗ trợ người khuyết tật</Link>
                        <Link to='/'>Báo cáo lo ngại của hàng xóm</Link>
                    </div>
                    <div className="col-md-3 col-12 mobile">
                        <Link to='/' className="footer-top-header">Cộng đồng</Link>
                        <Link to='/'>Nhà ở cứu trợ</Link>
                        <Link to='/'>Hỗ trợ dân tị nạn Afghanistan</Link>
                        <Link to='/'>Sự đa dạng và thân thuộc</Link>
                        <Link to='/'>Chống phân biệt đối xử</Link>
                    </div>
                    <div className="col-md-3 col-12 mobile">
                        <Link to='/' className="footer-top-header">Đón tiếp khách</Link>
                        <Link to='/'>Thử đón tiếp khách</Link>
                        <Link to='/'>AirCover: bảo vệ cho Host</Link>
                        <Link to='/'>Xem tài nguyên đón tiếp khách</Link>
                        <Link to='/'>Truy cập diễn đàn cộng đồng</Link>
                        <Link to='/'>Đón tiếp khách có trách nhiệm</Link>

                    </div>
                    <div className="col-md-3 col-12 mobile">
                        <Link to='/' className="footer-top-header">Giới thiệu</Link>
                        <Link to='/'>Trang tin tức</Link>
                        <Link to='/'>Tìm hiểu các tính năng mới</Link>
                        <Link to='/'>Thư ngỏ từ các nhà sáng lập</Link>
                        <Link to='/'>Cơ hội nghề nghiệp</Link>
                        <Link to='/'>Nhà đầu tư</Link>
                        <Link to='/'>Airbnb Luxe</Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <span>© 2021 Airbnb, Inc.</span>
                    <Link to='/' className='footer-bottom-left-icon'>Quyền riêng tư</Link>
                    <Link to='/' className='footer-bottom-left-icon'>Điều khoản</Link>
                    <Link to='/' className='footer-bottom-left-icon'>Sơ đồ trang web</Link>
                </div>
                <div className="footer-bottom-right">
                    <Facebook className='footer-bottom-right-icon'/>
                    <Twitter className='footer-bottom-right-icon'/>
                    <Instagram className='footer-bottom-right-icon'/>
                </div>
            </div>
        </div>
    )
}

export default Footer
