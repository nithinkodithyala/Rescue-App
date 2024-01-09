import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Fade, Grid, Modal, Stack, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import uuid from 'react-uuid';
import axios from 'axios';
import Maps from './Maps.js';
import { toast } from 'react-toastify';
import Sound from 'react-sound'; // Import Sound from react-sound

function ReliefCenter() {
  // modal style
  const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#fff',
    boxShadow: 24,
    pt: 2,
    p: 4,
  };

  // modal states
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalData, setModalData] = React.useState('');
  const [rows, setRows] = React.useState({});
  const [output, setOutput] = useState('');
  const [playSound, setPlaySound] = useState(false); // State to control sound

  function setRow() {
    axios
      .get(`relief/reliefcenters`)
      .then((res) => {
        setRows(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  React.useEffect(() => {
    setRow();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/notification/getnotification');
        const data = await response.json();
        console.log(data, "hi");
        // toast(Emergency at ${data.forEach()})
        data.slice(0, 5).forEach(notification => {
          // Assuming 'notification' has 'latitude' and 'longitude' properties
          setPlaySound(true); 
          toast(`Emergency at Latitude: ${notification.latitude}, Longitude: ${notification.longitude}`);
          
          setTimeout(() => {
            setPlaySound(false); // Stop the sound after 5 seconds
          }, 3000);// Play the sound when a new notification is shown
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const interval = setInterval(fetchData, 5 * 1000); // Polling every 5 minutes
    return () => clearInterval(interval);
  }, []);

  // demo data
  const columns = [
    { field: "_id", headerName: "Id", width: 300, hideable: false, hide: true },
    { field: 'CenterName', headerName: 'Center name', width: 300 },
    { field: 'Phone', headerName: 'Phone no', width: 300 },
    { field: 'Capacity', headerName: 'Capacity', width: 300 },
    { field: 'Admission', headerName: 'Admission', width: 300, hideable: false, hide: true },
    { field: 'Address', headerName: 'Address', width: 300, hideable: false, hide: true },
    {
      field: 'Vaccancy',
      headerName: 'Vaccancy',
      width: 160,
      valueGetter: (params) =>
        `${params.row.Capacity - params.row.Admission}`,
      hideable: false, hide: true
    },
    {
      field: 'InCharge',
      headerName: 'Incharge',
      width: 160,
      hideable: false, hide: true
    },

    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      renderCell: (params) => {

        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
            );

          setModalData(thisRow);
          handleOpen();
        };

        return <Button variant='outlined' onClick={onClick} size="small" >View More</Button>;
      },
    },
  ];

  return (
    <Box sx={{ mt: 5 }}>
      <Container>
        <Stack container direction='row' alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
          <Typography variant="h5" color="initial">Relief Center</Typography>
        </Stack>
        <Box sx={{ height: '80vh', maxHeight: '70vh', width: '80vw' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            getRowId={(row) => uuid()}
            disableSelectionOnClick
          />
        </Box>
        <Typography variant="h6" color="initial" sx={{ mb: 1 }}>
          Location of all rescue centers
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={14}>
            <Maps></Maps>
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
              <Typography variant="h6" color="primary" sx={{ fontWeight: '600', fontSize: '1rem' }}>Center Details</Typography>
            </Stack>
            <Grid container alignItems='center' justifyContent='space-between' >
              <Grid item xs={12}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography variant="subtitle1" color="initial">
                      {modalData.CenterName}
                    </Typography>
                    <Box sx={{ width: '70%' }}>
                      <Typography variant="caption" color="secondary">
                        {modalData.Address}
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="initial">
                      +91 {modalData.Phone}
                    </Typography>
                  </Box>
                  <Box>
                    <Stack direction="row" alignItems="baseLine" justifyContent="center">
                      <Typography variant="h3" color="secondary">
                        {modalData.Vaccancy}
                      </Typography>
                      <Typography variant="h6" color="secondary">Slots</Typography>
                    </Stack>
                    <Typography variant="body2" color="">
                      Available
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12}>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Sound
        url="/alert.wav" // Replace with the actual path to your sound file
        playStatus={playSound ? Sound.status.PLAYING : Sound.status.STOPPED}
        onFinishedPlaying={() => setPlaySound(false)} // Stop the sound when it finishes playing
      />
    </Box>
  );
}

export default ReliefCenter;
