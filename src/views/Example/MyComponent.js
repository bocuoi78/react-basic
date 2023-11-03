import React from "react";
import AddComponent from "./LoginComponent";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        arrAccount: [
            { id: '1', masv: '18IT100', password: 'Abc@18IT100' },
            { id: '2', masv: '18IT200', password: 'Abc@18IT200' },
            { id: '3', masv: '18IT300', password: 'Abc@18IT300' },
            { id: '4', masv: '18IT400', password: 'Abc@18IT400' },
            { id: '5', masv: '18IT500', password: 'Abc@18IT500' },
        ]
    }

    addNewAccount = (account) => {
        this.setState({
            arrAccount: [...this.state.arrAccount, account]
        })
    }

    deleteAccount = (account) => {
        let currentAccounut = this.state.arrAccount;
        console.log(account)
        currentAccounut = currentAccounut.filter(item => item.id !== account.id)
        this.setState({
            arrAccount: currentAccounut
        })
    }

    componentDidUpdate(prevState, prevProps) {
        console.log('>>> Run component did update')
    }

    componentDidMount() {
        console.log('>>> Run component did mount')
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewAccount={this.addNewAccount}
                />
                <ChildComponent
                    arrAccount={this.state.arrAccount}
                    deleteAccount={this.deleteAccount}
                />
            </>
        )
    }
}

export default MyComponent;