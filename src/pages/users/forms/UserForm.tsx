import { useQuery } from "@tanstack/react-query";
import { Card, Col, Form, Input, Row, Select, Space } from "antd";
import { getTenants } from "../../../http/api";
import { Tenant } from "../../../types";

const UserForm = () => {
    const { data: tenants } = useQuery({
        queryKey: ["tenants"],
        queryFn: () => {
            return getTenants().then((res) => res.data);
        },
    });

    return (
        <Row>
            <Col span={24}>
                <Space direction="vertical" size="large">
                    <Card title="Basic info">
                        <Row gutter={20}>
                            <Col span={12}>
                                <Form.Item label="First name" name="firtName">
                                    <Input size="large" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Last name" name="lastName">
                                    <Input size="large" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Email" name="email">
                                    <Input size="large" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Card>
                    <Card title="Security info">
                        <Row gutter={20}>
                            <Col span={12}>
                                <Form.Item label="Password" name="password">
                                    <Input size="large" type="password" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Card>
                    <Card title="Roles">
                        <Row gutter={20}>
                            <Col span={12}>
                                <Form.Item label="Role" name="role">
                                    <Select
                                        style={{ width: "100%" }}
                                        allowClear
                                        placeholder="Select role"
                                        size="large"
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
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Restaurant" name="tenantId">
                                    <Select
                                        style={{ width: "100%" }}
                                        allowClear
                                        placeholder="Select restaurant"
                                        size="large"
                                    >
                                        {tenants?.data.map((tenant: Tenant) => (
                                            <Select.Option
                                                value="admin"
                                                key={tenant.id}
                                            >
                                                {tenant.name}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Card>
                </Space>
            </Col>
        </Row>
    );
};

export default UserForm;
