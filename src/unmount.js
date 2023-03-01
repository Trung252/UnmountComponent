import { Component } from "react";
import React from "react";

class unmount extends Component {
    componentedWillUnmount() {
        alert('The Component will be unmounted');
    }
    render() {
        return <p>Ngoài kia có cô bé nhìn qua khe
            Nghe tiếng đàn tiếng đàn tôi (lal lal lal)
            Ngoài kia có chú bé trèo cành me
            Mắt xoe tròn lắng nghe (lal lal lal)
            Đàn tôi hát câu gì
            Mà sao cô bé cười ngộ ghê
            Đàn tôi hát câu gì
            Mà sao chú bé ngồi mơ màng
            Hạnh phúc quá đơn sơ
            Đời tôi đâu có ngờ
            Từng đêm cô bé chờ
            Như chờ từng giấc mơ</p>;
    }
}

export default unmount;