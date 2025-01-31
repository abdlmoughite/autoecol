import React, { useState } from "react";
import "../styles.css";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, MenuItem, Stack } from "@mui/material";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Clients = () => {
  const [confirmdelete, setconfirmdelete] = useState(false);
  const [modelUpdate, setmodelUpdate] = useState(false);
  const [modalPaiment, setmodalPaiment] = useState(false);
  const [clientName, setclientName] = useState("");
  const [permis, setpermis] = useState("Selectionner une catégorie");

  const typePermis = [
    "A – Permis moto",
    "B – Permis auto",
    "C – Permis professionnels (transport de marchandises ou de matériel)",
    "D – Permis professionnels (transport de personnes)",
    "E – Permis remorque",
  ];

  function handleDelete() {
    setconfirmdelete(!confirmdelete);
  }

  function handleUpdateClient(client) {
    setclientName(client.firstName);
    setmodelUpdate(!modelUpdate);
  }

  function handlePaiment(clientPaiment) {
    setclientName(clientPaiment.firstName);
    setmodalPaiment(!modalPaiment);
  }

  function handleClose() {
    setmodelUpdate(false);
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "Nom", width: 130 },
    { field: "lastName", headerName: "Prénom", width: 130 },
    { field: "telephone", headerName: "Téléphone", width: 100 },
    {
      field: "dateInscription",
      headerName: "Date d'inscription",
      type: "number",
      width: 130,
    },
    {
      field: "categorier",
      headerName: "Catégorie",
      width: 130,
    },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    // },
    {
      field: "action",
      headerName: "Action",
      width: 190,
      renderCell: (params) => (
        <div className="container-btn-action-dashboard">
          <button className="btn-view-dashboeard">
            <i class="fa-regular fa-eye"></i>
          </button>
          <button
            className="btn-modify-dashboeard"
            title="Modifier"
            onClick={() => handleUpdateClient(params.row)}
          >
            <i class="fa-solid fa-pen"></i>
          </button>
          <button
            className="btn-mony-dashboeard"
            title="Paiments"
            onClick={() => handlePaiment(params.row)}
          >
            <i class="fa-solid fa-money-check-dollar"></i>
          </button>
          <button className="btn-sup-dashboeard" onClick={() => handleDelete()}>
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      telephone: "0658574774",
      action: (
        <div>
          <button>Modifier</button>
          <button>Supprimer</button>
        </div>
      ),
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      telephone: "0658574774",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
      telephone: "0658574774",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
      telephone: "0658574774",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
      telephone: "0658574774",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,
      age: 150,
      telephone: "0658574774",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      telephone: "0658574774",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      telephone: "0658574774",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
      telephone: "0658574774",
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div className="page">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4 h2-dashboard">
          Liste des Clients
        </h2>
        <div className="overflow-x-auto">
          <Paper sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              sx={{ border: 0 }}
            />
          </Paper>
        </div>
      </div>

      {confirmdelete &&
        Swal.fire({
          title: "Es-tu sûr?",
          text: "Vous êtes sûr de vouloir supprimer le client?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#c3d900",
          cancelButtonColor: "#d33",
          confirmButtonText: "Oui, Supprimer",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Supprimé!",
              text: "Votre client a été supprimé.",
              icon: "success",
            });
          }
        })}

      {modelUpdate && (
        <React.Fragment>
          <Dialog
            fullScreen
            open={modelUpdate}
            onClose={handleUpdateClient}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: "relative" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleUpdateClient}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  Modification client : {clientName}
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  Sauvegarder
                </Button>
              </Toolbar>
            </AppBar>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 1,
                  width: "90%",
                  margin: "auto",
                  justifyContent: "center",
                },
                display: "flex",
                marginTop: "5rem",
                gap: 3,
                flexDirection: "column",
              }}
              noValidate
              autoComplete="off"
            >
              <Stack
                direction={"row"}
                sx={{
                  gap: 2,
                }}
              >
                <TextField sx={{ flex: 1 }} label="Nom" variant="standard" />
                <TextField sx={{ flex: 1 }} label="Prénom" variant="standard" />
              </Stack>
              <Stack
                direction={"row"}
                sx={{
                  gap: 2,
                }}
              >
                <TextField
                  sx={{ flex: 1 }}
                  label="Téléphone"
                  variant="standard"
                />
                <TextField
                  sx={{ flex: 1 }}
                  label="Adresse"
                  variant="standard"
                />
              </Stack>
              <TextField label="Prix" variant="standard" />
              <Stack
                direction={"row"}
                sx={{
                  gap: 2,
                }}
              >
                <FormControl
                  variant="standard"
                  sx={{ m: 1, minWidth: 120, flex: 1 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Catégorie
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    value={permis}
                    onChange={(eo) => setpermis(eo.target.value)}
                    label="Permis"
                  >
                    <MenuItem value="">
                      <em>Selectionner une catégorie</em>
                    </MenuItem>
                    {typePermis.map((permis, index) => (
                      <MenuItem value={index}>{permis}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <LocalizationProvider
                  sx={{ flex: 1 }}
                  dateAdapter={AdapterDayjs}
                >
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="Date d'inscription" />
                  </DemoContainer>
                </LocalizationProvider>
              </Stack>
            </Box>
          </Dialog>
        </React.Fragment>
      )}

      {modalPaiment && (
        <React.Fragment>
          <Dialog
            fullScreen
            open={modalPaiment}
            onClose={handlePaiment}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: "relative" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handlePaiment}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  Paiment client : {clientName}
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  Sauvegarder
                </Button>
              </Toolbar>
            </AppBar>
            <Box className="content-aiment-dashbeard">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "90%",
                    margin: "auto",
                    justifyContent: "center",
                  },
                  display: "flex",
                  gap: 3,
                  flexDirection: "column",
                }}
                noValidate
                autoComplete="off"
                className="child-paiment-one"
              >
                  <h2>Paiment:</h2>
                  <Stack sx={{ gap: 3 }}>
                    <TextField
                      sx={{ flex: 1 }}
                      label="Paiment (DH)"
                      variant="standard"
                    />
                    <LocalizationProvider
                      sx={{ flex: 1 }}
                      dateAdapter={AdapterDayjs}
                    >
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker label="Date de paiment" />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Stack>
              </Box>
              <Box className="child-paiment-two">
                <Card>
                  <CardActionArea
                    sx={{
                      height: "100%",
                      "&[data-active]": {
                        backgroundColor: "action.selected",
                        "&:hover": {
                          backgroundColor: "action.selectedHover",
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ height: "100%" }}>
                      <Typography variant="h5" component="div">
                        Total paiment : 200DH
                      </Typography>
                      <Typography sx={{fontSize: "18px", marginTop: "2rem"}} variant="body2" color="text.secondary">
                        La date : 24/11/2004 | Le prix : 1500 DH
                      </Typography>
                      <Typography sx={{fontSize: "18px", marginTop: "2rem"}} variant="body2" color="text.secondary">
                        La date : 24/11/2004 | Le prix : 1500 DH
                      </Typography>
                      <Typography sx={{fontSize: "18px", marginTop: "2rem"}} variant="body2" color="text.secondary">
                        La date : 24/11/2004 | Le prix : 1500 DH
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Box>
          </Dialog>
        </React.Fragment>
      )}
    </div>
  );
};

export default Clients;
