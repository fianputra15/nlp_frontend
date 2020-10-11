import React ,{ useRef, useState , useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles  } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import Paper from '@material-ui/core/Paper';
import { Wrapper } from '../../components';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';

const api = axios.create({
  baseURL: 'http://localhost:8000'
});


function Mahasiswa(){
  const [state, setState] = useState([]);
  //for error handling
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const refreshTable = () => {
    const fetchData = async () => {
      const result = await api.get('mahasiswa_all')
      setState(result.data);
    };
    fetchData();
  }
  useEffect(() => {
    refreshTable();
  }, []);


  //Operation Add

  const handleRowAdd = (newData,resolve) => {
    let errorList = [];
    if(newData.stambuk === undefined){
      errorList.push("Harap Isi Stambuk");
    }
    if(newData.nama === undefined){
      errorList.push("Harap Isi Nama");
    }
    if(newData.alamat === undefined){
      errorList.push("Harap Isi Alamat");
    }

    if(errorList.length < 1){
        api.post("mahasiswa_add",newData).
        then(res => {
          let dataToAdd = state;
          dataToAdd.push(newData);
          setState(dataToAdd);
          resolve()
          setErrorMessages([])
          setIserror(false)
          refreshTable();
        })
        .catch(error => {
          setErrorMessages(["Cannot add data. Server error!"])
          setIserror(true)
          resolve()
        })
      }else{
        setErrorMessages(errorList)
        setIserror(true)
        resolve()
      }
    }


    const handleRowUpdate = (newData, oldData, resolve) => {
      //validation
      let errorList = []
      if(newData.stambuk === undefined){
        errorList.push("Harap Isi Stambuk");
      }
      if(newData.nama === undefined){
        errorList.push("Harap Isi Nama");
      }
      if(newData.alamat === undefined){
        errorList.push("Harap Isi Alamat");
      }

      if(errorList.length < 1){
        api.patch("/mahasiswa_operation/"+newData.id, newData)
        .then(res => {
          const dataUpdate = [...state];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          setState([...dataUpdate]);
          resolve()
          setIserror(false)
          setErrorMessages([])
          refreshTable();
        })
        .catch(error => {
          setErrorMessages(["Update failed! Server error"])
          setIserror(true)
          resolve()

        })
      }else{
        setErrorMessages(errorList)
        setIserror(true)
        resolve()
      }

    }
  const handleRowDelete = (oldData, resolve) => {
    api.delete('mahasiswa_operation/'+oldData.id)
    .then(res => {
      const dataDelete = [...state];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setState([...dataDelete]);
        resolve()
        refreshTable();
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }

  var columns = [
    { title: 'Stambuk', field: 'stambuk' },
    { title: 'Nama', field: 'nama' },
    // {
    //   title: 'Birth Place',
    //   field: 'birthCity',
    //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    // },
  ];

  return(
    <Wrapper>
      <Card>
          <CardContent>
              <h3>Data Mahasiswa</h3>
              <div>
                {iserror &&
                  <Alert severity="error">
                      {errorMessages.map((msg, i) => {
                          return <div key={i}>{msg}</div>
                      })}
                  </Alert>
                }
              </div>
              <MaterialTable
              title="Tabel Mahasiswa"
              columns={columns}
              data={state}
              editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve) => {

                    setTimeout(() => {
                      handleRowAdd(newData, resolve)

                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      handleRowUpdate(newData, oldData, resolve)
                      resolve();
                      // if (oldData) {
                      //   setState((prevState) => {
                      //     const data = [...prevState.data];
                      //     data[data.indexOf(oldData)] = newData;
                      //     return { ...prevState, data };
                      //   });
                      // }
                    }, 600);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        handleRowDelete(oldData, resolve)
                      });
                    }, 600);
                  }),
                }
              }
            />
          </CardContent>
      </Card>
    </Wrapper>
  );
}

export default Mahasiswa;
