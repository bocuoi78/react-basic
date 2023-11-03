import React from "react";

class ChildComponent extends React.Component {
    state = {
        showClass: false
    }

    handleShowHide = () => {
        this.setState({
            showClass: !this.state.showClass
        })
    }

    render() {
        let { arrClass } = this.props;
        let { showClass } = this.state;
        return (
            <>
                {showClass === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="class-list">
                            {
                                arrClass.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.lop} - {item.khoa}
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