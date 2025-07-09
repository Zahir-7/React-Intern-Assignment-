// components/FinancialTable.jsx
import React from "react";
import DataTable from "react-data-table-component";
import ExportLink from '../assets/Table-assets/Link.png'
import ArrowSync from '../assets/Table-assets/Arrow Sync.png'
import ArrowSplit from '../assets/Table-assets/Arrow Split (1).png'
import IconFrame from '../assets/Table-assets/Icon_frame.png'
import ArrowSplit2 from '../assets/Table-assets/Arrow Split (2).png'
import Add from '../assets/Table-assets/Add.png'
import hash from '../assets/Table-Header-assets/Icon+Title.png'
import Briefcase from '../assets/Table-Header-assets/Briefcase.png'
import Calendar from '../assets/Table-Header-assets/Calendar.png'
import Chevron1 from '../assets/Table-Header-assets/Chevron (1).png'
import Globe from '../assets/Table-Header-assets/Globe.png'
import Person from '../assets/Table-Header-assets/Person.png'
import Shape from '../assets/Table-Header-assets/Shape.png'
import ChevronCircle from '../assets/Table-Header-assets/Chevron Circle.png'

const realData = [
    {
        job: "Launch social media campaign for pro...",
        submitted: "15-11-2024",
        status: "In-process",
        submitter: "Aisha Patel",
        url: "www.aishapatel...",
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
        url: "www.irfankhanp.",
        assigned: "Tejas Pandey",
        priority: "High",
        dueDate: "30-10-2024",
        value: "3,500,000 ₹",
    },
    {
        job: "Finalize user testing feedback for app...",
        submitted: "05-12-2024",
        status: "In-process",
        submitter: "Mark Johnson",
        url: "www.markjohns..",
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
        url: "www.emilygreen.",
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
        url: "www.jessicabro...",
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
        name: <span className="absolute right-1"><img src={hash} alt="hash" /></span>,
        selector: (_, index) => index + 1,
        width: "32px",
        cell: (_, index) => (
            <div
                className="text-[#757575] absolute right-0.5 text-[12px] w-[32px] h-[32px] flex items-center justify-center"
                style={{ margin: 0, padding: 0 }}
            >
                {index + 1}
            </div>
        ),
    },
    {
        name: <span className="flex justify-between gap-15 text-xs">
            <div className="flex w-40 gap-1 ">
                <img src={Briefcase} alt="Briefcase" />
                <span className="text-[#757575]">Job Request</span>
            </div>
            <div><img src={Chevron1} className="absolute top-2.5" alt="dropdown" /></div>
        </span>,
        selector: (row) => <span className="text-xs">{row.job}</span> || "",
        width: "256px"
    },
    {
        name: <span className="text-xs flex gap-3">
            <div className="flex gap-1">
                <img src={Calendar} alt="calendar" />
                <span className="text-[#757575]">Submitted</span>
            </div>
            <div><img src={Chevron1} className="absolute top-2.5" alt="dropdown" /></div>
        </span>,
        selector: (row) => <span className="text-xs">{row.submitted}</span> || "",
        width: "124px",
        cell: (row, rowIndex) => {
            const isTarget = rowIndex === 7;
            return (
                <div
                     className={`absolute inset-0 border-[#6C8B70] text-xs flex items-center justify-center ${
        isTarget ? "border-2 shadow-xl  bg-white z-10" : ""
      }`}
                >
                    {row.submitted}
                </div>
            );
        },
    },
    {
        name: <span className="text-xs flex gap-10">
            <div className="flex gap-1">
                <img src={ChevronCircle} alt="circle" />
                <span className="text-[#757575]">Status</span>
            </div>
            <div><img src={Chevron1} className="absolute top-2.5" alt="dropdown" /></div>
        </span>,
        selector: (row) => <span className="text-xs">{row.status}</span> || "",
        cell: (row) => {
            if (!row.status) return "";
            const bg =
                row.status === "In-process"
                    ? "bg-[#FFF3D6] text-[#85640B]"
                    : row.status === "Need to start"
                        ? "bg-[#E2E8F0] text-[#475569]"
                        : row.status === "Blocked"
                            ? "bg-red-100 text-red-700"
                            : "bg-[#D3F2E3] text-[#0A6E3D]";
            return (
                <div className="w-full text-center">
                    <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${bg}`}
                    >
                        {row.status}
                    </span>
                </div>
            );
        },
        width: "124px"
    },
    {
        name: <span className="text-xs flex gap-4">
            <div className="flex gap-1">
                <img src={Person} alt="person" />
                <span className="text-[#757575]">Submitter</span>
            </div>
            <div><img src={Chevron1} className="absolute top-2.5" alt="dropdown" /></div>
        </span>,
        selector: (row) => <span className="text-xs">{row.submitter}</span> || "",
        width: "124px"
    },
    {
        name: <span className="text-xs flex gap-14">
            <div className="flex gap-1">
                <img src={Globe} alt="globe" />
                <span className="text-[#757575]">URL</span>
            </div>
            <div><img src={Chevron1} className="absolute top-2.5" alt="dropdown" /></div>
        </span>,
        selector: (row) => <span className="text-xs">{row.url}</span> || "",
        width: "124px",
        cell: (row) =>
            row.url ? (
                <span

                    className="text-[#121212] underline absolute text-xs"

                >
                    {row.url}
                </span>
            ) : (
                ""
            ),
    },
    {
        name: (<div className="text-xs flex ">
            <img src={Shape} alt="shape" />
            <span className="text-[#666C66] absolute left-9">Assigned</span>
        </div>),
        selector: (row) => <span className="text-xs ">{row.assigned}</span> || "",
        width: "124px"
    },
    {
        name: <div className="  bg-[#EAE3FC] w-[130px] left-0 absolute h-full">
            <span className="text-[#655C80] absolute left-2 top-1.5">Priority</span>
        </div>,
        width: "125px",
        selector: (row) => row.priority || "",
        cell: (row) =>
            row.priority ? (
                <span
                    className={`text-xs text-center w-full font-medium ${row.priority === "High"
                        ? "text-[#EF4D44]"
                        : row.priority === "Medium"
                            ? "text-[#C29210]"
                            : "text-[#1A8CFF]"
                        }`}
                >
                    {row.priority}
                </span>
            ) : (
                ""
            ),
    },
    {
        name: <div className="  bg-[#EAE3FC] w-[130px] left-0 absolute h-full">
            <span className="text-[#655C80] absolute left-2 top-1.5">Due Date</span>
        </div>,
        selector: (row) => <span className="text-xs ml-6">{row.dueDate}</span> || "",
        width: "125px"
    },
    {
        name: <div className="  bg-[#FFE9E0] w-[130px] left-0 absolute h-full">
            <span className="text-[#8C6C62] absolute left-2 top-1.5">Est. Value</span>
        </div>,
        selector: (row) => <span className="text-xs  ml-7 ">{row.value} </span> || "",
        width: "125px"
    },
    {
        name: "",
        selector: () => "",
        width: "125px"
    },
];

const customStyles = {
    headRow: {
        style: {
            backgroundColor: "#E2E2E2",
            minHeight: "40px",
            borderBottom: "1px solid #FFF",
        },
    },
    headCells: {
        style: {
            fontWeight: "600",
            fontSize: "12px",
            border: "1px solid #FFF",
            backgroundColor: columns.id === "assigned-column" ? "#83A588" : "#EEE",
        },
    },
    rows: {
        style: {
            minHeight: "38px",
            backgroundColor: "#FFF",
            borderBottom: "1px solid #FFF",
        },
    },
    cells: {
        style: {
            border: "1px solid #F5F5F5",
            fontSize: "14px",
        },
    },
};

const FinancialTable = () => {
    return (
        <div className="pt-1 w-full">
            <div className="min-w-[1300px]">
                {/* Custom row headers with merged logic */}
                <div className="grid grid-cols-[32px_256px_124px_124px_124px_124px_124px_125px_125px_124px_124px] w-full text-xs font-medium">

                    {/* 1st column: # (blank for header row) */}
                    <div className="h-10 border border-[#EEE] "></div>

                    {/* 2nd to 5th column: Q3 Financial Overview */}
                    <div className="col-span-4 h-10 px-2 bg-[#E2E2E2] border border-[#EEE] gap-2  flex items-center">
                        <div
                            className="bg-[#EEE] ml-2 px-2 rounded-sm text-xs font-medium gap-1 flex items-center"
                            style={{ width: "158px", height: "24px" }}
                        >
                            <img src={ExportLink} alt="Link" />
                            <span className="text-[#545454]">Q3 Financial Overview</span>
                        </div>
                        <img src={ArrowSync} alt="Sync" />
                    </div>

                    {/* 6th column (URL) - blank header */}
                    <div className="h-10 border border-[#EEE]"></div>

                    {/* 7th column (Assigned) - ABC */}
                    <div className="h-10 w-[124px]  bg-[#D2E0D4] border  border-[#EEE] flex gap-1 items-center justify-center">
                        <img src={ArrowSplit} className="w-4 h-4" alt="Split" />
                        <span className="text-[#505450]">ABC</span>
                        <img src={IconFrame} alt="Frame" />
                    </div>

                    {/* 8th & 9th columns (Priority + DueDate) - Answer a question */}
                    <div className="col-span-2 h-10 bg-[#DCCFFC] border gap-1.5 border-[#EEE] flex items-center justify-center">
                        <img src={ArrowSplit2} alt="Split" />
                        <span className="text-[#463E59]">Answer a question</span>
                        <img src={IconFrame} alt="Frame" />
                    </div>

                    {/* 10th column (Est. Value) - Extract */}
                    <div className="h-10 bg-[#FAC2AF] border border-[#EEE] gap-1 flex items-center justify-center">
                        <img src={ArrowSplit2} alt="Split" />
                        <span className="text-[#695149]">Extract</span>
                        <img src={IconFrame} alt="Frame" />
                    </div>

                    {/* 11th column (+) */}
                    <div className="h-10 bg-[#EEE] border border-[#EEE] flex items-center justify-center">
                        <img src={Add} alt="Add" />
                    </div>
                </div>

                {/* Actual Data Table */}
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