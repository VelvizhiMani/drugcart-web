"use client"
import React from 'react'
import TopHeader from "@/components/layout/topHeader";
import Menu from "@/components/layout/Menu";
import Footer from "@/components/layout/Footer";
import DropSpinner from "@/components/admin/spinner/DropSpinner";
import Breadcrumb from "@/components/common/Breadcrumb";
import { useSelector } from 'react-redux';
import ToastMessage from '../common/ToastMessage';

function CustomerLayout({ children }) {
    const { loading } = useSelector((state) => state.common)
    return (
        <>
            {loading && <DropSpinner />}
            <ToastMessage />
            <TopHeader />
            <Menu />
            <div className="max-w-7xl mx-auto">
                <Breadcrumb />
            </div>
            {children}
            <Footer />
        </>
    )
}

export default CustomerLayout