import { Button, Card, Col, Input, Row, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const UsersFilter = () => {
    return (
        <Card>
            <Row justify={"space-between"} align="middle">
                <Col span={16}>
                    <Row gutter={20}>
                        <Col span={8}>
                            <Input.Search placeholder="Search" />
                        </Col>
                        <Col span={8}>
                            <Select
                                style={{ width: "100%" }}
                                placeholder="Select role"
                                allowClear
                            >
                                <Select.Option value="admin">
                                    Admin
                                </Select.Option>
                                <Select.Option value="manager">
                                    Manager
                                </Select.Option>
                                <Select.Option value="customer">
                                    Customer
                                </Select.Option>
                            </Select>
                        </Col>
                        <Col span={8}>
                            <Select
                                style={{ width: "100%" }}
                                placeholder="Select status"
                                allowClear
                            >
                                <Select.Option value="ban">Ban</Select.Option>
                                <Select.Option value="active">
                                    Active
                                </Select.Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
                <Col span={8} style={{ textAlign: "right" }}>
                    <Button type="primary" icon={<PlusOutlined />}>
                        Create User
                    </Button>
                </Col>
            </Row>
        </Card>
    );
};

export default UsersFilter;
