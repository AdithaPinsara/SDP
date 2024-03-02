// FormModal.jsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import UpdateStatusModal from './UpdateStatus'; // Import the new component
import ShowHistory from './ShowHistory';
import { Box } from '@mui/material';

interface Complaint {
  complaintId: string;
  department: string;
  description: string;
  location: {
    district: string;
    landmark?: string;
    additionalInfo?: string;
  };
  evidences: string;
  status?: number;
  complaintNote?: string;
  data: Date;
  createdAt?: Date;
  updatedAt?: Date;
}


interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  complaints: any;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose, complaints}) => {
  const [isUpdateStatusModalOpen, setIsUpdateStatusModalOpen] = useState(false);
  const [isShowHistoryModalOpen, setIsShowHistoryModalOpen] = useState(false);

  const exampleStatusHistory = [
    { label: 'Label1', date: '2022-01-01', status: 'Opened' },
    { label: 'Label2', date: '2022-01-02', status: 'Closed' },
    // Add more history items as needed
  ];

  const openUpdateStatusModal = () => {
    setIsUpdateStatusModalOpen(true);
  };

  const closeUpdateStatusModal = () => {
    setIsUpdateStatusModalOpen(false);
  };

  const openShowHistoryModal = () => {
    setIsShowHistoryModalOpen(true);
  };

  const closeShowHistoryModal = () => {
    setIsShowHistoryModalOpen(false);
  };

  const handleSubmit = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Disturbance by Wildlife Activity</DialogTitle>
      <DialogContent>
      {/* <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#9696FD" 
          color="white"
          height={50}
          width={150}
          marginBottom={1}
          style={{
            paddingLeft: '16px',      // Add left padding
            borderRadius: '30px',    // Add rounded borders
          }}
          onClick={openUpdateStatusModal}  // Open the update status modal on click
        >
          {complaints.status.toUpperCase()}
        </Box> */}
        <TextField
          label="Distribution"
          value={complaints.department}
          fullWidth
          margin="normal"
          InputProps={{ readOnly: true }}
        />
        <TextField
          label="Distribute by Wildlife Activity"
          value={complaints.department}
          fullWidth
          margin="normal"
          InputProps={{ readOnly: true }}
        />
        <TextField
          label="Description"
          value={complaints.description}
          fullWidth
          multiline
          rows={3}
          margin="normal"
          InputProps={{ readOnly: true }}
        />
        <TextField
          label="Location"
          value={complaints.location?.[0]?.landmark || ''}
          fullWidth
          margin="normal"
          InputProps={{ readOnly: true }}
        />
        <TextField
          label="Location Description"
          value={complaints.location?.[0]?.additionalInfo || ''}
          fullWidth
          multiline
          rows={3}
          margin="normal"
          InputProps={{ readOnly: true }}
        />
      </DialogContent>
      <DialogActions style={{ flexDirection: 'column' }}>
      <Button onClick={openUpdateStatusModal} variant="contained" color="primary" fullWidth style = { {backgroundColor: '#4CAF50',margin: '10px',marginTop:"10px", borderColor: '#4CAF50'}} >
          Close the Task
        </Button>
        <Button onClick={onClose} color="primary" variant="outlined" fullWidth style = { {color: '#4CAF50',margin: '10px',marginTop:"1px", borderColor: '#4CAF50'}}>
          Close
        </Button>
        
      </DialogActions>

      {isUpdateStatusModalOpen && (
        <UpdateStatusModal isOpen={isUpdateStatusModalOpen} onClose={closeUpdateStatusModal} complaints={complaints} />
      )}
    </Dialog>
  );
};

export default FormModal;