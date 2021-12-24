import React from "react";
import logo01 from "../../Components/HomePage/img/logo01.png";
import logo02 from "../../Components/HomePage/img/logo02.png";
import facebook from "../../Components/HomePage/img/icfacebook.svg";
import instagram from "../../Components/HomePage/img/icig.svg";
import youtobe from "../../Components/HomePage/img/icYoutobe.svg";
import tiktok from "../../Components/HomePage/img/ic-tiktok.svg";
import zalo from "../../Components/HomePage/img/ic-zalo.svg";
import cash from "../../Components/HomePage/img/ic-cash (1).svg";
import internet from "../../Components/HomePage/img/ic-internet-banking.svg";
import visa from "../../Components/HomePage/img/ic-visa.svg";
import mastercard from "../../Components/HomePage/img/ic-mastercard.svg";
import "./style.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-infor">
          <div class="brand-info--logo">
            <img src={logo01} style={{ width: "60px" }} />
            <img src={logo02} style={{ width: "200px" }} />
          </div>
          <div class="brand-info--content">
            Anna là hệ thống phân phối mỹ phẩm chính hãng và uy tín có quy mô
            hàng đầu Việt Nam. Đến với Coco bạn có thể hoàn toàn yên tâm khi sẽ
            chọn được cho mình bộ sản phẩm phù hợp và ưng ý từ các nhãn hàng nổi
            tiếng trên toàn thế giới.
          </div>
        </div>
        <div style={{marginTop:'30px'}}>
          <ul>
            <li>
              <a href="">Câu chuyện thương hiệu</a>
            </li>
            <li>
              <a href="">Về chúng tôi</a>
            </li>
            <li>
              <a href="">Liên hệ</a>
            </li>
          </ul>
        </div>
        <div style={{marginTop:'30px'}}>
          <ul>
            <li>
              <a href="">Điều khoản sử dụng</a>
            </li>
            <li>
              <a href="">Chính sách đổi trả</a>
            </li>
            <li>
              <a href="">Điều khoản sử dụng</a>
            </li>
          </ul>
        </div>
        <div style={{marginTop:'30px'}}>
          <ul>
            <li>
              <a href="">Quyền lợi thành viên</a>
            </li>
            <li>
              <a href="">Thông tin thành viên</a>
            </li>
          </ul>
        </div>
        <div id="map" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7666.996887197788!2d105.77272274769439!3d21.018025076554977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454abec04d913%3A0x4a84d5a3585979d3!2zMiBOZ8O1IDk3LCBN4bu5IMSQw6xuaCwgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1640059277634!5m2!1svi!2s"  allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="tittle">
          <span class="title">
            AnnaShop.com thuộc bản quyền của Anna - Hệ thống phân phối mỹ phẩm
            chính hãng
          </span>
          <ul>
            <li>
              <a href="">Hotline: 098899900</a>
            </li>
            <li>
              <a href="">Email: annashop@gmail.com</a>
            </li>
            <li>
              <a href="">Hệ thống cửa hàng</a>
            </li>
            <li>
              <a href="">Website: http://annshop.com.vn</a>
            </li>
          </ul>
        </div>
        <div id="connect" style={{marginLeft:'230px'}}>
          <div>
            <h6>KẾT NỐI</h6>
            <a href="" >
              <img src={facebook} alt=""  style={{width:'25px'}} />
            </a>
            <a href="" style={{marginLeft:'10px'}}>
              <img src={instagram} alt=""  style={{width:'25px'}}/>
            </a>
            <a href="" style={{marginLeft:'10px'}}>
              <img src={youtobe} alt=""  style={{width:'25px'}} />
            </a>
            <a href="" style={{marginLeft:'10px'}}>
              <img src={tiktok} alt=""  style={{width:'25px'}}/>
            </a>
            <a href="" style={{marginLeft:'10px'}}>
              <img src={zalo} alt="" style={{width:'25px'}} />
            </a>
          </div>
          <br />
          <div>
            <h6>PHƯƠNG THỨC THANH TOÁN</h6>
            <a href="" style={{marginLeft:'10px'}}>
              <img src={cash} alt=""  style={{width:'35px'}}/>
            </a>
            <a href="" style={{marginLeft:'10px'}}>
              <img src={internet} alt=""  style={{width:'35px'}} />
            </a>
            <a href="" style={{marginLeft:'10px'}}>
              <img src={visa} alt=""  style={{width:'35px'}}/>
            </a>
            <a href="" style={{marginLeft:'10px'}}>
              <img src={mastercard} alt="" style={{width:'35px'}} />
            </a>
          </div>
        </div>
        <div style={{marginLeft:'230px'}}>
          <p>ĐĂNG KÝ NHẬN BẢN TIN</p>
          <p>Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</p>
          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Vui lòng nhập email"
              // aria-label="Recipient's username"
              // aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
