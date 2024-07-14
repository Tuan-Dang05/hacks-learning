import React, { Component } from 'react';
import learn1 from '../../assets/images/learn1.png';
import learn2 from '../../assets/images/learn2.png';
import './info.scss';
class Infomation extends Component {
    render() {
        return (
            <div className='row' style={{marginBottom: '-100%'}}>
                <div className=' col-8 thongtin'>
                <h5>THÔNG TIN CƠ BẢN</h5>
                <h4>Tại sao nên lựa chọn <i>Hacks Learning</i>?</h4>
                <ul>
                    <li>
                    Khóa học đa dạng, phong phú: Hacks Learning cung cấp đa dạng các khóa học cho mọi đối tượng học viên, từ học sinh, sinh viên đến người đi làm. Các khóa học được thiết kế theo từng cấp độ, từ cơ bản đến nâng cao, đáp ứng mọi nhu cầu học tập của bạn.
                    </li>
                    <li>
                    Phương pháp giảng dạy hiện đại: Hacks Learning áp dụng phương pháp giảng dạy hiện đại, tập trung vào thực hành, giúp bạn dễ dàng tiếp thu kiến thức và ghi nhớ lâu dài.
                    </li>
                    <li>
                    Giảng viên tâm huyết, dày dặn kinh nghiệm: Đội ngũ giảng viên tại Hacks Learning đều là những chuyên gia trong lĩnh vực của mình, có nhiều năm kinh nghiệm giảng dạy và luôn nhiệt tình hỗ trợ học viên.
                    </li>
                    <li>
                    Môi trường học tập tương tác: Hacks Learning tạo ra môi trường học tập tương tác, giúp bạn dễ dàng trao đổi, thảo luận và học hỏi lẫn nhau.
                    </li>
                    <li>
                    Học tập mọi lúc mọi nơi: Với nền tảng trực tuyến, bạn có thể học tập mọi lúc mọi nơi, chỉ cần có kết nối internet.
                    </li>
                </ul>
                </div>
                <div className='col-4 learning'>
                    <div className='learn1'>
                        <img  src={learn1} alt='learn1'/>
                    </div>
                    <div className='learn1'>
                        <img  src={learn2} alt='learn2'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Infomation;
