import React from "react";

class ChildComponent extends React.Component {
    render() {
        let { arrClass } = this.props;
        return (
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
            </>
        )
    }
}

export default ChildComponent;