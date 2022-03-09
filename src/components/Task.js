import React, {useState} from 'react';

export default function Task(props) {

    const[status, setStatus] = useState(false);

    const changeStatus = (e) => {
        setStatus(true);
    };

    return (
        <div>
            <div className='card p-1 my-3' style={{ backgroundColor: '#AD1457' }}>
                {(status) ?
                    <div className="form-check text-end ms-2">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" checked />
                        <label className="form-check-label text-light text-decoration-line-through" htmlFor="defaultCheck1">
                            {props.tasks.task}
                        </label>
                        <button className='btn btn-sm' onClick={() => { props.deleteTask(props.tasks._id) }}> <i className="bi bi-trash text-light"></i></button>
                    </div> : <div className="form-check text-end ms-2">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onClick={changeStatus} />
                        <label className="form-check-label text-light" htmlFor="defaultCheck1">
                            {props.tasks.task}
                        </label>
                    </div>
                }
            </div>
        </div>
    );
}
          
