import React from "react";
import "./Demo.scss"

class ChildComponent extends React.Component {
    state = {
        showClass: true
    }

    handleShowHide = () => {
        this.setState({
            showClass: !this.state.showClass
        })
    }

    handleOnClickDelete = (account) => {
        this.props.deleteAccount(account)
    }

    render() {
        let { arrAccount } = this.props;
        let { showClass } = this.state;
        return (
            <>
                {showClass === false ?
                    <div>
                        <button
                            className="btn-show"
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="class-list">
                            {
                                arrAccount.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.masv} - {item.password} &nbsp; <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;