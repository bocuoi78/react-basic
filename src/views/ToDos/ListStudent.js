import React from "react";
import './ListStudent.scss'
import './AddStudent'
import AddStudent from "./AddStudent";
import { toast } from 'react-toastify';

class ListStudent extends React.Component {
    state = {
        listStudents: [
            { id: '1', name: "Nguyễn Văn A" },
            { id: '2', name: "Nguyễn Văn B" },
            { id: '3', name: "Nguyễn Văn C" }
        ],
        editStudent: {}
    }

    addNewStudent = (student) => {
        this.setState({
            listStudents: [...this.state.listStudents, student]
        })
        toast.success("Thêm mới thành công!!!")
    }

    handleDeleteStudent = (student) => {
        let currentStudents = this.state.listStudents;
        currentStudents = currentStudents.filter(item => item.id !== student.id);
        this.setState({
            listStudents: currentStudents
        });
        toast.success('Xóa thành công!!!')
    }

    handleEditStudent = (student) => {
        let { editStudent, listStudents } = this.state;
        let isEmptyObj = Object.keys(editStudent).length === 0;
        if (isEmptyObj === false && editStudent.id === student.id) {
            let listStudentsCopy = [...listStudents];
            let objIndex = listStudentsCopy.findIndex(item => item.id === student.id);
            listStudentsCopy[objIndex].name = editStudent.name;
            this.setState({
                listStudents: listStudentsCopy,
                editStudent: {}
            });
            toast.success('Chỉnh sửa thành công!!!')
            return;
        }
        this.setState({
            editStudent: student
        })
    }

    handleOnChangeEditStudent = (event) => {
        let editStudentCopy = { ...this.state.editStudent };
        editStudentCopy.name = event.target.value;
        this.setState({
            editStudent: editStudentCopy
        });
    }

    render() {
        let { listStudents, editStudent } = this.state;
        let isEmptyObj = Object.keys(editStudent).length === 0;
        return (
            <>
                <div className="list-student-container">
                    <AddStudent
                        addNewStudent={this.addNewStudent}
                    />
                    <div className="list-student-content">
                        {listStudents && listStudents.length > 0 && listStudents.map((item, index) => {
                            return (
                                <div className="student-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.name}</span>
                                        :
                                        <>
                                            {editStudent.id === item.id ?
                                                <span>{index + 1} - <input value={editStudent.name} onChange={(event) => this.handleOnChangeEditStudent(event)} /> </span>
                                                :
                                                <span>{index + 1} - {item.name}</span>
                                            }
                                        </>

                                    }
                                    <button className="edit" onClick={() => this.handleEditStudent(item)}>
                                        {isEmptyObj === false && editStudent.id === item.id ? 'Lưu' : 'Sửa'}
                                    </button>
                                    <button
                                        className="delete"
                                        onClick={() => this.handleDeleteStudent(item)}>
                                        Xóa
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default ListStudent;