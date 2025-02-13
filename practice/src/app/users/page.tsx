"use client";
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Users = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'password', headerName: 'Password', width: 160 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 300,
      renderCell: (params) => (
        <>
          <GridActionsCellItem
            icon={<Button>Edit</Button>}
            label="Edit"
            onClick={() => handleEdit(params.row)}
          />
          <GridActionsCellItem
            icon={<Button color="error">Delete</Button>}
            label="Delete"
            onClick={() => handleDelete(params.row.id)}
          />
          <GridActionsCellItem
            icon={<Button>View</Button>}
            label="View"
            onClick={() => handleView(params.row.id)}
          />
        </>
      ),
    },
  ];
  


  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [editingUser, setEditingUser] = useState<any | null>(null);
  const [viewingUser, setViewingUser] = useState<any | null>(null); // For viewing user details
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  // Fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      console.log('Users:', response?.data);
      setAllUsers(response?.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Handle Edit button click
  const handleEdit = (user: any) => {
    setEditingUser(user);
    setOpenEdit(true);
  };

  // Handle Delete button click
  const handleDelete = async (id: number) => {
    try {
      await axios.delete('/api/users', { data: { id } });
      setAllUsers(allUsers.filter((user) => user.id !== id)); // Remove deleted user from the state
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Handle Add button click
  const handleAdd = () => {
    setOpenAdd(true); // Open Add User modal
  };

  // Handle View button click (fetch and show user data)
  const handleView = async (id: number) => {
    try {
      const response = await axios.get(`/api/users/${id}`);
      setViewingUser(response.data);
      setOpenView(true); // Open View User modal
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  // Handle closing the Edit modal
  const handleCloseEdit = () => {
    setOpenEdit(false);
    setEditingUser(null);
  };

  // Handle closing the Add User modal
  const handleCloseAdd = () => {
    setOpenAdd(false);
    setNewUser({
      name: '',
      email: '',
      username: '',
      password: '',
    });
  };

  // Handle closing the View User modal
  const handleCloseView = () => {
    setOpenView(false);
    setViewingUser(null);
  };

  // Handle form submission for updating user details
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;

    try {
      const response = await axios.put('/api/users', {
        id: editingUser.id,
        name: editingUser.name,
        email: editingUser.email,
        username: editingUser.username,
        password: editingUser.password,
      });

      // Update the user in the table with the edited data
      setAllUsers(allUsers.map((user) => (user.id === editingUser.id ? response.data : user)));
      handleCloseEdit();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Handle form submission for adding a new user
  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', newUser);
      // Add the newly created user to the table
      setAllUsers([...allUsers, response.data]);
      handleCloseAdd();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleAdd} sx={{ marginBottom: '20px' }}>
        Add User
      </Button>

      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={allUsers}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>

      {/* Edit User Modal */}
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          {editingUser && (
            <form onSubmit={handleUpdate}>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={editingUser.name}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, name: e.target.value })
                }
                required
              />
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                value={editingUser.email}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, email: e.target.value })
                }
                required
              />
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                value={editingUser.username}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, username: e.target.value })
                }
                required
              />
              <TextField
                label="Password"
                fullWidth
                margin="normal"
                type="password"
                value={editingUser.password}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, password: e.target.value })
                }
                required
              />
            </form>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add User Modal */}
      <Dialog open={openAdd} onClose={handleCloseAdd}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <form onSubmit={handleAddUser}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={newUser.name}
              onChange={(e) =>
                setNewUser({ ...newUser, name: e.target.value })
              }
              required
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              required
            />
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={newUser.username}
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
              required
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              type="password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddUser} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* View User Modal */}
      <Dialog open={openView} onClose={handleCloseView}>
        <DialogTitle>View User</DialogTitle>
        <DialogContent>
          {viewingUser && (
            <>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={viewingUser.name}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                value={viewingUser.email}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                value={viewingUser.username}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Password"
                fullWidth
                margin="normal"
                type="password"
                value={viewingUser.password}
                InputProps={{
                  readOnly: true,
                }}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseView} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Users;
