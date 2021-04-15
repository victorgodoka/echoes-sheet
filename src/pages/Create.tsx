import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import firebase from '../utils/firebase'

const useStyles = makeStyles({
  create__wrapper: {
    width: '100%',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap'
  },
  create__base: {
    backgroundColor: '#ffffff20',
    borderRadius: '4px 0',
    "& .MuiFormLabel-root": {
      color: '#919191 !important'
    },
    "& .MuiInputBase-input": {
      color: '#fff !important'
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: '2px solid #000'
    }
  },
  create__name: {
    width: 'calc(100% - 120px)',
    margin: '10px',
  },
  create__age: {
    width: '80px',
    margin: '10px',
  },
  create__origin: {
    width: 'calc(100% - 140px)',
    margin: '10px',
  },
  create__alignment: {
    width: '100px',
    margin: '10px',
  }
})

function Create() {
  const [user, setUser] = useState({})
  const classes = useStyles();

  const handleChange = ev => {
    let _user = Object.assign({}, user);
    _user[ev.target.id] = ev.target.value

    setUser(_user)
  }

  const baseClass = c => classes.create__base + " " + classes[c]

  return (
    <form className={classes.create__wrapper} onSubmit={e => e.preventDefault()}>
      <TextField onChange={handleChange} variant="filled" id="name" className={baseClass('create__name')} label="Char Name" />
      <TextField onChange={handleChange} type="number" variant="filled" id="age" className={baseClass('create__age')} label="Age" />
      <TextField onChange={handleChange} variant="filled" id="origin" className={baseClass('create__origin')} label="Origin" />

      <FormControl className={baseClass('create__alignment')} variant="filled" >
        <InputLabel id="demo-simple-select-label">Identity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        // value={''}
        // onChange={''}
        >
          <MenuItem value={"w"}><span className="ms ms-w"></span></MenuItem>
          <MenuItem value={"u"}><span className="ms ms-u"></span></MenuItem>
          <MenuItem value={"b"}><span className="ms ms-b"></span></MenuItem>
          <MenuItem value={"r"}><span className="ms ms-r"></span></MenuItem>
          <MenuItem value={"g"}><span className="ms ms-g"></span></MenuItem>
          <MenuItem value={"c"}><span className="ms ms-c"></span></MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

export default Create;
