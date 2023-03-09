import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import './editCertificate.scss';
import { getEmployeeCertificates } from '../../services/employeeservice'
import { useParams } from "react-router";
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useNavigate } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
import EditcertificateDialog from './editCertificateDialog';
import Header from '../header/header';

const EditCertificate = () => {
    const [openEditCertificate, setopenEditCertificate] = React.useState(false);
    const [certificates, setCertificates] = React.useState([]);
    const [selectedCertificate, setselectedCertificate] = React.useState();
    const getCertificate = () => {
        getEmployeeCertificates(id).then((res) => {
            setCertificates(res.data);
            console.log(res.data)
        })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getCertificate();
    }, [])
    const { id } = useParams();
    let navigate = useNavigate();
    const handleEditCertificate = () => {
        navigate(`/profile/${id}`);
    }
    const handleEachCertificateEdit = (certificateName) => {
        setopenEditCertificate(true);
        setselectedCertificate(certificateName);
    };
    const handleEachCertificateEditClose = () => {
        setopenEditCertificate(false);
    };
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    function BootstrapDialogTitle(props) {
        const { children, onClose, ...other } = props;

        return (
            <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
                {children}
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
        );
    }
    return (
        <>
            <div>
                <Header/>
            </div>
            <div className='main-container'>
                <div className='containers'>
                    <div className='back-certificate'>
                        <ArrowBackSharpIcon fontSize='large' className='back-icon' onClick={handleEditCertificate} />
                        <h3 className='edit-certificate-header'>Certificates</h3></div>
                    {
                        certificates.map((certificate) => {
                            return <>
                                <div className='certificate-icon-wrap' >
                                    <p className='p-certificates'>{certificate.certificationsName}</p>
                                    <EditIcon onClick={() => handleEachCertificateEdit(certificate.certificationsName)} />
                                </div>
                            </>
                        })
                    }
                    <div>

                    </div>
                </div>
                <div>
                    <BootstrapDialog
                        onClose={handleEachCertificateEditClose}
                        aria-labelledby="customized-dialog-title"
                        open={openEditCertificate}
                    >
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleEachCertificateEditClose}> Edit {selectedCertificate} </BootstrapDialogTitle>
                        <DialogContent dividers className='dialogContent1'>
                            <EditcertificateDialog></EditcertificateDialog>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" href="#contained-buttons" onClick={handleEachCertificateEditClose}>
                                Save changes
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </div>
            </div>
        </>
    )
}

export default EditCertificate