import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Table, Button } from "antd";
import moment from "moment";
import jsPDF from "jspdf";
import "jspdf-autotable";  // Import the autotable plugin

function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);
  const dispatch = useDispatch();
  
  const getAppointmentsData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get(
        "/api/doctor/get-appointments-by-doctor-id",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        setAppointments(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  const changeAppointmentStatus = async (record, status) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/doctor/change-appointment-status",
        { appointmentId: record._id, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        getAppointmentsData();
      }
    } catch (error) {
      toast.error("Error changing doctor account status");
      dispatch(hideLoading());
    }
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Patient",
      dataIndex: "name",
      render: (text, record) => <span>{record.userInfo.name}</span>,
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      render: (text, record) => <span>{record.doctorInfo.phoneNumber}</span>,
    },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")}{" "}
          {moment(record.time).format("HH:mm")}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" && (
            <div className="d-flex">
              <h1
                className="anchor px-2"
                onClick={() => changeAppointmentStatus(record, "approved")}
              >
                Approve
              </h1>
              <h1
                className="anchor"
                onClick={() => changeAppointmentStatus(record, "rejected")}
              >
                Reject
              </h1>
            </div>
          )}
        </div>
      ),
    },
  ];

  useEffect(() => {
    getAppointmentsData();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Appointments Report", 14, 20);
    
    const tableColumn = ["Id", "Patient", "Phone", "Date", "Time", "Status"];
    const tableRows = [];

    appointments.forEach(appointment => {
      const appointmentData = [
        appointment._id,
        appointment.userInfo.name,
        appointment.doctorInfo.phoneNumber,
        moment(appointment.date).format("DD-MM-YYYY"),
        moment(appointment.time).format("HH:mm"),
        appointment.status,
      ];
      tableRows.push(appointmentData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 30 });
    doc.save("appointments_report.pdf");
  };

  return (
    <Layout>
      <h1 className="page-header">Appointments</h1>
      <hr />
      <Button className="rounded"
  type="primary"
  onClick={generatePDF}
  style={{
    marginBottom: 16,
    backgroundColor: "#005555",
    color: "white",
    display: "block",
    marginLeft: "auto",
    borderRadius: "2px",
    marginTop: "20px"
  }}
>
  Generate Report
</Button>

      <Table columns={columns} dataSource={appointments} />
    </Layout>
  );
}

export default DoctorAppointments;
