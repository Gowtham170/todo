import React, {useState, useEffect} from 'react';

import Task from './Task';

export default function CreateTask() {

    const [task, setTask] = useState('');
    const [values, setValues] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/task/', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET',
            body: JSON.stringify()
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setValues(data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const onChangeHandler = (e) => {
        e.preventDefault();

        const name = { task };
        console.log(name);

        fetch('http://localhost:5000/task/add', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(name)
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        setTask('');

        window.location.reload(false);
    };

    const deleteTask = (id) => {
        fetch('http://localhost:5000/task/'+id, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify()
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));

        window.location.reload(false);
    }

    return (
        <div className='container-lg mt-5'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-md-8 col-lg-5 col-sm-10'>
                    <div className='card mt-5'>
                        <div className='card-body'>
                            <div className='' style={{ height: '40px' }}>
                                <h4 className='p-2 text-center h5' style={{color: '#AD1457' }}>Todo</h4>
                            </div>
                            <div className='text-center mt-2'>
                                <form onSubmit={onChangeHandler}>
                                    <div className='input-group' style={{ height: '40px' }} >
                                        <input className='form-control' name='task' style={{ borderColor: '#AD1457' }} type='text' value={task} onChange={handleChange} required />
                                        <button className='btn text-light' style={{ width: '80px', backgroundColor: '#AD1457' }}>Add</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                {values.map((value) => {
                                    return <Task tasks={value} deleteTask={deleteTask} key={value._id} />
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
