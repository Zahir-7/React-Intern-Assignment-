// components/FinancialTable.jsx
import React from "react";
import DataTable from "react-data-table-component";

const realData = [
    {
        job: "Launch social media campaign for product",
        submitted: "15-11-2024",
        status: "In-process",
        submitter: "Aisha Patel",
        url: "www.aishapatel.com",
        assigned: "Sophie Choudhury",
        priority: "Medium",
        dueDate: "20-11-2024",
        value: "6,200,000 ₹",
    },
    {
        job: "Update press kit for company redesign",
        submitted: "28-10-2024",
        status: "Need to start",
        submitter: "Irfan Khan",
        url: "www.irfankhan.com",
        assigned: "Tejas Pandey",
        priority: "High",
        dueDate: "30-10-2024",
        value: "3,500,000 ₹",
    },
    {
        job: "Finalize user testing feedback for app",
        submitted: "05-12-2024",
        status: "In-process",
        submitter: "Mark Johnson",
        url: "www.markjohnson.com",
        assigned: "Rachel Lee",
        priority: "Medium",
        dueDate: "10-12-2024",
        value: "4,750,000 ₹",
    },
    {
        job: "Design new features for the website",
        submitted: "10-01-2025",
        status: "Complete",
        submitter: "Emily Green",
        url: "www.emilygreen.com",
        assigned: "Tom Wright",
        priority: "Low",
        dueDate: "15-01-2025",
        value: "5,900,000 ₹",
    },
    {
        job: "Prepare financial report for Q4",
        submitted: "25-01-2025",
        status: "Blocked",
        submitter: "Jessica Brown",
        url: "www.jessicabrown.com",
        assigned: "Kevin Smith",
        priority: "Low",
        dueDate: "30-01-2025",
        value: "2,800,000 ₹",
    },
];

// Fill up to 25 rows
const data = Array.from({ length: 25 }, (_, i) => realData[i] || {});

const columns = [
    {
        name: "#",
        selector: (_, index) => index + 1,
        width: "50px",
        cell: (_, index) => (
            <div className="w-full text-center">{index + 1}</div>
        )
    }
    ,
    {
        name: "Job Request",
        selector: (row) => row.job || "",
    },
    {
        name: "Submitted",
        selector: (row) => row.submitted || "",
    },
    {
        name: "Status",
        selector: (row) => row.status || "",
        cell: (row) => {
            if (!row.status) return "";
            const bg =
                row.status === "In-process"
                    ? "bg-yellow-100 text-yellow-700"
                    : row.status === "Need to start"
                        ? "bg-blue-100 text-blue-700"
                        : row.status === "Blocked"
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700";
            return (
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${bg}`}>
                    {row.status}
                </span>
            );
        },
    },
    {
        name: "Submitter",
        selector: (row) => row.submitter || "",
    },
    {
        name: "",
        selector: (row) => row.url || "",
        cell: (row) =>
            row.url ? (
                <a
                    href={`https://${row.url}`}
                    className="text-blue-500 underline text-sm"
                    target="_blank"
                    rel="noreferrer"
                >
                    {row.url}
                </a>
            ) : (
                ""
            ),
    },
    {
        name: "Assigned",
        selector: (row) => row.assigned || "",
    },
    {
        name: "Priority",
        selector: (row) => row.priority || "",
        cell: (row) =>
            row.priority ? (
                <span
                    className={`text-sm font-medium ${row.priority === "High"
                        ? "text-red-600"
                        : row.priority === "Medium"
                            ? "text-yellow-600"
                            : "text-blue-600"
                        }`}
                >
                    {row.priority}
                </span>
            ) : (
                ""
            ),
    },
    {
        name: "Due Date",
        selector: (row) => row.dueDate || "",
    },
    {
        name: "Est. Value",
        selector: (row) => row.value || "",
    },
    {
        name: "+",
        selector: () => "",
    },
];

const customStyles = {
    headRow: {
        style: {
            backgroundColor: "#E2E2E2",
            minHeight: "40px",
            borderBottom: "1px solid #DDD",
        },
    },
    headCells: {
        style: {
            fontWeight: "600",
            fontSize: "12px",
            border: "1px solid #EEE",
            backgroundColor: "#E2E2E2",
        },
    },
    rows: {
        style: {
            minHeight: "38px",
            backgroundColor: "#FFF",
            borderBottom: "1px solid #EEE",
        },
    },
    cells: {
        style: {
            border: "1px solid #EEE",
            fontSize: "13px",
        },
    },
};

const FinancialTable = () => {
    return (
        <div className="p-4 w-full overflow-x-auto">
            {/* Entire scrollable content */}
            <div className="min-w-[1300px]">
                {/* Merged Headers in the scrollable zone */}
                <div className="grid grid-cols-[50px_1fr_120px_100px_120px_180px_40px_160px_100px_120px_140px_40px] text-xs font-medium w-full">
                    <div className="h-10 bg-[#EEE] border border-[#EEE]"></div>
                    <div className="col-span-4 h-10 bg-[#EEE] border border-[#EEE] flex items-center justify-center">
                        Q3 Financial Overview
                    </div>
                    <div className="h-10 bg-[#EEE] border border-[#EEE]"></div>
                    <div className="h-10 bg-[#EEE] border border-[#EEE] flex items-center justify-center">
                        ABC
                    </div>
                    <div className="col-span-2 h-10 bg-[#EEE] border border-[#EEE] flex items-center justify-center">
                        Answer a question
                    </div>
                    <div className="h-10 bg-[#EEE] border border-[#EEE] flex items-center justify-center">
                        Extract
                    </div>
                    <div className="h-10 bg-[#EEE] border border-[#EEE] flex items-center justify-center">
                        +
                    </div>
                </div>

                {/* The data table */}
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                    dense
                    noHeader
                    highlightOnHover={false}
                    pointerOnHover={false}
                    striped={false}
                />
            </div>
        </div>

    );
};

export default FinancialTable;
