import React, { Component } from 'react'
import Cart from './Cart'
import ProductList from './ProductList'

export default class CartDemo extends Component {

    state = {
        gioHang: [
            { maSP: 3, tenSP: "Iphone XS Max", giaBan: 27000000, hinhAnh: "./images/applephone.jpg", soLuong: 3 }
        ]
    }

    themGioHang = (prodClick) => {
        //Thêm thuộc tính số lượng vào object prodClick
        prodClick = { ...prodClick, soLuong: 1 };

        //kiểm tra sản phẩm đó đã có trong giỏ hàng hay chưa
        let checkProd = this.state.gioHang.find(p => p.maSP == prodClick.maSP);
        if (checkProd) {
            //Có trong giỏ hàng => tăng số lượng lên 1
            checkProd.soLuong += 1;
        } else {
            this.state.gioHang.push(prodClick);
        }
        //setState 
        this.setState({
            gioHang: this.state.gioHang
        });
    }
    //state đặt tại component nào thì hàm setState sẽ được định nghĩa tại component đó
    xoaGioHang = (maSPClick) => {
        console.log(maSPClick)

        this.state.gioHang = this.state.gioHang.filter(p => p.maSP !== maSPClick)

        //setState
        this.setState({
            gioHang: this.state.gioHang
        })
    }


    tangGiamSoLuong = (maSPClick, soLuong) => {
        // console.log(maSPClick,soLuong);
        let sp = this.state.gioHang.find(spGH => spGH.maSP === maSPClick);
        if (sp) {
            sp.soLuong += soLuong;
            if (sp.soLuong < 1) {
                if (window.confirm('Bạn có muốn xoá sản phẩm không')) {
                    this.xoaGioHang(maSPClick);
                }else {
                    sp.soLuong = 1;
                }

            }
        }

        //setState giỏ hàng sau khi xử lý tăng giảm
        this.setState({
            gioHang: this.state.gioHang
        })
    }


    render() {

        return (
            <div className='container'>
                <Cart gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
                <ProductList themGioHang={this.themGioHang} />
                {/* <button onClick={()=>{
            this.themGioHang();
        }}>thêm giỏ hàng</button> */}
            </div>
        )
    }
}
