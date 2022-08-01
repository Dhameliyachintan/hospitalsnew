import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function Listappoinment(props) {
    const history = useHistory()

    const [data, setData] = useState([])
    const [filterdata, setfilterdata] = useState([])

    const getData = () => {
        let localData = JSON.parse(localStorage.getItem("users"))
        setData(localData)
    }

    useEffect(() => {
        getData()
    }, [])

    const columns = [
        { field: 'id', headerName: 'id', width: 70 },
        { field: 'name', headerName: 'name', width: 70 },
        { field: 'email', headerName: 'email', width: 130 },
        { field: 'phone', headerName: 'phone', width: 130 },
        { field: 'department', headerName: 'department', width: 130 },
        { field: 'message', headerName: 'message', width: 130 },
        {
            field: 'delete', headerName: 'delete', width: 130,
            renderCell: (params) => (
                <Button onClick={(() => handleDelete(params.row.id))} variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            )
        },
        {
            field: 'Edit', headerName: 'Edit', width: 130,
            renderCell: (params) => (
                <Button onClick={(() => handleEdit(params.id))} variant="outlined" startIcon={<AutoFixHighIcon />}>
                    Edit
                </Button>
            )
        }
    ];


    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("users"))
        console.log(localData);

        let fdata = localData.filter((v, i) => v.id !== id)
        console.log(fdata);
        // console.log(id);

        localStorage.setItem("users", JSON.stringify(fdata))
        getData()
    }

    const handleEdit = (id) => {
        history.push("appointment", { "id": id })
        console.log(id);
    }


    const handleSearch = (val) => {
        let localdata = JSON.parse(localStorage.getItem("users"))

        let fdata = localdata.filter((d) => (
            d.id.toString().includes(val) ||
            d.name.toString().toLowerCase().includes(val.toLowerCase()) ||
            d.email.toString().includes(val) ||
            d.phone.toString().includes(val) ||
            d.department.toLowerCase().includes(val.toLowerCase()) ||
            d.message.toString().includes(val)
        ))

        console.log(fdata);

        setfilterdata(fdata)
        // console.log(val);
    }

    let fdata = filterdata.length > 0 ? filterdata : data
    return (
        <>

            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <div className='row text-center'>
                        <div className="col-6">
                            <NavLink to={"/appointment"}>appointment</NavLink>
                        </div>
                        <div className="col-6">
                            <NavLink to={"/Listappointment"}>Listappointment</NavLink>
                        </div>
                    </div>

                    <div className="form-group mt-3 col-lg-12">
                        <TextField
                            type="text"
                            id='search'
                            label='search'
                            variant='standard'
                            onChange={(e) => handleSearch(e.target.value)}

                        />
                        <div className="validate" />
                    </div>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={fdata}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                </div>
            </section>
        </>

    );
}

export default Listappoinment;