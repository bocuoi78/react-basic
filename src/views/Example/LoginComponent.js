import React from "react";

class AddComponent extends React.Component {
    state = {
        masv: '',
        password: '',
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
        if (!this.state.masv || !this.state.password) {
            alert('Missing something!!!')
        }
        this.props.addNewAccount({
            id: Math.floor(Math.random() * 100),
            masv: this.state.masv,
            password: this.state.password
        })
        this.setState({
            masv: '',
            password: ''
        })
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
        )
    }
}

export default AddComponent;