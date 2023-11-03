import React from "react";
import { toast } from 'react-toastify';

class AddStudent extends React.Component {
    state = {
        newName: ''
    }

    handleOnChangeNewName = (event) => {
        this.setState({
            newName: event.target.value
        })
    }
    handleOnClickAdd = () => {
        if (!this.state.newName) {
            toast.error('Thiếu tên!!!!')
            return;
        }
        let student = {
            id: Math.floor(Math.random() * 10000),
            name: this.state.newName
        }
        this.props.addNewStudent(student)
        this.setState({
            newName: ''
        })
    }

    render() {
        let { newName } = this.state;
        return (
            <>
                <div className="add-student">
                    <input
                        type="text"
                        value={newName}
                        onChange={(event) => this.handleOnChangeNewName(event)}
                    />
                    <button
                        type="button"
                        className="add"
                        onClick={() => this.handleOnClickAdd()}>
                        Thêm
                    </button>
                </div>
            </>
        )
    }
}

export default AddStudent;