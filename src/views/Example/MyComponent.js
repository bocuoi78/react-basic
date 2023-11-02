import React from "react";

class MyComponent extends React.Component {
    state = {
        masv: '',
        password: ''
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

    render() {
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
                        type="password"
                        value={this.state.password}
                        onChange={(event) => this.handleChangePassword(event)}
                    />
                    <br />
                    <input
                        type="submit"
                        value="Đăng nhập"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        )
    }
}

export default MyComponent;