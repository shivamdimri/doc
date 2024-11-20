import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row, Select } from "antd";
import Doctor from "../components/Doctor";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";

const { Option } = Select;

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [specializationFilter, setSpecializationFilter] = useState(null);
  const [addressFilter, setAddressFilter] = useState(null);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get("/api/user/get-all-approved-doctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(hideLoading());
      if (response.data.success) {
        setDoctors(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSpecializationFilterChange = (value) => {
    setSpecializationFilter(value);
  };

  const handleAddressFilterChange = (value) => {
    setAddressFilter(value);
  };

  const uniqueAddresses = [...new Set(doctors.map((doctor) => doctor.address))];

  const filteredDoctors = doctors.filter((doctor) => {
    if (specializationFilter && doctor.specialization !== specializationFilter) {
      return false;
    }
    if (addressFilter && doctor.address !== addressFilter) {
      return false;
    }
    return true;
  });

  return (
    <Layout>
      <Row gutter={20}>
        <Col span={12} style={{ marginBottom: "20px" }}>
          <Select
            placeholder="Filter by Specialization"
            style={{ width: "40%" }}
            onChange={handleSpecializationFilterChange}
          >
            <Option key="none" value={null}>
              None
            </Option>
            {doctors.map((doctor) => (
              <Option key={doctor._id} value={doctor.specialization}>
                {doctor.specialization}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={12} style={{ marginBottom: "20px" }}>
          <Select
            placeholder="Filter by Address"
            style={{ width: "40%" }}
            onChange={handleAddressFilterChange}
          >
            <Option key="none" value={null}>
              None
            </Option>
            {uniqueAddresses.map((address) => (
              <Option key={address} value={address}>
                {address}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row gutter={20}>
        {filteredDoctors.map((doctor) => (
          <Col key={doctor._id} span={8} xs={24} sm={24} lg={8}>
            <Doctor doctor={doctor} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export default Home;
