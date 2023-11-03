import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        masv: '',
        password: '',
        arrClass: [
            { id: '1', lop: '18IT1', khoa: 'Khoa học máy tính' },
            { id: '2', lop: '18IT2', khoa: 'Khoa học máy tính' },
            { id: '3', lop: '18IT3', khoa: 'Khoa học máy tính' },
            { id: '4', lop: '18IT4', khoa: 'Khoa học máy tính' },
            { id: '5', lop: '18IT5', khoa: 'Khoa học máy tính' },
        ],
        showPass: false
    }

    handleChangeMasv = (event) => {
        this.setState({
            masv: event.target.value
        })
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(this.state.masv)
    }

    handleShowHide = (event) => {
        event.preventDefault()
        this.setState({
            showPass: !this.state.showPass
        })
    }

    render() {
        let { showPass } = this.state
        return (
            <>
                <form>
                    <label>Mã sinh viên:</label><br />
                    <input
                        type="text"
                        value={this.state.masv}
                        onChange={(event) => this.handleChangeMasv(event)}
                    />
                    <br />
                    <label>Mật khẩu:</label><br />
                    <input
                        type={showPass === false ? 'password' : 'text'}
                        value={this.state.password}
                        onChange={(event) => this.handleChangePassword(event)}
                    />
                    <button onClick={(event) => this.handleShowHide(event)}>
                        {showPass === false ? 'Show' : 'Hide'}
                    </button>
                    <br />
                    <input
                        type="submit"
                        value="Đăng nhập"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <ChildComponent
                    state={this.state}
                    arrClass={this.state.arrClass}
                />
            </>
        )
    }
}

export default MyComponent;