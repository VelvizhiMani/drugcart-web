"use client"
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkIcon from '@mui/icons-material/Work';
import { Button, Typography } from '@mui/material';
import AdminCard from '@/components/admin/card/AdminCard';
import UserTable from '@/components/admin/table/UserTable';
import UserCard from '@/components/admin/card/UserCard';
import ProductCalendar from '@/components/admin/Calender/ProductCalender';
import { useDispatch, useSelector } from 'react-redux';
import { GetOrdersService } from '@/services/orderService';
import { GetProductService } from '@/services/productService';
import { GetAllUserService, GetCustomersService } from '@/services/admin/userService';
import { useRole } from '@/hooks/useRole'
function Dashboard() {
  const { role } = useRole()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetOrdersService())
    dispatch(GetProductService())
    dispatch(GetAllUserService())
    dispatch(GetCustomersService())
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <UserCard /> */}
      <AdminCard />
      {role === "admin" ? <UserTable /> : null}
      <ProductCalendar />
    </Box>
  )
}

export default Dashboard