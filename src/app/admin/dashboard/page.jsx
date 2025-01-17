"use client"
import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkIcon from '@mui/icons-material/Work';
import AdminLayout from '@/components/layouts/AdminLayout'
import { Button, Typography } from '@mui/material';
import AdminCard from '@/components/admin/card/AdminCard';
import UserTable from '@/components/admin/table/UserTable';

function Dashboard() {
  return (
    <AdminLayout>
      <Box sx={{ flexGrow: 1 }}>
        <AdminCard />
        <UserTable />
      </Box>
    </AdminLayout>
  )
}

export default Dashboard